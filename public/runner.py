import ast, builtins, contextlib, io, json, traceback

def execute_lesson(payload):
    source = payload['code']
    class LimitedOutput(io.StringIO):
        def write(self, text):
            if self.tell() + len(text) > 20000:
                raise RuntimeError('Output limit reached. Try printing fewer lines.')
            return super().write(text)
    captured = LimitedOutput()
    inputs = iter(payload.get('inputs', '').splitlines())
    def read_input(prompt=''):
        try:
            return next(inputs)
        except StopIteration:
            raise EOFError('Add another answer under Program input, one per line, then run again.')
    custom_builtins = dict(vars(builtins))
    custom_builtins['input'] = read_input
    namespace = {'__builtins__': custom_builtins, '__name__': '__main__'}
    def rerun(overrides):
        tree = ast.parse(source)
        class ReplaceInputs(ast.NodeTransformer):
            def visit_Assign(self, node):
                for target in node.targets:
                    if isinstance(target, ast.Name) and target.id in overrides:
                        node.value = ast.parse(repr(overrides[target.id]), mode='eval').body
                return node
        tree = ast.fix_missing_locations(ReplaceInputs().visit(tree))
        fresh = {'__builtins__': custom_builtins, '__name__':'__main__'}
        with contextlib.redirect_stdout(LimitedOutput()):
            exec(compile(tree, 'practice.py', 'exec'), fresh)
        return fresh
    def has_node(kind):
        return any(type(node).__name__ == kind for node in ast.walk(ast.parse(source)))
    def counter_repeats(cls):
        c = cls()
        return c.increment() == 1 and c.increment() == 2 and c.value == 2
    def counter_independent(cls):
        a, b = cls(), cls()
        a.increment()
        return a.value == 1 and b.value == 0
    def todo_preserves(add, complete):
        items = ['Study']
        a = add(items, 'Rest')
        b = complete(items, 'Study')
        return items == ['Study'] and a is not items and b is not items
    def student_average(cls):
        s = cls('Ada')
        s.add_grade(80)
        s.add_grade(100)
        return s.grades == [80,100] and s.average() == 90
    def student_independent(cls):
        a, b = cls('Ada'), cls('Lin')
        a.add_grade(100)
        return b.grades == [] and b.average() == 0
    try:
        with contextlib.redirect_stdout(captured), contextlib.redirect_stderr(captured):
            exec(compile(source, 'practice.py', 'exec'), namespace)
    except BaseException:
        return json.dumps({'output': captured.getvalue(), 'error': traceback.format_exc(), 'results': []})
    checks = dict(namespace)
    checks.update(output=captured.getvalue(),source=source,user_globals=namespace,rerun=rerun,has_node=has_node,counter_repeats=counter_repeats,counter_independent=counter_independent,todo_preserves=todo_preserves,student_average=student_average,student_independent=student_independent)
    results=[]
    for test in payload.get('tests', []):
        try:
            with contextlib.redirect_stdout(LimitedOutput()), contextlib.redirect_stderr(LimitedOutput()):
                passed = bool(eval(test['expr'], checks))
            results.append({'passed':passed, 'detail': '' if passed else 'Not quite yet. Compare your result with this requirement.'})
        except BaseException as exc:
            results.append({'passed':False, 'detail':f'{type(exc).__name__}: {exc}'})
    return json.dumps({'output':captured.getvalue(), 'error':None, 'results':results})
