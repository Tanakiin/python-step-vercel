const COURSE_VERSION = "small-steps-1";
const COURSE = [
  {
    "id": 0,
    "group": "Python Basics",
    "title": "What is a program?",
    "intro": "",
    "body": "<p>A program is a set of instructions a computer follows. Python is a language for writing those instructions. People use it to analyse data, automate repetitive tasks, and build applications.</p>",
    "example": "print(\"Hello\")",
    "walkthrough": "This is one Python instruction. It tells the computer to display Hello. You will write this instruction in the next step.",
    "task": "What does a program give a computer?",
    "starter": "",
    "answer": "",
    "hint": "This is one Python instruction. It tells the computer to display Hello. You will write this instruction in the next step.",
    "tests": [],
    "inputs": "",
    "kind": "question",
    "options": [
      "Instructions to follow",
      "Only pictures to display",
      "A new operating system"
    ],
    "correct": 0,
    "exampleRunnable": false
  },
  {
    "id": 1,
    "group": "Python Basics",
    "title": "Show one message",
    "intro": "",
    "body": "<p><code>print()</code> displays something in the Output panel. Put your message between matching quotes, inside the parentheses. The quotes tell Python that this is text.</p>",
    "example": "print(\"Hello\")",
    "walkthrough": "Python displays Hello. The quotes and parentheses are part of the instruction; they do not appear in the output.",
    "task": "Change the message to Welcome. Run it, then press Check.",
    "starter": "print(\"Hello\")",
    "answer": "print(\"Welcome\")",
    "hint": "Keep print(\"...\"). Change only the text between the quotes.",
    "tests": [
      {
        "label": "Output is Welcome",
        "expr": "output == 'Welcome\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 2,
    "group": "Python Basics",
    "title": "Run two instructions",
    "intro": "",
    "body": "<p>Python runs instructions from top to bottom. Put each <code>print()</code> instruction on its own line.</p>",
    "example": "print(\"Start\")\nprint(\"Finish\")",
    "walkthrough": "The first line displays Start. The second displays Finish underneath it.",
    "task": "Keep Ready as the first message. Add a second line that prints Go.",
    "starter": "print(\"Ready\")\n",
    "answer": "print(\"Ready\")\nprint(\"Go\")",
    "hint": "The first line displays Start. The second displays Finish underneath it.",
    "tests": [
      {
        "label": "Ready, then Go on separate lines",
        "expr": "output == 'Ready\\nGo\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 3,
    "group": "Python Basics",
    "title": "Leave a comment",
    "intro": "",
    "body": "<p>A comment is a note for the person reading the code. Python ignores text after <code>#</code> on that line. Comments do not appear in the output.</p>",
    "example": "# This message welcomes the learner\nprint(\"Hello\")",
    "walkthrough": "Python skips the comment and runs print(). Only Hello appears.",
    "task": "Add a comment above the existing print line. Keep the output unchanged.",
    "starter": "print(\"Ready\")",
    "answer": "# We are ready to begin\nprint(\"Ready\")",
    "hint": "Python skips the comment and runs print(). Only Hello appears.",
    "tests": [
      {
        "label": "Output stays Ready",
        "expr": "output == 'Ready\\n'"
      },
      {
        "label": "There is a comment",
        "expr": "any(t.type == __import__(\"tokenize\").COMMENT for t in __import__(\"tokenize\").generate_tokens(__import__(\"io\").StringIO(source).readline))"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 4,
    "group": "Python Basics",
    "title": "Save Python code",
    "intro": "",
    "body": "<p>A Python file is a text file containing Python instructions. Its name ends in <code>.py</code>. This site calls the editor file <code>practice.py</code> and saves your code automatically in your browser profile.</p>",
    "example": "hello.py",
    "walkthrough": "The filename tells you this file holds Python code. The name hello is your choice; .py is the usual ending.",
    "task": "Which is the usual name for a Python program file?",
    "starter": "",
    "answer": "",
    "hint": "The filename tells you this file holds Python code. The name hello is your choice; .py is the usual ending.",
    "tests": [],
    "inputs": "",
    "kind": "question",
    "options": [
      "hello.jpg",
      "hello.py",
      "hello.mp3"
    ],
    "correct": 1,
    "exampleRunnable": false
  },
  {
    "id": 5,
    "group": "Python Basics",
    "title": "Editors and Python",
    "intro": "",
    "body": "<p>An editor lets you write and change code. The Python interpreter reads that code and runs it. This site provides both, so you can continue without installing anything.</p>",
    "example": "Write code → Run → Read output",
    "walkthrough": "The editor is where you type. Run asks Python to execute what you typed. Output shows the result.",
    "task": "Which part executes your instructions?",
    "starter": "",
    "answer": "",
    "hint": "The editor is where you type. Run asks Python to execute what you typed. Output shows the result.",
    "tests": [],
    "inputs": "",
    "kind": "question",
    "options": [
      "The filename",
      "The Python interpreter",
      "A comment"
    ],
    "correct": 1,
    "exampleRunnable": false
  },
  {
    "id": 6,
    "group": "Python Basics",
    "title": "Optional: Python on your computer",
    "intro": "",
    "body": "<p>To work outside this site, install Python 3 using the instructions for your operating system at <a href=\"https://www.python.org/downloads/\" target=\"_blank\" rel=\"noopener\">python.org</a>. IDLE, included with many Python installations, is an editor you can use to create and run a .py file. You can skip installation while learning here.</p>",
    "example": "print(\"Hello from my computer\")",
    "walkthrough": "In IDLE, open a new file, enter this line, save it as hello.py, then choose Run Module. The output should show Hello from my computer. Another editor, such as VS Code, is optional.",
    "task": "Do you need a local installation to continue on this website?",
    "starter": "",
    "answer": "",
    "hint": "In IDLE, open a new file, enter this line, save it as hello.py, then choose Run Module. The output should show Hello from my computer. Another editor, such as VS Code, is optional.",
    "tests": [],
    "inputs": "",
    "kind": "question",
    "options": [
      "Yes, before the next lesson",
      "No, Python runs in this browser"
    ],
    "correct": 1,
    "exampleRunnable": false
  },
  {
    "id": 7,
    "group": "Variables",
    "title": "Give a value a name",
    "intro": "",
    "body": "<p>A variable is a name that refers to a value. <code>=</code> assigns the value on its right to the name on its left.</p>",
    "example": "name = \"Ada\"\nprint(name)",
    "walkthrough": "The first line gives the text Ada the name name. The second prints that stored text. There are no quotes around the variable name in print(name).",
    "task": "Store the text Lin in a variable called name. Print name.",
    "starter": "name = \"\"\nprint(name)",
    "answer": "name = \"Lin\"\nprint(name)",
    "hint": "The first line gives the text Ada the name name. The second prints that stored text. There are no quotes around the variable name in print(name).",
    "tests": [
      {
        "label": "name contains Lin",
        "expr": "name == \"Lin\""
      },
      {
        "label": "Print the stored name",
        "expr": "output == 'Lin\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 8,
    "group": "Variables",
    "title": "Text or a variable?",
    "intro": "",
    "body": "<p>Quotes mean literal text. Without quotes, Python looks for a variable with that name. These two instructions can therefore display different things.</p>",
    "example": "name = \"Ada\"\nprint(\"name\")\nprint(name)",
    "walkthrough": "print(\"name\") displays the four letters name. print(name) looks up the variable and displays Ada.",
    "task": "Remove the quotes around name in the print instruction so it displays Sam.",
    "starter": "name = \"Sam\"\nprint(\"name\")",
    "answer": "name = \"Sam\"\nprint(name)",
    "hint": "print(\"name\") displays the four letters name. print(name) looks up the variable and displays Ada.",
    "tests": [
      {
        "label": "Output is Sam",
        "expr": "output == 'Sam\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 9,
    "group": "Variables",
    "title": "Change a stored value",
    "intro": "",
    "body": "<p>Assigning to the same variable again replaces the value it refers to. Python uses the most recent assignment it has reached.</p>",
    "example": "name = \"Ada\"\nname = \"Lin\"\nprint(name)",
    "walkthrough": "name starts as Ada. The next assignment changes it to Lin. The print line therefore displays Lin.",
    "task": "After the first assignment, change city to London. Print city.",
    "starter": "city = \"Paris\"\n",
    "answer": "city = \"Paris\"\ncity = \"London\"\nprint(city)",
    "hint": "name starts as Ada. The next assignment changes it to Lin. The print line therefore displays Lin.",
    "tests": [
      {
        "label": "city is London",
        "expr": "city == \"London\""
      },
      {
        "label": "Output is London",
        "expr": "output == 'London\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 10,
    "group": "Variables",
    "title": "Choose a variable name",
    "intro": "",
    "body": "<p>Use a name that describes the value. Names can contain letters, digits, and underscores, but cannot begin with a digit or contain spaces. Python distinguishes uppercase from lowercase. Reserved words such as <code>if</code> cannot be variable names.</p>",
    "example": "student_name = \"Ada\"\nprint(student_name)",
    "walkthrough": "The underscore joins two words into one valid name. Both lines use exactly the same spelling.",
    "task": "Fix the variable name to student_name in both lines.",
    "starter": "student name = \"Lin\"\nprint(student name)",
    "answer": "student_name = \"Lin\"\nprint(student_name)",
    "hint": "The underscore joins two words into one valid name. Both lines use exactly the same spelling.",
    "tests": [
      {
        "label": "student_name contains Lin",
        "expr": "student_name == \"Lin\""
      },
      {
        "label": "Print Lin",
        "expr": "output == 'Lin\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 11,
    "group": "Variables",
    "title": "Whole numbers: int",
    "intro": "",
    "body": "<p>A whole number such as <code>3</code> is an integer, or <code>int</code>. Write numbers without quotes when you want Python to treat them as numbers.</p>",
    "example": "credits = 3\nprint(credits)",
    "walkthrough": "credits holds the number 3. print displays it. \"3\" would be text instead, even though the output would look similar.",
    "task": "Create credits with the whole number 4, without quotes.",
    "starter": "credits = 0",
    "answer": "credits = 4",
    "hint": "credits holds the number 3. print displays it. \"3\" would be text instead, even though the output would look similar.",
    "tests": [
      {
        "label": "credits is the integer 4",
        "expr": "type(credits) is int and credits == 4"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 12,
    "group": "Variables",
    "title": "Decimal numbers: float",
    "intro": "",
    "body": "<p>A number written with a decimal point, such as <code>2.5</code>, is a <code>float</code>. Floats are useful for measurements and other values with fractional parts.</p>",
    "example": "height = 1.75\nprint(height)",
    "walkthrough": "height holds the decimal number 1.75. A dot separates the whole and fractional parts.",
    "task": "Create temperature with the decimal number 21.5.",
    "starter": "temperature = 0.0",
    "answer": "temperature = 21.5",
    "hint": "height holds the decimal number 1.75. A dot separates the whole and fractional parts.",
    "tests": [
      {
        "label": "temperature is the float 21.5",
        "expr": "type(temperature) is float and temperature == 21.5"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 13,
    "group": "Variables",
    "title": "Text values: str",
    "intro": "",
    "body": "<p>Python calls a text value a string, or <code>str</code>. Text can contain letters, spaces, and digits. Quotes make <code>\"25\"</code> a string, even though it contains digits.</p>",
    "example": "room = \"204\"\nprint(room)",
    "walkthrough": "room holds a label made of three characters. Here the digits identify a room; they are not a quantity to calculate with.",
    "task": "Store 007 as text in code. Keep the leading zeros.",
    "starter": "code = \"\"",
    "answer": "code = \"007\"",
    "hint": "room holds a label made of three characters. Here the digits identify a room; they are not a quantity to calculate with.",
    "tests": [
      {
        "label": "code is the string 007",
        "expr": "type(code) is str and code == \"007\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 14,
    "group": "Variables",
    "title": "True or false: bool",
    "intro": "",
    "body": "<p>A boolean, or <code>bool</code>, has exactly two possible values: <code>True</code> and <code>False</code>. Use capital first letters and no quotes.</p>",
    "example": "is_ready = True\nprint(is_ready)",
    "walkthrough": "is_ready records a yes-or-no state. \"True\" would be a string; True is a boolean.",
    "task": "Set is_ready to the boolean True.",
    "starter": "is_ready = False",
    "answer": "is_ready = True",
    "hint": "is_ready records a yes-or-no state. \"True\" would be a string; True is a boolean.",
    "tests": [
      {
        "label": "is_ready is True",
        "expr": "is_ready is True"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 15,
    "group": "Variables",
    "title": "No value yet: None",
    "intro": "",
    "body": "<p><code>None</code> represents the absence of a value. It is different from zero, empty text, or False. Use a capital N and no quotes.</p>",
    "example": "result = None\nprint(result)",
    "walkthrough": "result has a name, but its value is deliberately absent. Python prints None when asked to display it.",
    "task": "Set result to None.",
    "starter": "result = \"\"",
    "answer": "result = None",
    "hint": "result has a name, but its value is deliberately absent. Python prints None when asked to display it.",
    "tests": [
      {
        "label": "result is None",
        "expr": "result is None"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 16,
    "group": "Variables",
    "title": "Ask for the type",
    "intro": "",
    "body": "<p><code>type()</code> tells you what kind of value you have. Put a value or variable inside its parentheses, then print the result.</p>",
    "example": "value = 7\nprint(type(value))",
    "walkthrough": "Python first looks up value, then finds its type. The output is <class 'int'> because 7 is a whole number.",
    "task": "Print the type of the supplied value. Leave value unchanged.",
    "starter": "value = \"7\"\n",
    "answer": "value = \"7\"\nprint(type(value))",
    "hint": "Python first looks up value, then finds its type. The output is <class 'int'> because 7 is a whole number.",
    "tests": [
      {
        "label": "value stays text",
        "expr": "value == \"7\""
      },
      {
        "label": "The output identifies str",
        "expr": "output == \"<class 'str'>\\n\""
      },
      {
        "label": "Practise type()",
        "expr": "calls('type')"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 17,
    "group": "Variables",
    "title": "Convert text to an integer",
    "intro": "",
    "body": "<p><code>int()</code> converts text containing a whole number into an integer. Store the returned value in a variable. The original text stays unchanged.</p>",
    "example": "raw = \"12\"\ncount = int(raw)\nprint(type(count))",
    "walkthrough": "raw is text. int(raw) produces the whole number 12. count holds that number, so its type is int.",
    "task": "Convert raw into an integer called count.",
    "starter": "raw = \"8\"\n",
    "answer": "raw = \"8\"\ncount = int(raw)",
    "hint": "raw is text. int(raw) produces the whole number 12. count holds that number, so its type is int.",
    "tests": [
      {
        "label": "count is the integer 8",
        "expr": "type(count) is int and count == 8"
      },
      {
        "label": "Also works for another whole-number string",
        "expr": "type(rerun({\"raw\":\"14\"})[\"count\"]) is int and rerun({\"raw\":\"14\"})[\"count\"] == 14"
      },
      {
        "label": "Practise int()",
        "expr": "calls('int')"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 18,
    "group": "Variables",
    "title": "Convert text to a decimal",
    "intro": "",
    "body": "<p><code>float()</code> converts numeric text into a decimal number. Use it when the text contains a decimal point.</p>",
    "example": "raw = \"2.5\"\nprice = float(raw)",
    "walkthrough": "raw still contains text. price contains the float 2.5. int(\"2.5\") would fail because that text is not written as a whole number.",
    "task": "Convert raw into a float called price.",
    "starter": "raw = \"3.75\"\n",
    "answer": "raw = \"3.75\"\nprice = float(raw)",
    "hint": "raw still contains text. price contains the float 2.5. int(\"2.5\") would fail because that text is not written as a whole number.",
    "tests": [
      {
        "label": "price is the float 3.75",
        "expr": "type(price) is float and price == 3.75"
      },
      {
        "label": "Converts a different price",
        "expr": "rerun({\"raw\":\"8.5\"})[\"price\"] == 8.5"
      },
      {
        "label": "Practise float()",
        "expr": "calls('float')"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 19,
    "group": "Variables",
    "title": "Convert a number to text",
    "intro": "",
    "body": "<p><code>str()</code> produces a text version of a value. Converting a number to text does not change the original number.</p>",
    "example": "count = 12\nlabel = str(count)",
    "walkthrough": "count is the integer 12. label is the string \"12\". These look alike when printed, but have different types.",
    "task": "Convert count into text called label.",
    "starter": "count = 8\n",
    "answer": "count = 8\nlabel = str(count)",
    "hint": "count is the integer 12. label is the string \"12\". These look alike when printed, but have different types.",
    "tests": [
      {
        "label": "label is text 8",
        "expr": "type(label) is str and label == \"8\""
      },
      {
        "label": "Uses the supplied count",
        "expr": "rerun({\"count\":21})[\"label\"] == \"21\""
      },
      {
        "label": "Practise str()",
        "expr": "calls('str')"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 20,
    "group": "Variables",
    "title": "Convert a number to bool",
    "intro": "",
    "body": "<p><code>bool()</code> converts a value to True or False. For numbers, zero becomes False. Any nonzero number becomes True.</p>",
    "example": "has_items = bool(0)\nprint(has_items)",
    "walkthrough": "The output is False because the number is zero. bool(3) would produce True.",
    "task": "Convert count to a boolean named has_items.",
    "starter": "count = 2\n",
    "answer": "count = 2\nhas_items = bool(count)",
    "hint": "The output is False because the number is zero. bool(3) would produce True.",
    "tests": [
      {
        "label": "Nonzero becomes True",
        "expr": "has_items is True"
      },
      {
        "label": "Zero becomes False",
        "expr": "rerun({\"count\":0})[\"has_items\"] is False"
      },
      {
        "label": "Practise bool()",
        "expr": "calls('bool')"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 21,
    "group": "Variables",
    "title": "Convert text to bool",
    "intro": "",
    "body": "<p>For strings, <code>bool()</code> checks whether text is empty. Empty text becomes False. Any nonempty text becomes True; it does not interpret the meaning of the words.</p>",
    "example": "print(bool(\"\"))\nprint(bool(\"False\"))",
    "walkthrough": "The first line prints False because there are no characters. The second prints True because \"False\" contains characters.",
    "task": "Convert text to a boolean named has_text.",
    "starter": "text = \"False\"\n",
    "answer": "text = \"False\"\nhas_text = bool(text)",
    "hint": "The first line prints False because there are no characters. The second prints True because \"False\" contains characters.",
    "tests": [
      {
        "label": "Nonempty text becomes True",
        "expr": "has_text is True"
      },
      {
        "label": "Empty text becomes False",
        "expr": "rerun({\"text\":\"\"})[\"has_text\"] is False"
      },
      {
        "label": "Practise bool()",
        "expr": "calls('bool')"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 22,
    "group": "Variables",
    "title": "Converting a decimal to int",
    "intro": "",
    "body": "<p><code>int()</code> can also take a float. It discards the fractional part toward zero; it does not round to the nearest whole number.</p>",
    "example": "whole = int(3.9)\nprint(whole)",
    "walkthrough": "The output is 3, not 4. For a negative float, int(-3.9) gives -3.",
    "task": "Convert measurement to an integer named whole.",
    "starter": "measurement = 7.8\n",
    "answer": "measurement = 7.8\nwhole = int(measurement)",
    "hint": "The output is 3, not 4. For a negative float, int(-3.9) gives -3.",
    "tests": [
      {
        "label": "Fractional part is discarded",
        "expr": "type(whole) is int and whole == 7"
      },
      {
        "label": "Negative values go toward zero",
        "expr": "rerun({\"measurement\":-7.8})[\"whole\"] == -7"
      },
      {
        "label": "Practise int()",
        "expr": "calls('int')"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 23,
    "group": "Operators",
    "title": "Add",
    "intro": "",
    "body": "<p><code>+</code> adds two numbers. Store a calculation using <code>=</code>, just as you stored a single value.</p>",
    "example": "answer = 4 + 3\nprint(answer)",
    "walkthrough": "Python calculates 4 + 3 first. It stores 7 in answer, then displays it.",
    "task": "Set result to left + right.",
    "starter": "left = 5\nright = 3\n",
    "answer": "left = 5\nright = 3\nresult = left + right",
    "hint": "Python calculates 4 + 3 first. It stores 7 in answer, then displays it.",
    "tests": [
      {
        "label": "Calculate using both variables",
        "expr": "result == left + right"
      },
      {
        "label": "Works when left changes",
        "expr": "rerun({\"left\":20})[\"result\"] == 20 + 3"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 24,
    "group": "Operators",
    "title": "Subtract",
    "intro": "",
    "body": "<p><code>-</code> subtracts the right number from the left. Store a calculation using <code>=</code>, just as you stored a single value.</p>",
    "example": "answer = 9 - 4\nprint(answer)",
    "walkthrough": "Python calculates 9 - 4 first. It stores 5 in answer, then displays it.",
    "task": "Set result to left - right.",
    "starter": "left = 10\nright = 4\n",
    "answer": "left = 10\nright = 4\nresult = left - right",
    "hint": "Python calculates 9 - 4 first. It stores 5 in answer, then displays it.",
    "tests": [
      {
        "label": "Calculate using both variables",
        "expr": "result == left - right"
      },
      {
        "label": "Works when left changes",
        "expr": "rerun({\"left\":20})[\"result\"] == 20 - 4"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 25,
    "group": "Operators",
    "title": "Multiply",
    "intro": "",
    "body": "<p><code>*</code> multiplies two numbers. Store a calculation using <code>=</code>, just as you stored a single value.</p>",
    "example": "answer = 6 * 3\nprint(answer)",
    "walkthrough": "Python calculates 6 * 3 first. It stores 18 in answer, then displays it.",
    "task": "Set result to left * right.",
    "starter": "left = 7\nright = 3\n",
    "answer": "left = 7\nright = 3\nresult = left * right",
    "hint": "Python calculates 6 * 3 first. It stores 18 in answer, then displays it.",
    "tests": [
      {
        "label": "Calculate using both variables",
        "expr": "result == left * right"
      },
      {
        "label": "Works when left changes",
        "expr": "rerun({\"left\":20})[\"result\"] == 20 * 3"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 26,
    "group": "Operators",
    "title": "Divide",
    "intro": "",
    "body": "<p><code>/</code> divides the left number by the right and produces a float. Store a calculation using <code>=</code>, just as you stored a single value.</p>",
    "example": "answer = 9 / 2\nprint(answer)",
    "walkthrough": "Python calculates 9 / 2 first. It stores 4.5 in answer, then displays it.",
    "task": "Set result to left / right.",
    "starter": "left = 10\nright = 2\n",
    "answer": "left = 10\nright = 2\nresult = left / right",
    "hint": "Python calculates 9 / 2 first. It stores 4.5 in answer, then displays it.",
    "tests": [
      {
        "label": "Calculate using both variables",
        "expr": "result == left / right"
      },
      {
        "label": "Works when left changes",
        "expr": "rerun({\"left\":20})[\"result\"] == 20 / 2"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 27,
    "group": "Operators",
    "title": "Full groups with //",
    "intro": "",
    "body": "<p><code>//</code> is floor division: divide, then round the result down. With positive numbers it counts how many complete groups fit.</p>",
    "example": "bags = 17 // 5\nprint(bags)",
    "walkthrough": "Three full groups of 5 fit in 17, so bags is 3. With negative results, down means toward negative infinity: -7 // 2 is -4.",
    "task": "Use sweets and per_bag to calculate full bags in bags.",
    "starter": "sweets = 23\nper_bag = 5\n",
    "answer": "sweets = 23\nper_bag = 5\nbags = sweets // per_bag",
    "hint": "Three full groups of 5 fit in 17, so bags is 3. With negative results, down means toward negative infinity: -7 // 2 is -4.",
    "tests": [
      {
        "label": "Four full bags",
        "expr": "bags == 4"
      },
      {
        "label": "Uses the amounts",
        "expr": "rerun({\"sweets\":31})[\"bags\"] == 6"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 28,
    "group": "Operators",
    "title": "Leftovers with %",
    "intro": "",
    "body": "<p><code>%</code> gives the remainder after division. For positive quantities, it is what remains after making full groups.</p>",
    "example": "leftover = 17 % 5\nprint(leftover)",
    "walkthrough": "Three groups use 15 sweets. Two remain, so the output is 2.",
    "task": "Calculate leftover after grouping sweets into bags of per_bag.",
    "starter": "sweets = 23\nper_bag = 5\n",
    "answer": "sweets = 23\nper_bag = 5\nleftover = sweets % per_bag",
    "hint": "Three groups use 15 sweets. Two remain, so the output is 2.",
    "tests": [
      {
        "label": "Three remain",
        "expr": "leftover == 3"
      },
      {
        "label": "Handles an exact fit",
        "expr": "rerun({\"sweets\":20})[\"leftover\"] == 0"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 29,
    "group": "Operators",
    "title": "Powers with **",
    "intro": "",
    "body": "<p><code>**</code> raises a number to a power. Squaring a number means multiplying it by itself, which uses a power of 2.</p>",
    "example": "squared = 4 ** 2\nprint(squared)",
    "walkthrough": "4 ** 2 means 4 × 4, giving 16. It does not mean 4 × 2.",
    "task": "Set squared to the square of side.",
    "starter": "side = 5\n",
    "answer": "side = 5\nsquared = side ** 2",
    "hint": "4 ** 2 means 4 × 4, giving 16. It does not mean 4 × 2.",
    "tests": [
      {
        "label": "Square is 25",
        "expr": "squared == 25"
      },
      {
        "label": "Uses side",
        "expr": "rerun({\"side\":6})[\"squared\"] == 36"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 30,
    "group": "Operators",
    "title": "Calculation order",
    "intro": "",
    "body": "<p>Multiplication and division happen before addition and subtraction. Parentheses make a calculation happen first. Powers happen before multiplication.</p>",
    "example": "print(2 + 3 * 4)\nprint((2 + 3) * 4)",
    "walkthrough": "The first line is 2 + 12, giving 14. The second adds 2 + 3 first, then multiplies 5 by 4, giving 20.",
    "task": "Add parentheses so result adds a and b before multiplying by c.",
    "starter": "a = 2\nb = 3\nc = 4\nresult = a + b * c",
    "answer": "a = 2\nb = 3\nc = 4\nresult = (a + b) * c",
    "hint": "The first line is 2 + 12, giving 14. The second adds 2 + 3 first, then multiplies 5 by 4, giving 20.",
    "tests": [
      {
        "label": "Addition happens first",
        "expr": "result == 20"
      },
      {
        "label": "Uses the inputs",
        "expr": "rerun({\"a\":3,\"b\":4,\"c\":2})[\"result\"] == 14"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 31,
    "group": "Operators",
    "title": "Update a number",
    "intro": "",
    "body": "<p>You can use a variable’s current value to calculate its next value. Python evaluates the right side of <code>=</code> before storing the result.</p>",
    "example": "count = 3\ncount = count + 1",
    "walkthrough": "Python reads the old count, 3, and adds 1. It then stores 4 back in count.",
    "task": "Increase count by 2 using count = count + 2.",
    "starter": "count = 5\n",
    "answer": "count = 5\ncount = count + 2",
    "hint": "Python reads the old count, 3, and adds 1. It then stores 4 back in count.",
    "tests": [
      {
        "label": "count is now 7",
        "expr": "count == 7"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 32,
    "group": "Operators",
    "title": "Shorter updates with +=",
    "intro": "",
    "body": "<p><code>count += 1</code> is a short way to write <code>count = count + 1</code> for a number. It updates an existing variable.</p>",
    "example": "count = 3\ncount += 1",
    "walkthrough": "count starts at 3 and becomes 4. It must already have a value before this update.",
    "task": "Use += to add 2 to count.",
    "starter": "count = 5\n",
    "answer": "count = 5\ncount += 2",
    "hint": "count starts at 3 and becomes 4. It must already have a value before this update.",
    "tests": [
      {
        "label": "count becomes 7",
        "expr": "count == 7"
      },
      {
        "label": "Use an augmented assignment",
        "expr": "has_node(\"AugAssign\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 33,
    "group": "Operators",
    "title": "Update with -=",
    "intro": "",
    "body": "<p><code>-=</code> updates a number by applying the operation and storing the result in the same variable.</p>",
    "example": "value = 10\nvalue -= 3",
    "walkthrough": "value starts at 10. The next line changes it to 7.",
    "task": "Use -= to subtract 3 from value.",
    "starter": "value = 10\n",
    "answer": "value = 10\nvalue -= 3",
    "hint": "value starts at 10. The next line changes it to 7.",
    "tests": [
      {
        "label": "The value is updated",
        "expr": "value == 7"
      },
      {
        "label": "Use an augmented assignment",
        "expr": "has_node(\"AugAssign\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 34,
    "group": "Operators",
    "title": "Update with *=",
    "intro": "",
    "body": "<p><code>*=</code> updates a number by applying the operation and storing the result in the same variable.</p>",
    "example": "value = 4\nvalue *= 3",
    "walkthrough": "value starts at 4. The next line changes it to 12.",
    "task": "Use *= to multiply value by 3.",
    "starter": "value = 4\n",
    "answer": "value = 4\nvalue *= 3",
    "hint": "value starts at 4. The next line changes it to 12.",
    "tests": [
      {
        "label": "The value is updated",
        "expr": "value == 12"
      },
      {
        "label": "Use an augmented assignment",
        "expr": "has_node(\"AugAssign\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 35,
    "group": "Operators",
    "title": "Update with /=",
    "intro": "",
    "body": "<p><code>/=</code> updates a number by applying the operation and storing the result in the same variable.</p>",
    "example": "value = 9\nvalue /= 2",
    "walkthrough": "value starts at 9. The next line changes it to 4.5.",
    "task": "Use /= to divide value by 2.",
    "starter": "value = 9\n",
    "answer": "value = 9\nvalue /= 2",
    "hint": "value starts at 9. The next line changes it to 4.5.",
    "tests": [
      {
        "label": "The value is updated",
        "expr": "value == 4.5"
      },
      {
        "label": "Use an augmented assignment",
        "expr": "has_node(\"AugAssign\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 36,
    "group": "Operators",
    "title": "Compare equality",
    "intro": "",
    "body": "<p><code>==</code> asks whether two values are equal. A comparison produces a boolean: True or False. Remember that <code>=</code> assigns a value; it does not compare.</p>",
    "example": "matches = 5 == 5\nprint(matches)",
    "walkthrough": "This comparison produces True. Store its result just as you store any other value.",
    "task": "Set matches to the result of left == right.",
    "starter": "left = 5\nright = 5\n",
    "answer": "left = 5\nright = 5\nmatches = left == right",
    "hint": "This comparison produces True. Store its result just as you store any other value.",
    "tests": [
      {
        "label": "Compare the given values",
        "expr": "matches is True"
      },
      {
        "label": "Compare changed values",
        "expr": "rerun({\"left\":2,\"right\":9})[\"matches\"] is (2 == 9)"
      },
      {
        "label": "Check equality boundary",
        "expr": "rerun({\"left\":4,\"right\":4})[\"matches\"] is (4 == 4)"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 37,
    "group": "Operators",
    "title": "Compare inequality",
    "intro": "",
    "body": "<p><code>!=</code> asks whether two values differ. A comparison produces a boolean: True or False. Remember that <code>=</code> assigns a value; it does not compare.</p>",
    "example": "matches = 5 != 3\nprint(matches)",
    "walkthrough": "This comparison produces True. Store its result just as you store any other value.",
    "task": "Set matches to the result of left != right.",
    "starter": "left = 5\nright = 3\n",
    "answer": "left = 5\nright = 3\nmatches = left != right",
    "hint": "This comparison produces True. Store its result just as you store any other value.",
    "tests": [
      {
        "label": "Compare the given values",
        "expr": "matches is True"
      },
      {
        "label": "Compare changed values",
        "expr": "rerun({\"left\":2,\"right\":9})[\"matches\"] is (2 != 9)"
      },
      {
        "label": "Check equality boundary",
        "expr": "rerun({\"left\":4,\"right\":4})[\"matches\"] is (4 != 4)"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 38,
    "group": "Operators",
    "title": "Greater than",
    "intro": "",
    "body": "<p><code>&gt;</code> asks whether the left value is greater. A comparison produces a boolean: True or False. Remember that <code>=</code> assigns a value; it does not compare.</p>",
    "example": "matches = 5 > 3\nprint(matches)",
    "walkthrough": "This comparison produces True. Store its result just as you store any other value.",
    "task": "Set matches to the result of left > right.",
    "starter": "left = 5\nright = 3\n",
    "answer": "left = 5\nright = 3\nmatches = left > right",
    "hint": "This comparison produces True. Store its result just as you store any other value.",
    "tests": [
      {
        "label": "Compare the given values",
        "expr": "matches is True"
      },
      {
        "label": "Compare changed values",
        "expr": "rerun({\"left\":2,\"right\":9})[\"matches\"] is (2 > 9)"
      },
      {
        "label": "Check equality boundary",
        "expr": "rerun({\"left\":4,\"right\":4})[\"matches\"] is (4 > 4)"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 39,
    "group": "Operators",
    "title": "Less than",
    "intro": "",
    "body": "<p><code>&lt;</code> asks whether the left value is smaller. A comparison produces a boolean: True or False. Remember that <code>=</code> assigns a value; it does not compare.</p>",
    "example": "matches = 5 < 3\nprint(matches)",
    "walkthrough": "This comparison produces False. Store its result just as you store any other value.",
    "task": "Set matches to the result of left < right.",
    "starter": "left = 5\nright = 3\n",
    "answer": "left = 5\nright = 3\nmatches = left < right",
    "hint": "This comparison produces False. Store its result just as you store any other value.",
    "tests": [
      {
        "label": "Compare the given values",
        "expr": "matches is False"
      },
      {
        "label": "Compare changed values",
        "expr": "rerun({\"left\":2,\"right\":9})[\"matches\"] is (2 < 9)"
      },
      {
        "label": "Check equality boundary",
        "expr": "rerun({\"left\":4,\"right\":4})[\"matches\"] is (4 < 4)"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 40,
    "group": "Operators",
    "title": "At least",
    "intro": "",
    "body": "<p><code>&gt;=</code> includes equality when asking whether the left value is greater. A comparison produces a boolean: True or False. Remember that <code>=</code> assigns a value; it does not compare.</p>",
    "example": "matches = 5 >= 5\nprint(matches)",
    "walkthrough": "This comparison produces True. Store its result just as you store any other value.",
    "task": "Set matches to the result of left >= right.",
    "starter": "left = 5\nright = 5\n",
    "answer": "left = 5\nright = 5\nmatches = left >= right",
    "hint": "This comparison produces True. Store its result just as you store any other value.",
    "tests": [
      {
        "label": "Compare the given values",
        "expr": "matches is True"
      },
      {
        "label": "Compare changed values",
        "expr": "rerun({\"left\":2,\"right\":9})[\"matches\"] is (2 >= 9)"
      },
      {
        "label": "Check equality boundary",
        "expr": "rerun({\"left\":4,\"right\":4})[\"matches\"] is (4 >= 4)"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 41,
    "group": "Operators",
    "title": "At most",
    "intro": "",
    "body": "<p><code>&lt;=</code> includes equality when asking whether the left value is smaller. A comparison produces a boolean: True or False. Remember that <code>=</code> assigns a value; it does not compare.</p>",
    "example": "matches = 5 <= 5\nprint(matches)",
    "walkthrough": "This comparison produces True. Store its result just as you store any other value.",
    "task": "Set matches to the result of left <= right.",
    "starter": "left = 5\nright = 5\n",
    "answer": "left = 5\nright = 5\nmatches = left <= right",
    "hint": "This comparison produces True. Store its result just as you store any other value.",
    "tests": [
      {
        "label": "Compare the given values",
        "expr": "matches is True"
      },
      {
        "label": "Compare changed values",
        "expr": "rerun({\"left\":2,\"right\":9})[\"matches\"] is (2 <= 9)"
      },
      {
        "label": "Check equality boundary",
        "expr": "rerun({\"left\":4,\"right\":4})[\"matches\"] is (4 <= 4)"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 42,
    "group": "Operators",
    "title": "Both must be true",
    "intro": "",
    "body": "<p>For boolean conditions, <code>and</code> is True only when both conditions are True.</p>",
    "example": "has_ticket = True\nis_open = False\nallowed = has_ticket and is_open",
    "walkthrough": "Here one condition is True and one is False. Using and makes allowed False.",
    "task": "Use and to combine has_ticket and is_open into allowed.",
    "starter": "has_ticket = True\nis_open = False\n",
    "answer": "has_ticket = True\nis_open = False\nallowed = has_ticket and is_open",
    "hint": "Here one condition is True and one is False. Using and makes allowed False.",
    "tests": [
      {
        "label": "Given conditions",
        "expr": "allowed is False"
      },
      {
        "label": "Both false",
        "expr": "rerun({\"has_ticket\":False,\"is_open\":False})[\"allowed\"] is False"
      },
      {
        "label": "Both true",
        "expr": "rerun({\"has_ticket\":True,\"is_open\":True})[\"allowed\"] is True"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 43,
    "group": "Operators",
    "title": "Either can be true",
    "intro": "",
    "body": "<p>For boolean conditions, <code>or</code> is True when at least one condition is True.</p>",
    "example": "has_ticket = True\nis_open = False\nallowed = has_ticket or is_open",
    "walkthrough": "Here one condition is True and one is False. Using or makes allowed True.",
    "task": "Use or to combine has_ticket and is_open into allowed.",
    "starter": "has_ticket = True\nis_open = False\n",
    "answer": "has_ticket = True\nis_open = False\nallowed = has_ticket or is_open",
    "hint": "Here one condition is True and one is False. Using or makes allowed True.",
    "tests": [
      {
        "label": "Given conditions",
        "expr": "allowed is True"
      },
      {
        "label": "Both false",
        "expr": "rerun({\"has_ticket\":False,\"is_open\":False})[\"allowed\"] is False"
      },
      {
        "label": "Both true",
        "expr": "rerun({\"has_ticket\":True,\"is_open\":True})[\"allowed\"] is True"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 44,
    "group": "Operators",
    "title": "Reverse a condition",
    "intro": "",
    "body": "<p><code>not</code> reverses a boolean: True becomes False, and False becomes True.</p>",
    "example": "is_closed = False\nis_open = not is_closed",
    "walkthrough": "is_closed is False. not reverses it, so is_open becomes True.",
    "task": "Set is_open to the opposite of is_closed.",
    "starter": "is_closed = True\n",
    "answer": "is_closed = True\nis_open = not is_closed",
    "hint": "is_closed is False. not reverses it, so is_open becomes True.",
    "tests": [
      {
        "label": "Closed means not open",
        "expr": "is_open is False"
      },
      {
        "label": "Open when not closed",
        "expr": "rerun({\"is_closed\":False})[\"is_open\"] is True"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 45,
    "group": "Projects · First calculation",
    "title": "Temperature · calculate",
    "intro": "",
    "body": "<p>This first project combines number variables and arithmetic you have already practised. To convert Celsius to Fahrenheit, multiply by 9, divide by 5, then add 32.</p>",
    "example": "celsius = 10\nfahrenheit = celsius * 9 / 5 + 32",
    "walkthrough": "10 × 9 is 90. Dividing by 5 gives 18. Adding 32 gives 50. The formula is provided; you do not need to memorise it.",
    "task": "Calculate fahrenheit from celsius using the formula.",
    "starter": "celsius = 20\n",
    "answer": "celsius = 20\nfahrenheit = celsius * 9 / 5 + 32",
    "hint": "10 × 9 is 90. Dividing by 5 gives 18. Adding 32 gives 50. The formula is provided; you do not need to memorise it.",
    "tests": [
      {
        "label": "20°C is 68°F",
        "expr": "fahrenheit == 68"
      },
      {
        "label": "Freezing point",
        "expr": "rerun({\"celsius\":0})[\"fahrenheit\"] == 32"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 46,
    "group": "Projects · First calculation",
    "title": "Temperature · show the result",
    "intro": "",
    "body": "<p>Now make the calculated value visible. This step only adds an output instruction to the working calculation.</p>",
    "example": "result = 50.0\nprint(result)",
    "walkthrough": "print(result) displays the number already stored in result. You do not need to repeat the calculation inside print().",
    "task": "Print fahrenheit after the supplied calculation.",
    "starter": "celsius = 20\nfahrenheit = celsius * 9 / 5 + 32\n",
    "answer": "celsius = 20\nfahrenheit = celsius * 9 / 5 + 32\nprint(fahrenheit)",
    "hint": "print(result) displays the number already stored in result. You do not need to repeat the calculation inside print().",
    "tests": [
      {
        "label": "Output is 68.0",
        "expr": "output == '68.0\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 47,
    "group": "Strings",
    "title": "Choose matching quotes",
    "intro": "",
    "body": "<p>Single quotes and double quotes both create strings. The opening and closing quote must match. Double quotes are convenient when the text contains an apostrophe.</p>",
    "example": "message = \"I'm learning\"\nprint(message)",
    "walkthrough": "The apostrophe is part of the text. The surrounding double quotes mark where that text starts and ends.",
    "task": "Store the text I'm ready in message and print it.",
    "starter": "message = \"\"\nprint(message)",
    "answer": "message = \"I'm ready\"\nprint(message)",
    "hint": "The apostrophe is part of the text. The surrounding double quotes mark where that text starts and ends.",
    "tests": [
      {
        "label": "Keep the apostrophe",
        "expr": "output == \"I'm ready\\n\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 48,
    "group": "Strings",
    "title": "Join two strings",
    "intro": "",
    "body": "<p><code>+</code> joins strings into a new string. It does not insert spaces automatically.</p>",
    "example": "greeting = \"Hello, \" + \"Ada\"\nprint(greeting)",
    "walkthrough": "The space after the comma is inside the first string. The result is Hello, Ada.",
    "task": "Join prefix and name into greeting.",
    "starter": "prefix = \"Hello, \"\nname = \"Lin\"\n",
    "answer": "prefix = \"Hello, \"\nname = \"Lin\"\ngreeting = prefix + name",
    "hint": "The space after the comma is inside the first string. The result is Hello, Ada.",
    "tests": [
      {
        "label": "Greeting includes the space",
        "expr": "greeting == \"Hello, Lin\""
      },
      {
        "label": "Uses name",
        "expr": "rerun({\"name\":\"Sam\"})[\"greeting\"] == \"Hello, Sam\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 49,
    "group": "Strings",
    "title": "Count characters",
    "intro": "",
    "body": "<p><code>len()</code> gives the number of characters in a string. Spaces count as characters too.</p>",
    "example": "word = \"Python\"\nlength = len(word)",
    "walkthrough": "Python contains six characters, so length is 6. len() gives a number; it does not change word.",
    "task": "Store the length of word in length.",
    "starter": "word = \"Hello Ada\"\n",
    "answer": "word = \"Hello Ada\"\nlength = len(word)",
    "hint": "Python contains six characters, so length is 6. len() gives a number; it does not change word.",
    "tests": [
      {
        "label": "Include the space",
        "expr": "length == 9"
      },
      {
        "label": "Count an empty string",
        "expr": "rerun({\"word\":\"\"})[\"length\"] == 0"
      },
      {
        "label": "Practise len()",
        "expr": "calls('len')"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 50,
    "group": "Strings",
    "title": "Read the first character",
    "intro": "",
    "body": "<p>Each character has a position called an index. Python starts counting positions at <code>0</code>. Square brackets select the character at an index.</p>",
    "example": "word = \"cat\"\nfirst = word[0]",
    "walkthrough": "In cat, c is at index 0, a at index 1, and t at index 2. first is therefore \"c\".",
    "task": "Read the first character of word into first.",
    "starter": "word = \"Python\"\n",
    "answer": "word = \"Python\"\nfirst = word[0]",
    "hint": "In cat, c is at index 0, a at index 1, and t at index 2. first is therefore \"c\".",
    "tests": [
      {
        "label": "First character is P",
        "expr": "first == \"P\""
      },
      {
        "label": "Use the string",
        "expr": "rerun({\"word\":\"Ada\"})[\"first\"] == \"A\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 51,
    "group": "Strings",
    "title": "Read another position",
    "intro": "",
    "body": "<p>Index 1 selects the second character, because the first is at index 0. An index must refer to an existing character.</p>",
    "example": "word = \"cat\"\nsecond = word[1]",
    "walkthrough": "second is \"a\". word[3] would fail: a three-character word only has indexes 0, 1, and 2.",
    "task": "Read the third character of word into third.",
    "starter": "word = \"Python\"\n",
    "answer": "word = \"Python\"\nthird = word[2]",
    "hint": "second is \"a\". word[3] would fail: a three-character word only has indexes 0, 1, and 2.",
    "tests": [
      {
        "label": "Third character is t",
        "expr": "third == \"t\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 52,
    "group": "Strings",
    "title": "Count from the end",
    "intro": "",
    "body": "<p>A negative index counts backward. <code>-1</code> is the last character, <code>-2</code> the second-to-last.</p>",
    "example": "word = \"cat\"\nlast = word[-1]",
    "walkthrough": "last is \"t\". You do not need to know the length to read the last character.",
    "task": "Store the last character of word in last.",
    "starter": "word = \"Python\"\n",
    "answer": "word = \"Python\"\nlast = word[-1]",
    "hint": "last is \"t\". You do not need to know the length to read the last character.",
    "tests": [
      {
        "label": "Last character is n",
        "expr": "last == \"n\""
      },
      {
        "label": "Works for shorter text",
        "expr": "rerun({\"word\":\"Ada\"})[\"last\"] == \"a\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 53,
    "group": "Strings",
    "title": "Take part of a string",
    "intro": "",
    "body": "<p>A slice selects several characters: <code>[start:stop]</code>. It includes start and stops before stop.</p>",
    "example": "word = \"Python\"\npart = word[0:3]",
    "walkthrough": "Indexes 0, 1, and 2 contain P, y, and t. part is \"Pyt\"; index 3 is excluded.",
    "task": "Store the first four characters of word in part.",
    "starter": "word = \"notebook\"\n",
    "answer": "word = \"notebook\"\npart = word[0:4]",
    "hint": "Indexes 0, 1, and 2 contain P, y, and t. part is \"Pyt\"; index 3 is excluded.",
    "tests": [
      {
        "label": "First four characters",
        "expr": "part == \"note\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 54,
    "group": "Strings",
    "title": "Leave a slice boundary out",
    "intro": "",
    "body": "<p>Leaving out the start means start at the beginning. Leaving out the stop means continue to the end.</p>",
    "example": "word = \"notebook\"\nending = word[4:]",
    "walkthrough": "The slice starts at index 4, the letter b, and continues to the end. ending is \"book\".",
    "task": "Store all characters from index 2 onward in ending.",
    "starter": "word = \"Python\"\n",
    "answer": "word = \"Python\"\nending = word[2:]",
    "hint": "The slice starts at index 4, the letter b, and continues to the end. ending is \"book\".",
    "tests": [
      {
        "label": "Slice continues to the end",
        "expr": "ending == \"thon\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 55,
    "group": "Strings",
    "title": "Uppercase text",
    "intro": "",
    "body": "<p>A method is an operation attached to a value. Write a dot after the string, then the method name and parentheses. <code>.upper()</code> returns an uppercase version.</p>",
    "example": "raw = 'ada'\nclean = raw.upper()",
    "walkthrough": "clean holds 'ADA'. raw still holds the original text.",
    "task": "Use .upper() on raw and save the returned string in clean.",
    "starter": "raw = 'hello'\n",
    "answer": "raw = 'hello'\nclean = raw.upper()",
    "hint": "clean holds 'ADA'. raw still holds the original text.",
    "tests": [
      {
        "label": "Returned text is correct",
        "expr": "clean == 'HELLO'"
      },
      {
        "label": "Original text stays unchanged",
        "expr": "raw == 'hello'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 56,
    "group": "Strings",
    "title": "Lowercase text",
    "intro": "",
    "body": "<p><code>.lower()</code> returns a lowercase version of a string. String methods return new text; they do not change the original string.</p>",
    "example": "raw = 'ADA'\nclean = raw.lower()",
    "walkthrough": "clean holds 'ada'. raw still holds the original text.",
    "task": "Use .lower() on raw and save the returned string in clean.",
    "starter": "raw = 'HELLO'\n",
    "answer": "raw = 'HELLO'\nclean = raw.lower()",
    "hint": "clean holds 'ada'. raw still holds the original text.",
    "tests": [
      {
        "label": "Returned text is correct",
        "expr": "clean == 'hello'"
      },
      {
        "label": "Original text stays unchanged",
        "expr": "raw == 'HELLO'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 57,
    "group": "Strings",
    "title": "Remove outer spaces",
    "intro": "",
    "body": "<p><code>.strip()</code> removes whitespace from the beginning and end. It keeps spaces inside the text.</p>",
    "example": "raw = '  hello  '\nclean = raw.strip()",
    "walkthrough": "clean holds 'hello'. raw still holds the original text.",
    "task": "Use .strip() on raw and save the returned string in clean.",
    "starter": "raw = '  Ada Lin  '\n",
    "answer": "raw = '  Ada Lin  '\nclean = raw.strip()",
    "hint": "clean holds 'hello'. raw still holds the original text.",
    "tests": [
      {
        "label": "Returned text is correct",
        "expr": "clean == 'Ada Lin'"
      },
      {
        "label": "Original text stays unchanged",
        "expr": "raw == '  Ada Lin  '"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 58,
    "group": "Strings",
    "title": "Replace part of the text",
    "intro": "",
    "body": "<p><code>.replace(old, new)</code> returns text with each occurrence of old replaced by new. The comma separates the two inputs to the method.</p>",
    "example": "text = \"red bag\"\nchanged = text.replace(\"red\", \"blue\")",
    "walkthrough": "Python looks for \"red\" and replaces it with \"blue\". changed is \"blue bag\".",
    "task": "Replace cat with dog in text, storing the result in changed.",
    "starter": "text = \"cat on a mat\"\n",
    "answer": "text = \"cat on a mat\"\nchanged = text.replace(\"cat\", \"dog\")",
    "hint": "Python looks for \"red\" and replaces it with \"blue\". changed is \"blue bag\".",
    "tests": [
      {
        "label": "Only the requested text changes",
        "expr": "changed == \"dog on a mat\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 59,
    "group": "Strings",
    "title": "Find text",
    "intro": "",
    "body": "<p><code>.find()</code> returns the index where text first appears. It returns <code>-1</code> when there is no match.</p>",
    "example": "word = \"banana\"\nposition = word.find(\"na\")",
    "walkthrough": "The first \"na\" begins at index 2. position is 2, even though another \"na\" appears later.",
    "task": "Find the first p in word and store its index in position.",
    "starter": "word = \"apple\"\n",
    "answer": "word = \"apple\"\nposition = word.find(\"p\")",
    "hint": "The first \"na\" begins at index 2. position is 2, even though another \"na\" appears later.",
    "tests": [
      {
        "label": "First p is at index 1",
        "expr": "position == 1"
      },
      {
        "label": "Missing text gives -1",
        "expr": "rerun({\"word\":\"cat\"})[\"position\"] == -1"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 60,
    "group": "Strings",
    "title": "Insert a value into text",
    "intro": "",
    "body": "<p>An f-string starts with <code>f</code> before its quote. Put a variable inside braces <code>{}</code> to insert its value into the text.</p>",
    "example": "name = \"Ada\"\ngreeting = f\"Hello, {name}!\"",
    "walkthrough": "Python replaces {name} with Ada. The resulting string is \"Hello, Ada!\"; the braces are not displayed.",
    "task": "Create greeting with the exact format Hello, Lin! using name.",
    "starter": "name = \"Lin\"\n",
    "answer": "name = \"Lin\"\ngreeting = f\"Hello, {name}!\"",
    "hint": "Python replaces {name} with Ada. The resulting string is \"Hello, Ada!\"; the braces are not displayed.",
    "tests": [
      {
        "label": "Greet Lin",
        "expr": "greeting == \"Hello, Lin!\""
      },
      {
        "label": "Greet another name",
        "expr": "rerun({\"name\":\"Sam\"})[\"greeting\"] == \"Hello, Sam!\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 61,
    "group": "Strings",
    "title": "Insert a number into text",
    "intro": "",
    "body": "<p>An f-string can insert numbers as well as text. Python produces the text representation for you.</p>",
    "example": "age = 25\nmessage = f\"Age: {age}\"",
    "walkthrough": "message is the string \"Age: 25\". You do not need a separate str() conversion inside an f-string.",
    "task": "Create message in the format Score: 80 using score.",
    "starter": "score = 80\n",
    "answer": "score = 80\nmessage = f\"Score: {score}\"",
    "hint": "message is the string \"Age: 25\". You do not need a separate str() conversion inside an f-string.",
    "tests": [
      {
        "label": "Show the score",
        "expr": "message == \"Score: 80\""
      },
      {
        "label": "Use the variable",
        "expr": "rerun({\"score\":95})[\"message\"] == \"Score: 95\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 62,
    "group": "Strings",
    "title": "Put a newline inside text",
    "intro": "",
    "body": "<p>An escape sequence begins with a backslash. <code>\\n</code> represents a newline inside a string.</p>",
    "example": "print(\"Hello\\nAda\")",
    "walkthrough": "One print instruction displays Hello and Ada on separate lines. The backslash and n are not printed as letters.",
    "task": "Use one string containing \\n to print Ready and Go on separate lines.",
    "starter": "print(\"\")",
    "answer": "print(\"Ready\\nGo\")",
    "hint": "One print instruction displays Hello and Ada on separate lines. The backslash and n are not printed as letters.",
    "tests": [
      {
        "label": "Two output lines",
        "expr": "output == 'Ready\\nGo\\n'"
      },
      {
        "label": "A newline is inside a string",
        "expr": "any(isinstance(n, __import__(\"ast\").Constant) and isinstance(n.value,str) and chr(10) in n.value for n in __import__(\"ast\").walk(__import__(\"ast\").parse(source)))"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 63,
    "group": "Strings",
    "title": "Put a backslash inside text",
    "intro": "",
    "body": "<p>A literal backslash is written as <code>\\\\</code> inside an ordinary string. This stops Python interpreting it as the start of another escape sequence. <code>\\t</code>, for example, means a tab.</p>",
    "example": "print(\"one\\\\two\")",
    "walkthrough": "Two backslashes in the code produce one backslash in the output: one\\two.",
    "task": "Print folder\\notes, including one literal backslash.",
    "starter": "print(\"\")",
    "answer": "print(\"folder\\\\notes\")",
    "hint": "Two backslashes in the code produce one backslash in the output: one\\two.",
    "tests": [
      {
        "label": "A literal backslash appears",
        "expr": "output == 'folder\\\\notes\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 64,
    "group": "Input",
    "title": "Read one reply",
    "intro": "",
    "body": "<p><code>input()</code> reads a reply and returns it as text. On this site, replies come from the Program input box. The first reply is already filled in for you.</p>",
    "example": "name = input(\"Name: \")\nprint(name)",
    "walkthrough": "The words \"Name: \" are the prompt for a normal terminal. Here the site supplies the next line from Program input. That reply is stored in name.",
    "task": "Read one reply into name, then print it. The check supplies Ada.",
    "starter": "name = input(\"Name: \")\n",
    "answer": "name = input(\"Name: \")\nprint(name)",
    "hint": "The words \"Name: \" are the prompt for a normal terminal. Here the site supplies the next line from Program input. That reply is stored in name.",
    "tests": [
      {
        "label": "Read the supplied reply",
        "expr": "name == \"Ada\""
      },
      {
        "label": "Print Ada",
        "expr": "output == 'Ada\\n'"
      }
    ],
    "inputs": "Ada",
    "exampleRunnable": true
  },
  {
    "id": 65,
    "group": "Input",
    "title": "Read a number as text first",
    "intro": "",
    "body": "<p>Even when someone types digits, <code>input()</code> returns a string. Convert the saved reply on a separate line before using it as a number.</p>",
    "example": "raw = input(\"Age: \")\nage = int(raw)",
    "walkthrough": "The first line reads text such as \"25\". The second turns that text into the integer 25. Keeping the lines separate makes each step visible.",
    "task": "The reply is already read into raw. Convert it to an integer named age.",
    "starter": "raw = input(\"Age: \")\n",
    "answer": "raw = input(\"Age: \")\nage = int(raw)",
    "hint": "The first line reads text such as \"25\". The second turns that text into the integer 25. Keeping the lines separate makes each step visible.",
    "tests": [
      {
        "label": "age is the integer 25",
        "expr": "type(age) is int and age == 25"
      }
    ],
    "inputs": "25",
    "exampleRunnable": true
  },
  {
    "id": 66,
    "group": "Input",
    "title": "Read two replies in order",
    "intro": "",
    "body": "<p>Each call to <code>input()</code> reads the next reply. In Program input, put each reply on a separate line, in the same order as the calls.</p>",
    "example": "first = input(\"First: \")\nsecond = input(\"Second: \")",
    "walkthrough": "With Ada on the first input line and Lin on the second, first holds \"Ada\" and second holds \"Lin\".",
    "task": "Read a name into name, then a city into city. Keep both as text.",
    "starter": "name = input(\"Name: \")\n",
    "answer": "name = input(\"Name: \")\ncity = input(\"City: \")",
    "hint": "With Ada on the first input line and Lin on the second, first holds \"Ada\" and second holds \"Lin\".",
    "tests": [
      {
        "label": "First reply is the name",
        "expr": "name == \"Ada\""
      },
      {
        "label": "Second reply is the city",
        "expr": "city == \"London\""
      }
    ],
    "inputs": "Ada\nLondon",
    "exampleRunnable": true
  },
  {
    "id": 67,
    "group": "Input",
    "title": "Use a numeric reply",
    "intro": "",
    "body": "<p>Combine the steps you know: read text, convert it, calculate, then print. Each line has one job.</p>",
    "example": "raw = input(\"Age: \")\nage = int(raw)\nnext_age = age + 1\nprint(next_age)",
    "walkthrough": "For the reply 25, raw is \"25\", age is 25, next_age is 26, and the output is 26.",
    "task": "Finish the supplied program by storing age + 1 in next_age, then printing next_age.",
    "starter": "raw = input(\"Age: \")\nage = int(raw)\n",
    "answer": "raw = input(\"Age: \")\nage = int(raw)\nnext_age = age + 1\nprint(next_age)",
    "hint": "For the reply 25, raw is \"25\", age is 25, next_age is 26, and the output is 26.",
    "tests": [
      {
        "label": "Calculate next age",
        "expr": "next_age == 26"
      },
      {
        "label": "Print it",
        "expr": "output == '26\\n'"
      }
    ],
    "inputs": "25",
    "exampleRunnable": true
  },
  {
    "id": 68,
    "group": "Conditions",
    "title": "Run code only sometimes",
    "intro": "",
    "body": "<p><code>if</code> runs a block only when its condition is True. End the if line with a colon. Indent the line inside it by four spaces.</p>",
    "example": "score = 70\nif score >= 50:\n    print(\"Pass\")",
    "walkthrough": "70 >= 50 is True, so the indented print runs. With score 40, this program would print nothing.",
    "task": "Inside the supplied if block, print Open. Keep the condition.",
    "starter": "is_open = True\nif is_open:\n",
    "answer": "is_open = True\nif is_open:\n    print(\"Open\")",
    "hint": "70 >= 50 is True, so the indented print runs. With score 40, this program would print nothing.",
    "tests": [
      {
        "label": "Print when open",
        "expr": "output == 'Open\\n'"
      },
      {
        "label": "Keep an if statement",
        "expr": "has_node(\"If\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 69,
    "group": "Conditions",
    "title": "Inside or after the block?",
    "intro": "",
    "body": "<p>Indentation shows which instructions belong to an if block. A line that returns to the left edge runs after the block, regardless of whether the condition was True.</p>",
    "example": "is_open = False\nif is_open:\n    print(\"Enter\")\nprint(\"Finished\")",
    "walkthrough": "Enter is skipped because is_open is False. Finished still prints because its line is outside the block.",
    "task": "Move print(\"Finished\") outside the if block. Do not change is_open.",
    "starter": "is_open = False\nif is_open:\n    print(\"Enter\")\n    print(\"Finished\")",
    "answer": "is_open = False\nif is_open:\n    print(\"Enter\")\nprint(\"Finished\")",
    "hint": "Enter is skipped because is_open is False. Finished still prints because its line is outside the block.",
    "tests": [
      {
        "label": "Only Finished prints",
        "expr": "output == 'Finished\\n'"
      },
      {
        "label": "Condition stays false",
        "expr": "is_open is False"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 70,
    "group": "Conditions",
    "title": "Choose the other path",
    "intro": "",
    "body": "<p><code>else:</code> provides the path to run when the if condition is False. else lines up with if and has no condition of its own.</p>",
    "example": "score = 40\nif score >= 50:\n    result = \"Pass\"\nelse:\n    result = \"Retry\"",
    "walkthrough": "40 >= 50 is False, so Python skips the first assignment and stores \"Retry\" from the else block.",
    "task": "Complete the else block by setting result to Retry.",
    "starter": "score = 40\nif score >= 50:\n    result = \"Pass\"\nelse:\n",
    "answer": "score = 40\nif score >= 50:\n    result = \"Pass\"\nelse:\n    result = \"Retry\"",
    "hint": "40 >= 50 is False, so Python skips the first assignment and stores \"Retry\" from the else block.",
    "tests": [
      {
        "label": "40 needs Retry",
        "expr": "result == \"Retry\""
      },
      {
        "label": "50 passes",
        "expr": "rerun({\"score\":50})[\"result\"] == \"Pass\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 71,
    "group": "Conditions",
    "title": "Add a third possibility",
    "intro": "",
    "body": "<p><code>elif</code> means “otherwise, if”. Python checks it only when the previous condition was False. In one if/elif/else chain, only the first matching branch runs.</p>",
    "example": "score = 85\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelse:\n    grade = \"C\"",
    "walkthrough": "85 is not at least 90, so Python tries the next condition. It is at least 80, so grade becomes B and the else branch is skipped.",
    "task": "Fill the missing elif condition so scores from 80 through 89 earn B.",
    "starter": "score = 85\nif score >= 90:\n    grade = \"A\"\nelif False:\n    grade = \"B\"\nelse:\n    grade = \"C\"",
    "answer": "score = 85\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelse:\n    grade = \"C\"",
    "hint": "85 is not at least 90, so Python tries the next condition. It is at least 80, so grade becomes B and the else branch is skipped.",
    "tests": [
      {
        "label": "85 earns B",
        "expr": "grade == \"B\""
      },
      {
        "label": "80 earns B",
        "expr": "rerun({\"score\":80})[\"grade\"] == \"B\""
      },
      {
        "label": "79 earns C",
        "expr": "rerun({\"score\":79})[\"grade\"] == \"C\""
      },
      {
        "label": "90 earns A",
        "expr": "rerun({\"score\":90})[\"grade\"] == \"A\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 72,
    "group": "Conditions",
    "title": "Combine conditions in if",
    "intro": "",
    "body": "<p>You can use <code>and</code> in an if condition when two requirements must both be met. Write one indented block for the combined condition.</p>",
    "example": "age = 20\nhas_ticket = True\nif age >= 18 and has_ticket:\n    allowed = True\nelse:\n    allowed = False",
    "walkthrough": "The age requirement and the ticket requirement are both True, so allowed becomes True.",
    "task": "Replace False in the if line with a condition requiring age >= 18 and has_ticket.",
    "starter": "age = 20\nhas_ticket = True\nif False:\n    allowed = True\nelse:\n    allowed = False",
    "answer": "age = 20\nhas_ticket = True\nif age >= 18 and has_ticket:\n    allowed = True\nelse:\n    allowed = False",
    "hint": "The age requirement and the ticket requirement are both True, so allowed becomes True.",
    "tests": [
      {
        "label": "Both requirements met",
        "expr": "allowed is True"
      },
      {
        "label": "No ticket",
        "expr": "rerun({\"has_ticket\":False})[\"allowed\"] is False"
      },
      {
        "label": "Too young",
        "expr": "rerun({\"age\":17})[\"allowed\"] is False"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 73,
    "group": "Conditions",
    "title": "An if inside an if",
    "intro": "",
    "body": "<p>A nested if is an if statement inside another block. It is reached only when the outer condition is True. Its own body is indented one additional level.</p>",
    "example": "is_open = True\nhas_ticket = True\nallowed = False\nif is_open:\n    if has_ticket:\n        allowed = True",
    "walkthrough": "Python checks is_open first. Only then does it check has_ticket. allowed changes only when both are True.",
    "task": "Complete the innermost block with allowed = True. Use eight spaces on that line.",
    "starter": "is_open = True\nhas_ticket = True\nallowed = False\nif is_open:\n    if has_ticket:\n",
    "answer": "is_open = True\nhas_ticket = True\nallowed = False\nif is_open:\n    if has_ticket:\n        allowed = True",
    "hint": "Python checks is_open first. Only then does it check has_ticket. allowed changes only when both are True.",
    "tests": [
      {
        "label": "Both true allows entry",
        "expr": "allowed is True"
      },
      {
        "label": "Closed prevents entry",
        "expr": "rerun({\"is_open\":False})[\"allowed\"] is False"
      },
      {
        "label": "Ticket needed",
        "expr": "rerun({\"has_ticket\":False})[\"allowed\"] is False"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 74,
    "group": "Projects · Decisions",
    "title": "Grade calculator · add D",
    "intro": "",
    "body": "<p>Extend the grade example one boundary at a time. Check higher grades first, so a high score is not caught by a lower threshold.</p>",
    "example": "if score >= 70:\n    grade = \"C\"\nelif score >= 60:\n    grade = \"D\"\nelse:\n    grade = \"F\"",
    "walkthrough": "When the earlier A and B conditions have failed, 70 or above earns C. Otherwise 60 or above earns D. Anything below 60 earns F.",
    "task": "Replace the final else block with an elif for scores >= 60 earning D, followed by else earning F.",
    "starter": "score = 65\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelif score >= 70:\n    grade = \"C\"\nelse:\n    grade = \"F\"",
    "answer": "score = 65\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelif score >= 70:\n    grade = \"C\"\nelif score >= 60:\n    grade = \"D\"\nelse:\n    grade = \"F\"",
    "hint": "When the earlier A and B conditions have failed, 70 or above earns C. Otherwise 60 or above earns D. Anything below 60 earns F.",
    "tests": [
      {
        "label": "65 earns D",
        "expr": "grade == \"D\""
      },
      {
        "label": "60 boundary",
        "expr": "rerun({\"score\":60})[\"grade\"] == \"D\""
      },
      {
        "label": "59 earns F",
        "expr": "rerun({\"score\":59})[\"grade\"] == \"F\""
      },
      {
        "label": "Earlier grades still work",
        "expr": "all(rerun({\"score\":n})[\"grade\"] == g for n,g in [(70,\"C\"),(80,\"B\"),(90,\"A\")])"
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 75,
    "group": "Projects · Decisions",
    "title": "Guessing game · one guess",
    "intro": "",
    "body": "<p>Before making a repeating game, handle one guess. Compare guess with secret to decide whether it is too low, too high, or correct.</p>",
    "example": "guess = 3\nsecret = 5\nif guess < secret:\n    message = \"Too low\"",
    "walkthrough": "3 is less than 5, so this branch stores Too low. The starter already handles this case and the correct case.",
    "task": "Add an elif branch for guess > secret that stores Too high in message.",
    "starter": "guess = 8\nsecret = 5\nif guess < secret:\n    message = \"Too low\"\nelse:\n    message = \"Correct\"",
    "answer": "guess = 8\nsecret = 5\nif guess < secret:\n    message = \"Too low\"\nelif guess > secret:\n    message = \"Too high\"\nelse:\n    message = \"Correct\"",
    "hint": "3 is less than 5, so this branch stores Too low. The starter already handles this case and the correct case.",
    "tests": [
      {
        "label": "High guess",
        "expr": "message == \"Too high\""
      },
      {
        "label": "Low guess",
        "expr": "rerun({\"guess\":2})[\"message\"] == \"Too low\""
      },
      {
        "label": "Correct guess",
        "expr": "rerun({\"guess\":5})[\"message\"] == \"Correct\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 76,
    "group": "Loops",
    "title": "Repeat over text",
    "intro": "",
    "body": "<p>A loop repeats a block. A <code>for</code> loop over a string takes one character at a time, giving it the name before <code>in</code>. The colon and indentation work like an if block.</p>",
    "example": "for letter in \"cat\":\n    print(letter)",
    "walkthrough": "On the first turn, letter is c. On the next it is a, then t. The same print line runs three times.",
    "task": "Loop through word and print each letter on its own line.",
    "starter": "word = \"Ada\"\nfor letter in word:\n",
    "answer": "word = \"Ada\"\nfor letter in word:\n    print(letter)",
    "hint": "On the first turn, letter is c. On the next it is a, then t. The same print line runs three times.",
    "tests": [
      {
        "label": "One character per line",
        "expr": "output == 'A\\nd\\na\\n'"
      },
      {
        "label": "Use a for loop",
        "expr": "has_node(\"For\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 77,
    "group": "Loops",
    "title": "Repeat a fixed number of times",
    "intro": "",
    "body": "<p><code>range(3)</code> provides the numbers 0, 1, and 2. A for loop can use those numbers to repeat its block three times.</p>",
    "example": "for number in range(3):\n    print(\"Hello\")",
    "walkthrough": "The loop runs once per number in the range. We do not need to use number inside this block; we just want three repetitions.",
    "task": "Print Ready exactly four times using range and a for loop.",
    "starter": "for number in range(0):\n    print(\"Ready\")",
    "answer": "for number in range(4):\n    print(\"Ready\")",
    "hint": "The loop runs once per number in the range. We do not need to use number inside this block; we just want three repetitions.",
    "tests": [
      {
        "label": "Four repetitions",
        "expr": "output == 'Ready\\nReady\\nReady\\nReady\\n'"
      },
      {
        "label": "Use a for loop",
        "expr": "has_node(\"For\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 78,
    "group": "Loops",
    "title": "Choose a range start",
    "intro": "",
    "body": "<p><code>range(start, stop)</code> begins at start and stops before stop. To include 5, use a stop of 6.</p>",
    "example": "for number in range(1, 4):\n    print(number)",
    "walkthrough": "The output is 1, 2, and 3 on separate lines. The stop value 4 is excluded.",
    "task": "Print 1 through 5 using a for loop and range.",
    "starter": "for number in range(1, 1):\n    print(number)",
    "answer": "for number in range(1, 6):\n    print(number)",
    "hint": "The output is 1, 2, and 3 on separate lines. The stop value 4 is excluded.",
    "tests": [
      {
        "label": "Numbers 1 through 5",
        "expr": "output == '1\\n2\\n3\\n4\\n5\\n'"
      },
      {
        "label": "Use a for loop",
        "expr": "has_node(\"For\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 79,
    "group": "Loops",
    "title": "Choose a range step",
    "intro": "",
    "body": "<p>A third input to <code>range(start, stop, step)</code> sets how much the number changes each turn.</p>",
    "example": "for number in range(2, 7, 2):\n    print(number)",
    "walkthrough": "Starting at 2 and adding 2 gives 2, 4, 6. The next value, 8, is past the excluded stop of 7.",
    "task": "Print 2, 4, 6, 8 using a range with step 2.",
    "starter": "for number in range(2, 9, 1):\n    print(number)",
    "answer": "for number in range(2, 9, 2):\n    print(number)",
    "hint": "Starting at 2 and adding 2 gives 2, 4, 6. The next value, 8, is past the excluded stop of 7.",
    "tests": [
      {
        "label": "Only the four even numbers",
        "expr": "output == '2\\n4\\n6\\n8\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 80,
    "group": "Loops",
    "title": "Build a running total",
    "intro": "",
    "body": "<p>Start a total before a loop. Add the current number during each turn. The variable keeps its updated value for the next turn.</p>",
    "example": "total = 0\nfor number in range(1, 4):\n    total += number",
    "walkthrough": "total changes from 0 to 1, then to 3, then to 6. Starting total inside the loop would reset it each time.",
    "task": "Add number to total inside the supplied loop.",
    "starter": "total = 0\nfor number in range(1, 6):\n",
    "answer": "total = 0\nfor number in range(1, 6):\n    total += number",
    "hint": "total changes from 0 to 1, then to 3, then to 6. Starting total inside the loop would reset it each time.",
    "tests": [
      {
        "label": "Total is 15",
        "expr": "total == 15"
      },
      {
        "label": "Use a for loop",
        "expr": "has_node(\"For\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 81,
    "group": "Loops",
    "title": "Repeat while a condition is true",
    "intro": "",
    "body": "<p>A <code>while</code> loop checks its condition before each turn. Change something inside the block so the condition can eventually become False.</p>",
    "example": "count = 3\nwhile count > 0:\n    print(count)\n    count -= 1",
    "walkthrough": "The loop prints 3, 2, and 1. Then count is 0, so the condition is False and the loop ends.",
    "task": "Complete the loop with count -= 1 so it stops.",
    "starter": "count = 3\nwhile count > 0:\n    print(count)\n",
    "answer": "count = 3\nwhile count > 0:\n    print(count)\n    count -= 1",
    "hint": "The loop prints 3, 2, and 1. Then count is 0, so the condition is False and the loop ends.",
    "tests": [
      {
        "label": "Countdown output",
        "expr": "output == '3\\n2\\n1\\n'"
      },
      {
        "label": "count ends at zero",
        "expr": "count == 0"
      },
      {
        "label": "Use while",
        "expr": "has_node(\"While\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 82,
    "group": "Loops",
    "title": "Stop a loop with break",
    "intro": "",
    "body": "<p><code>break</code> immediately ends the nearest enclosing loop. Instructions below it in that turn do not run.</p>",
    "example": "for number in range(1, 6):\n    if number == 3:\n        break\n    print(number)",
    "walkthrough": "1 and 2 print. When number reaches 3, break ends the loop before the print line.",
    "task": "Change the stopping condition so the loop prints 1, 2, 3 and then stops.",
    "starter": "for number in range(1, 8):\n    if number == 3:\n        break\n    print(number)",
    "answer": "for number in range(1, 8):\n    if number == 4:\n        break\n    print(number)",
    "hint": "1 and 2 print. When number reaches 3, break ends the loop before the print line.",
    "tests": [
      {
        "label": "Stop before 4",
        "expr": "output == '1\\n2\\n3\\n'"
      },
      {
        "label": "Use break",
        "expr": "has_node(\"Break\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 83,
    "group": "Loops",
    "title": "Skip one turn with continue",
    "intro": "",
    "body": "<p><code>continue</code> skips the rest of the current turn and starts the next one. It does not end the whole loop.</p>",
    "example": "for number in range(1, 4):\n    if number == 2:\n        continue\n    print(number)",
    "walkthrough": "The output is 1 then 3. When number is 2, continue skips print for that turn only.",
    "task": "Skip 3, while printing the other numbers from 1 through 4.",
    "starter": "for number in range(1, 5):\n    if number == 2:\n        continue\n    print(number)",
    "answer": "for number in range(1, 5):\n    if number == 3:\n        continue\n    print(number)",
    "hint": "The output is 1 then 3. When number is 2, continue skips print for that turn only.",
    "tests": [
      {
        "label": "Skip only 3",
        "expr": "output == '1\\n2\\n4\\n'"
      },
      {
        "label": "Use continue",
        "expr": "has_node(\"Continue\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 84,
    "group": "Loops",
    "title": "An empty placeholder: pass",
    "intro": "",
    "body": "<p><code>pass</code> does nothing. Use it when Python requires a block but you have not written that block yet. Unlike continue, it does not skip later instructions.</p>",
    "example": "for number in range(2):\n    pass\n    print(number)",
    "walkthrough": "pass does nothing on either turn. The print still runs, displaying 0 and 1.",
    "task": "Put pass inside the empty if block so the code can run.",
    "starter": "if True:\n\nprint(\"Ready\")",
    "answer": "if True:\n    pass\nprint(\"Ready\")",
    "hint": "pass does nothing on either turn. The print still runs, displaying 0 and 1.",
    "tests": [
      {
        "label": "Program runs",
        "expr": "output == 'Ready\\n'"
      },
      {
        "label": "Use pass",
        "expr": "has_node(\"Pass\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 85,
    "group": "Loops",
    "title": "A loop inside a loop",
    "intro": "",
    "body": "<p>For each turn of an outer loop, an inner loop runs through all of its turns. Indent the inner loop’s body one extra level.</p>",
    "example": "for row in range(2):\n    for column in range(3):\n        print(f\"{row},{column}\")",
    "walkthrough": "For row 0, columns are 0, 1, 2. Then row becomes 1 and columns run through 0, 1, 2 again: six pairs total.",
    "task": "Change the inner range to make two columns per row.",
    "starter": "for row in range(2):\n    for column in range(3):\n        print(f\"{row},{column}\")",
    "answer": "for row in range(2):\n    for column in range(2):\n        print(f\"{row},{column}\")",
    "hint": "For row 0, columns are 0, 1, 2. Then row becomes 1 and columns run through 0, 1, 2 again: six pairs total.",
    "tests": [
      {
        "label": "Four row-column pairs",
        "expr": "output == '0,0\\n0,1\\n1,0\\n1,1\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 86,
    "group": "Projects · Repetition",
    "title": "Guessing game · try again",
    "intro": "",
    "body": "<p>Now repeat the input step until the guess matches the secret. The first guess is read before the loop; each wrong guess causes another reply to be read.</p>",
    "example": "secret = 5\nguess = int(input(\"Guess: \"))\nwhile guess != secret:\n    guess = int(input(\"Try again: \"))\nprint(\"Correct\")",
    "walkthrough": "With replies 2, 8, 5, the loop reads two more guesses. When guess becomes 5, it stops and prints Correct.",
    "task": "Fill in the while condition so the supplied program keeps asking until guess equals secret.",
    "starter": "secret = 5\nguess = int(input(\"Guess: \"))\nwhile False:\n    guess = int(input(\"Try again: \"))\nprint(\"Correct\")",
    "answer": "secret = 5\nguess = int(input(\"Guess: \"))\nwhile guess != secret:\n    guess = int(input(\"Try again: \"))\nprint(\"Correct\")",
    "hint": "With replies 2, 8, 5, the loop reads two more guesses. When guess becomes 5, it stops and prints Correct.",
    "tests": [
      {
        "label": "Finish on the correct guess",
        "expr": "guess == secret"
      },
      {
        "label": "Show success",
        "expr": "output == 'Correct\\n'"
      },
      {
        "label": "Use a while loop",
        "expr": "has_node(\"While\")"
      }
    ],
    "inputs": "2\n8\n5",
    "exampleRunnable": true
  },
  {
    "id": 87,
    "group": "Collections · Lists",
    "title": "Keep several values in a list",
    "intro": "",
    "body": "<p>A list keeps values in order. Put the values inside square brackets and separate them with commas.</p>",
    "example": "scores = [70, 90, 80]\nprint(scores)",
    "walkthrough": "scores refers to one list containing three numbers. Their order is 70, then 90, then 80.",
    "task": "Create scores as a list containing 60, 75, 90 in that order.",
    "starter": "scores = []",
    "answer": "scores = [60, 75, 90]",
    "hint": "scores refers to one list containing three numbers. Their order is 70, then 90, then 80.",
    "tests": [
      {
        "label": "The list has the required values",
        "expr": "type(scores) is list and scores == [60,75,90]"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 88,
    "group": "Collections · Lists",
    "title": "Read a list item",
    "intro": "",
    "body": "<p>Lists use indexes just like strings. <code>[0]</code> reads the first item and <code>[-1]</code> reads the last.</p>",
    "example": "scores = [70, 90, 80]\nfirst = scores[0]",
    "walkthrough": "first is 70. Reading an item does not remove it from the list.",
    "task": "Store the last item of scores in last.",
    "starter": "scores = [60, 75, 90]\n",
    "answer": "scores = [60, 75, 90]\nlast = scores[-1]",
    "hint": "first is 70. Reading an item does not remove it from the list.",
    "tests": [
      {
        "label": "Read the last item",
        "expr": "last == 90"
      },
      {
        "label": "List is unchanged",
        "expr": "scores == [60,75,90]"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 89,
    "group": "Collections · Lists",
    "title": "Slice a list",
    "intro": "",
    "body": "<p>A list slice returns a new list containing the selected items. As with strings, the stop index is excluded.</p>",
    "example": "scores = [70, 90, 80]\nfirst_two = scores[0:2]",
    "walkthrough": "Indexes 0 and 1 are selected, so first_two is [70, 90]. scores still has all three items.",
    "task": "Store the first two items of scores in first_two.",
    "starter": "scores = [60, 75, 90]\n",
    "answer": "scores = [60, 75, 90]\nfirst_two = scores[:2]",
    "hint": "Indexes 0 and 1 are selected, so first_two is [70, 90]. scores still has all three items.",
    "tests": [
      {
        "label": "Select two items",
        "expr": "first_two == [60,75]"
      },
      {
        "label": "Keep the original list",
        "expr": "scores == [60,75,90]"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 90,
    "group": "Collections · Lists",
    "title": "Change a list item",
    "intro": "",
    "body": "<p>Unlike a string, a list lets you replace an item at an index. Put that indexed item on the left of <code>=</code>.</p>",
    "example": "scores = [70, 90, 80]\nscores[0] = 75",
    "walkthrough": "Only the first item changes. The list becomes [75, 90, 80].",
    "task": "Change the second score to 85.",
    "starter": "scores = [60, 75, 90]\n",
    "answer": "scores = [60, 75, 90]\nscores[1] = 85",
    "hint": "Only the first item changes. The list becomes [75, 90, 80].",
    "tests": [
      {
        "label": "Only the second item changes",
        "expr": "scores == [60,85,90]"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 91,
    "group": "Collections · Lists",
    "title": "Append one item",
    "intro": "",
    "body": "<p><code>.append(value)</code> adds one item at the end of a list. It changes the list itself; do not assign its result back to the list.</p>",
    "example": "scores = [70, 90]\nscores.append(80)",
    "walkthrough": "scores becomes [70, 90, 80]. Writing scores = scores.append(80) would instead set scores to None.",
    "task": "Append 100 to scores.",
    "starter": "scores = [60, 75, 90]\n",
    "answer": "scores = [60, 75, 90]\nscores.append(100)",
    "hint": "scores becomes [70, 90, 80]. Writing scores = scores.append(80) would instead set scores to None.",
    "tests": [
      {
        "label": "100 is added at the end",
        "expr": "scores == [60,75,90,100]"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 92,
    "group": "Collections · Lists",
    "title": "Insert at a position",
    "intro": "",
    "body": "<p><code>.insert(index, value)</code> adds an item before the existing item at that index. Later items shift right.</p>",
    "example": "names = [\"Ada\", \"Sam\"]\nnames.insert(1, \"Lin\")",
    "walkthrough": "Lin is placed at index 1. names becomes [\"Ada\", \"Lin\", \"Sam\"].",
    "task": "Insert Lin between Ada and Sam.",
    "starter": "names = [\"Ada\", \"Sam\"]\n",
    "answer": "names = [\"Ada\", \"Sam\"]\nnames.insert(1, \"Lin\")",
    "hint": "Lin is placed at index 1. names becomes [\"Ada\", \"Lin\", \"Sam\"].",
    "tests": [
      {
        "label": "Keep the requested order",
        "expr": "names == [\"Ada\",\"Lin\",\"Sam\"]"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 93,
    "group": "Collections · Lists",
    "title": "Remove by value",
    "intro": "",
    "body": "<p><code>.remove(value)</code> removes the first matching value from a list. It raises an error if that value is absent.</p>",
    "example": "names = [\"Ada\", \"Lin\", \"Sam\"]\nnames.remove(\"Lin\")",
    "walkthrough": "Python searches for Lin and removes it. names becomes [\"Ada\", \"Sam\"].",
    "task": "Remove 75 from scores.",
    "starter": "scores = [60, 75, 90]\n",
    "answer": "scores = [60, 75, 90]\nscores.remove(75)",
    "hint": "Python searches for Lin and removes it. names becomes [\"Ada\", \"Sam\"].",
    "tests": [
      {
        "label": "Remove only 75",
        "expr": "scores == [60,90]"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 94,
    "group": "Collections · Lists",
    "title": "Remove and keep an item",
    "intro": "",
    "body": "<p><code>.pop()</code> removes the last item and returns it. Assign the returned item to a variable when you still need it. <code>.pop(index)</code> removes at a chosen position.</p>",
    "example": "scores = [70, 90, 80]\nremoved = scores.pop()",
    "walkthrough": "removed is 80. scores is now [70, 90], because the last item was taken out.",
    "task": "Pop the last score into removed.",
    "starter": "scores = [60, 75, 90]\n",
    "answer": "scores = [60, 75, 90]\nremoved = scores.pop()",
    "hint": "removed is 80. scores is now [70, 90], because the last item was taken out.",
    "tests": [
      {
        "label": "Keep the removed value",
        "expr": "removed == 90"
      },
      {
        "label": "List is shorter",
        "expr": "scores == [60,75]"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 95,
    "group": "Collections · Lists",
    "title": "Count list items",
    "intro": "",
    "body": "<p><code>len()</code> counts the items in a list. It counts items, not the number of characters inside them.</p>",
    "example": "names = [\"Ada\", \"Lin\"]\ncount = len(names)",
    "walkthrough": "count is 2 because names contains two items, even though each name contains three letters.",
    "task": "Store the number of scores in count.",
    "starter": "scores = [60, 75, 90]\n",
    "answer": "scores = [60, 75, 90]\ncount = len(scores)",
    "hint": "count is 2 because names contains two items, even though each name contains three letters.",
    "tests": [
      {
        "label": "Three items",
        "expr": "count == 3"
      },
      {
        "label": "An empty list has zero items",
        "expr": "rerun({\"scores\":[]})[\"count\"] == 0"
      },
      {
        "label": "Practise len()",
        "expr": "calls('len')"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 96,
    "group": "Collections · Lists",
    "title": "Check whether an item exists",
    "intro": "",
    "body": "<p><code>in</code> checks membership and produces True or False. It asks whether a value appears anywhere in a collection.</p>",
    "example": "names = [\"Ada\", \"Lin\"]\nfound = \"Ada\" in names",
    "walkthrough": "found is True because Ada is an item in names. No index is needed.",
    "task": "Set found to whether 75 is in scores.",
    "starter": "scores = [60, 75, 90]\n",
    "answer": "scores = [60, 75, 90]\nfound = 75 in scores",
    "hint": "found is True because Ada is an item in names. No index is needed.",
    "tests": [
      {
        "label": "75 is present",
        "expr": "found is True"
      },
      {
        "label": "Absent value returns False",
        "expr": "rerun({\"scores\":[60,90]})[\"found\"] is False"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 97,
    "group": "Collections · Lists",
    "title": "Visit each list item",
    "intro": "",
    "body": "<p>A for loop can visit a list in order, just as it visited each character of a string. The loop variable holds the whole item.</p>",
    "example": "names = [\"Ada\", \"Lin\"]\nfor name in names:\n    print(name)",
    "walkthrough": "The first turn prints Ada. The second prints Lin. You do not need to calculate indexes.",
    "task": "Print each score on its own line using a for loop.",
    "starter": "scores = [60, 75, 90]\n",
    "answer": "scores = [60, 75, 90]\nfor score in scores:\n    print(score)",
    "hint": "The first turn prints Ada. The second prints Lin. You do not need to calculate indexes.",
    "tests": [
      {
        "label": "Each score prints",
        "expr": "output == '60\\n75\\n90\\n'"
      },
      {
        "label": "Use for",
        "expr": "has_node(\"For\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 98,
    "group": "Collections · Lists",
    "title": "Sort the list itself",
    "intro": "",
    "body": "<p><code>.sort()</code> puts a list in ascending order and changes that list. Like append(), it returns None.</p>",
    "example": "scores = [90, 70, 80]\nscores.sort()",
    "walkthrough": "scores is now [70, 80, 90]. Do not write scores = scores.sort().",
    "task": "Sort scores from smallest to largest.",
    "starter": "scores = [90, 60, 75]\n",
    "answer": "scores = [90, 60, 75]\nscores.sort()",
    "hint": "scores is now [70, 80, 90]. Do not write scores = scores.sort().",
    "tests": [
      {
        "label": "Scores are ascending",
        "expr": "scores == [60,75,90]"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 99,
    "group": "Collections · Lists",
    "title": "Make a sorted copy",
    "intro": "",
    "body": "<p><code>sorted()</code> returns a new sorted list. The original list stays in its current order.</p>",
    "example": "scores = [90, 70, 80]\nordered = sorted(scores)",
    "walkthrough": "ordered is [70, 80, 90], while scores is still [90, 70, 80]. Use this when both orders are useful.",
    "task": "Create ordered as a sorted copy of scores.",
    "starter": "scores = [90, 60, 75]\n",
    "answer": "scores = [90, 60, 75]\nordered = sorted(scores)",
    "hint": "ordered is [70, 80, 90], while scores is still [90, 70, 80]. Use this when both orders are useful.",
    "tests": [
      {
        "label": "Copy is sorted",
        "expr": "ordered == [60,75,90]"
      },
      {
        "label": "Original order remains",
        "expr": "scores == [90,60,75]"
      },
      {
        "label": "Practise sorted()",
        "expr": "calls('sorted')"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 100,
    "group": "Collections · Lists",
    "title": "Copy a list before changing it",
    "intro": "",
    "body": "<p><code>.copy()</code> makes a new outer list. For a list of numbers or strings, changing that copy leaves the original list unchanged. Assigning another name without copy() would share the same list.</p>",
    "example": "tasks = [\"Study\"]\nupdated = tasks.copy()\nupdated.append(\"Rest\")",
    "walkthrough": "updated contains Study and Rest. tasks still contains only Study. For nested lists, copy() still shares the inner lists.",
    "task": "Make updated a copy of tasks, then append Walk to updated.",
    "starter": "tasks = [\"Study\"]\n",
    "answer": "tasks = [\"Study\"]\nupdated = tasks.copy()\nupdated.append(\"Walk\")",
    "hint": "updated contains Study and Rest. tasks still contains only Study. For nested lists, copy() still shares the inner lists.",
    "tests": [
      {
        "label": "Copy is updated",
        "expr": "updated == [\"Study\",\"Walk\"]"
      },
      {
        "label": "Original is unchanged",
        "expr": "tasks == [\"Study\"] and updated is not tasks"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 101,
    "group": "Collections · Lists",
    "title": "A list inside a list",
    "intro": "",
    "body": "<p>A nested list contains other lists as items. Read one level at a time: select the inner list, then select an item from it.</p>",
    "example": "rows = [[1, 2], [3, 4]]\nsecond_row = rows[1]\nvalue = second_row[0]",
    "walkthrough": "rows[1] is [3, 4]. Its first item is 3, so value is 3. The shorter rows[1][0] means the same thing.",
    "task": "Read the second row into second_row, then its last item into value.",
    "starter": "rows = [[10, 20], [30, 40]]\n",
    "answer": "rows = [[10, 20], [30, 40]]\nsecond_row = rows[1]\nvalue = second_row[-1]",
    "hint": "rows[1] is [3, 4]. Its first item is 3, so value is 3. The shorter rows[1][0] means the same thing.",
    "tests": [
      {
        "label": "Select the second row",
        "expr": "second_row == [30,40]"
      },
      {
        "label": "Read its last item",
        "expr": "value == 40"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 102,
    "group": "Collections · Lists",
    "title": "Split text into a list",
    "intro": "",
    "body": "<p><code>.split()</code> with no input separates a string at whitespace. It returns a list of the resulting words.</p>",
    "example": "text = \"Ada Lin Sam\"\nnames = text.split()",
    "walkthrough": "names becomes [\"Ada\", \"Lin\", \"Sam\"]. This is why split belongs after learning lists.",
    "task": "Split text into words.",
    "starter": "text = \"learn Python slowly\"\n",
    "answer": "text = \"learn Python slowly\"\nwords = text.split()",
    "hint": "names becomes [\"Ada\", \"Lin\", \"Sam\"]. This is why split belongs after learning lists.",
    "tests": [
      {
        "label": "Three words in order",
        "expr": "words == [\"learn\",\"Python\",\"slowly\"]"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 103,
    "group": "Collections · Lists",
    "title": "Add list values",
    "intro": "",
    "body": "<p><code>sum()</code> adds numeric items in a collection. You can save the returned result in a variable.</p>",
    "example": "scores = [60, 75, 90]\nresult = sum(scores)",
    "walkthrough": "result is 225. The original list is unchanged.",
    "task": "Use sum() on scores and save the result in result.",
    "starter": "scores = [60, 75, 90]\n",
    "answer": "scores = [60, 75, 90]\nresult = sum(scores)",
    "hint": "result is 225. The original list is unchanged.",
    "tests": [
      {
        "label": "Calculate the result",
        "expr": "result == 225"
      },
      {
        "label": "Use the list",
        "expr": "rerun({\"scores\":[2,4]})[\"result\"] == sum([2,4])"
      },
      {
        "label": "Practise sum()",
        "expr": "calls('sum')"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 104,
    "group": "Collections · Lists",
    "title": "Find the smallest value",
    "intro": "",
    "body": "<p><code>min()</code> returns the smallest item in a collection. You can save the returned result in a variable.</p>",
    "example": "scores = [60, 75, 90]\nresult = min(scores)",
    "walkthrough": "result is 60. The original list is unchanged.",
    "task": "Use min() on scores and save the result in result.",
    "starter": "scores = [60, 75, 90]\n",
    "answer": "scores = [60, 75, 90]\nresult = min(scores)",
    "hint": "result is 60. The original list is unchanged.",
    "tests": [
      {
        "label": "Calculate the result",
        "expr": "result == 60"
      },
      {
        "label": "Use the list",
        "expr": "rerun({\"scores\":[2,4]})[\"result\"] == min([2,4])"
      },
      {
        "label": "Practise min()",
        "expr": "calls('min')"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 105,
    "group": "Collections · Lists",
    "title": "Find the largest value",
    "intro": "",
    "body": "<p><code>max()</code> returns the largest item in a collection. You can save the returned result in a variable.</p>",
    "example": "scores = [60, 75, 90]\nresult = max(scores)",
    "walkthrough": "result is 90. The original list is unchanged.",
    "task": "Use max() on scores and save the result in result.",
    "starter": "scores = [60, 75, 90]\n",
    "answer": "scores = [60, 75, 90]\nresult = max(scores)",
    "hint": "result is 90. The original list is unchanged.",
    "tests": [
      {
        "label": "Calculate the result",
        "expr": "result == 90"
      },
      {
        "label": "Use the list",
        "expr": "rerun({\"scores\":[2,4]})[\"result\"] == max([2,4])"
      },
      {
        "label": "Practise max()",
        "expr": "calls('max')"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 106,
    "group": "Collections · Tuples",
    "title": "Create a tuple",
    "intro": "",
    "body": "<p>A tuple is an ordered group whose items cannot be replaced after creation. A list suits a group you will edit; a tuple often suits a fixed record such as a coordinate.</p>",
    "example": "point = (3, 4)\nprint(point[0])",
    "walkthrough": "The tuple contains 3 and 4. Indexing works like a list, so point[0] is 3. Assigning point[0] = 9 would fail.",
    "task": "Create point as the tuple (5, 8).",
    "starter": "point = ()",
    "answer": "point = (5, 8)",
    "hint": "The tuple contains 3 and 4. Indexing works like a list, so point[0] is 3. Assigning point[0] = 9 would fail.",
    "tests": [
      {
        "label": "A tuple with two values",
        "expr": "type(point) is tuple and point == (5,8)"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 107,
    "group": "Collections · Tuples",
    "title": "Unpack a tuple",
    "intro": "",
    "body": "<p>Unpacking assigns each item to a separate name. The number of names must match the number of items.</p>",
    "example": "point = (3, 4)\nx, y = point",
    "walkthrough": "The first item goes into x; the second goes into y. x is 3 and y is 4.",
    "task": "Unpack student into name and age.",
    "starter": "student = (\"Ada\", 25)\n",
    "answer": "student = (\"Ada\", 25)\nname, age = student",
    "hint": "The first item goes into x; the second goes into y. x is 3 and y is 4.",
    "tests": [
      {
        "label": "Name is Ada",
        "expr": "name == \"Ada\""
      },
      {
        "label": "Age is 25",
        "expr": "age == 25"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 108,
    "group": "Collections · Tuples",
    "title": "A tuple with one item",
    "intro": "",
    "body": "<p>The comma makes a tuple. For one item, keep a trailing comma. Parentheses alone only group an expression.</p>",
    "example": "only = (\"Python\",)",
    "walkthrough": "only is a one-item tuple. Without the comma, (\"Python\") is just the string \"Python\".",
    "task": "Create only as a tuple containing the one string Ada.",
    "starter": "only = (\"Ada\")",
    "answer": "only = (\"Ada\",)",
    "hint": "only is a one-item tuple. Without the comma, (\"Python\") is just the string \"Python\".",
    "tests": [
      {
        "label": "One-item tuple",
        "expr": "type(only) is tuple and only == (\"Ada\",)"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 109,
    "group": "Collections · Tuples",
    "title": "Get positions while looping",
    "intro": "",
    "body": "<p><code>enumerate()</code> gives a position and an item together on each turn. Unpack the pair into two loop variables.</p>",
    "example": "names = [\"Ada\", \"Lin\"]\nfor index, name in enumerate(names):\n    print(f\"{index}: {name}\")",
    "walkthrough": "The first pair is 0 and Ada. The next is 1 and Lin. The output is 0: Ada, then 1: Lin.",
    "task": "Complete the print line to show index: name for each item.",
    "starter": "names = [\"Ada\", \"Lin\"]\nfor index, name in enumerate(names):\n",
    "answer": "names = [\"Ada\", \"Lin\"]\nfor index, name in enumerate(names):\n    print(f\"{index}: {name}\")",
    "hint": "The first pair is 0 and Ada. The next is 1 and Lin. The output is 0: Ada, then 1: Lin.",
    "tests": [
      {
        "label": "Index and name on each line",
        "expr": "output == '0: Ada\\n1: Lin\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 110,
    "group": "Collections · Tuples",
    "title": "Pair two collections",
    "intro": "",
    "body": "<p><code>zip()</code> pairs the first items together, then the second items, and so on. It stops when the shorter collection ends.</p>",
    "example": "names = [\"Ada\", \"Lin\"]\nscores = [80, 90]\nfor name, score in zip(names, scores):\n    print(f\"{name}: {score}\")",
    "walkthrough": "Ada pairs with 80. Lin pairs with 90. Unpacking gives each member of the pair its own name.",
    "task": "Complete the loop to print each name and score in the format Ada: 80.",
    "starter": "names = [\"Ada\", \"Lin\"]\nscores = [80, 90]\nfor name, score in zip(names, scores):\n",
    "answer": "names = [\"Ada\", \"Lin\"]\nscores = [80, 90]\nfor name, score in zip(names, scores):\n    print(f\"{name}: {score}\")",
    "hint": "Ada pairs with 80. Lin pairs with 90. Unpacking gives each member of the pair its own name.",
    "tests": [
      {
        "label": "Paired output",
        "expr": "output == 'Ada: 80\\nLin: 90\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 111,
    "group": "Collections · Dictionaries",
    "title": "Store a key-value pair",
    "intro": "",
    "body": "<p>A dictionary connects a key to a value. Put pairs inside braces. A colon separates each key from its value; commas separate pairs.</p>",
    "example": "person = {\"name\": \"Ada\", \"age\": 25}",
    "walkthrough": "The key \"name\" points to \"Ada\". The key \"age\" points to 25. Unlike list positions, these keys describe the values.",
    "task": "Create person with one pair: the key name and the value Lin.",
    "starter": "person = {}",
    "answer": "person = {\"name\": \"Lin\"}",
    "hint": "The key \"name\" points to \"Ada\". The key \"age\" points to 25. Unlike list positions, these keys describe the values.",
    "tests": [
      {
        "label": "One named value",
        "expr": "person == {\"name\":\"Lin\"}"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 112,
    "group": "Collections · Dictionaries",
    "title": "Look up a dictionary value",
    "intro": "",
    "body": "<p>Use square brackets with a key to read its value. A dictionary lookup uses the key itself, not its position.</p>",
    "example": "person = {\"name\": \"Ada\"}\nname = person[\"name\"]",
    "walkthrough": "The lookup asks for the value attached to \"name\", so name becomes \"Ada\". A missing key would raise KeyError.",
    "task": "Read the phone value from contact into phone.",
    "starter": "contact = {\"name\": \"Ada\", \"phone\": \"123\"}\n",
    "answer": "contact = {\"name\": \"Ada\", \"phone\": \"123\"}\nphone = contact[\"phone\"]",
    "hint": "The lookup asks for the value attached to \"name\", so name becomes \"Ada\". A missing key would raise KeyError.",
    "tests": [
      {
        "label": "Phone is text 123",
        "expr": "phone == \"123\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 113,
    "group": "Collections · Dictionaries",
    "title": "Update a dictionary value",
    "intro": "",
    "body": "<p>Assign to an existing key to replace its value. Other key-value pairs remain unchanged.</p>",
    "example": "person = {\"name\": \"Ada\", \"age\": 25}\nperson[\"age\"] = 26",
    "walkthrough": "Only the value attached to age changes. The name is still Ada.",
    "task": "Update contact’s phone to the string 456.",
    "starter": "contact = {\"name\": \"Ada\", \"phone\": \"123\"}\n",
    "answer": "contact = {\"name\": \"Ada\", \"phone\": \"123\"}\ncontact[\"phone\"] = \"456\"",
    "hint": "Only the value attached to age changes. The name is still Ada.",
    "tests": [
      {
        "label": "Only phone changes",
        "expr": "contact == {\"name\":\"Ada\",\"phone\":\"456\"}"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 114,
    "group": "Collections · Dictionaries",
    "title": "Add a dictionary key",
    "intro": "",
    "body": "<p>Assigning to a key that does not exist adds a new key-value pair. The syntax is the same as updating an existing key.</p>",
    "example": "person = {\"name\": \"Ada\"}\nperson[\"city\"] = \"London\"",
    "walkthrough": "person now has both name and city. The existing name pair is preserved.",
    "task": "Add city with value London to contact.",
    "starter": "contact = {\"name\": \"Ada\"}\n",
    "answer": "contact = {\"name\": \"Ada\"}\ncontact[\"city\"] = \"London\"",
    "hint": "person now has both name and city. The existing name pair is preserved.",
    "tests": [
      {
        "label": "Both pairs remain",
        "expr": "contact == {\"name\":\"Ada\",\"city\":\"London\"}"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 115,
    "group": "Collections · Dictionaries",
    "title": "Remove a dictionary key",
    "intro": "",
    "body": "<p><code>.pop(key)</code> removes a dictionary pair and returns its value. Unlike a list pop, you supply a key instead of a position.</p>",
    "example": "person = {\"name\": \"Ada\", \"city\": \"London\"}\nremoved = person.pop(\"city\")",
    "walkthrough": "removed is \"London\". person now contains only the name pair.",
    "task": "Remove phone from contact and store its old value in removed.",
    "starter": "contact = {\"name\": \"Ada\", \"phone\": \"123\"}\n",
    "answer": "contact = {\"name\": \"Ada\", \"phone\": \"123\"}\nremoved = contact.pop(\"phone\")",
    "hint": "removed is \"London\". person now contains only the name pair.",
    "tests": [
      {
        "label": "Removed value is kept",
        "expr": "removed == \"123\""
      },
      {
        "label": "Name remains",
        "expr": "contact == {\"name\":\"Ada\"}"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 116,
    "group": "Collections · Dictionaries",
    "title": "Handle a missing key with get",
    "intro": "",
    "body": "<p><code>.get(key, default)</code> returns the stored value when the key exists. Otherwise it returns your default without adding a key.</p>",
    "example": "person = {\"name\": \"Ada\"}\ncity = person.get(\"city\", \"Unknown\")",
    "walkthrough": "There is no city key, so city is \"Unknown\". person remains unchanged.",
    "task": "Read email from contact into email. Use Not provided when it is missing.",
    "starter": "contact = {\"name\": \"Ada\"}\n",
    "answer": "contact = {\"name\": \"Ada\"}\nemail = contact.get(\"email\", \"Not provided\")",
    "hint": "There is no city key, so city is \"Unknown\". person remains unchanged.",
    "tests": [
      {
        "label": "Missing email has a default",
        "expr": "email == \"Not provided\""
      },
      {
        "label": "Existing email is used",
        "expr": "rerun({\"contact\":{\"email\":\"ada@example.com\"}})[\"email\"] == \"ada@example.com\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 117,
    "group": "Collections · Dictionaries",
    "title": "Loop through keys",
    "intro": "",
    "body": "<p><code>.keys()</code> lets a loop visit the dictionary’s keys. Entries are visited in insertion order.</p>",
    "example": "person = {\"name\": \"Ada\", \"city\": \"London\"}\nfor key in person.keys():\n    print(key)",
    "walkthrough": "This displays name, then city. You are reading the dictionary, not changing it.",
    "task": "Print each key of person using .keys().",
    "starter": "person = {\"name\": \"Ada\", \"city\": \"London\"}\n",
    "answer": "person = {\"name\": \"Ada\", \"city\": \"London\"}\nfor key in person.keys():\n    print(key)",
    "hint": "This displays name, then city. You are reading the dictionary, not changing it.",
    "tests": [
      {
        "label": "Expected entries in order",
        "expr": "output == 'name\\ncity\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 118,
    "group": "Collections · Dictionaries",
    "title": "Loop through values",
    "intro": "",
    "body": "<p><code>.values()</code> lets a loop visit the dictionary’s values. Entries are visited in insertion order.</p>",
    "example": "person = {\"name\": \"Ada\", \"city\": \"London\"}\nfor value in person.values():\n    print(value)",
    "walkthrough": "This displays Ada, then London. You are reading the dictionary, not changing it.",
    "task": "Print each value of person using .values().",
    "starter": "person = {\"name\": \"Ada\", \"city\": \"London\"}\n",
    "answer": "person = {\"name\": \"Ada\", \"city\": \"London\"}\nfor value in person.values():\n    print(value)",
    "hint": "This displays Ada, then London. You are reading the dictionary, not changing it.",
    "tests": [
      {
        "label": "Expected entries in order",
        "expr": "output == 'Ada\\nLondon\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 119,
    "group": "Collections · Dictionaries",
    "title": "Loop through pairs",
    "intro": "",
    "body": "<p><code>.items()</code> gives a key and its value together. Unpack each pair into two loop variables.</p>",
    "example": "person = {\"name\": \"Ada\"}\nfor key, value in person.items():\n    print(f\"{key}: {value}\")",
    "walkthrough": "The pair contains \"name\" and \"Ada\". The printed line is name: Ada.",
    "task": "Print each key-value pair in the format name: Ada.",
    "starter": "person = {\"name\": \"Ada\", \"city\": \"London\"}\nfor key, value in person.items():\n",
    "answer": "person = {\"name\": \"Ada\", \"city\": \"London\"}\nfor key, value in person.items():\n    print(f\"{key}: {value}\")",
    "hint": "The pair contains \"name\" and \"Ada\". The printed line is name: Ada.",
    "tests": [
      {
        "label": "Two labelled values",
        "expr": "output == 'name: Ada\\ncity: London\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 120,
    "group": "Collections · Dictionaries",
    "title": "A dictionary inside a dictionary",
    "intro": "",
    "body": "<p>A dictionary value can itself be a dictionary. Look up one level first, then use a key in the inner dictionary.</p>",
    "example": "students = {\"Ada\": {\"score\": 90}}\nrecord = students[\"Ada\"]\nscore = record[\"score\"]",
    "walkthrough": "The first lookup gives {\"score\": 90}. The second reads 90 from that inner dictionary.",
    "task": "Read Lin’s record into record, then read its score into score.",
    "starter": "students = {\"Lin\": {\"score\": 85}}\n",
    "answer": "students = {\"Lin\": {\"score\": 85}}\nrecord = students[\"Lin\"]\nscore = record[\"score\"]",
    "hint": "The first lookup gives {\"score\": 90}. The second reads 90 from that inner dictionary.",
    "tests": [
      {
        "label": "Record selected",
        "expr": "record == {\"score\":85}"
      },
      {
        "label": "Score read",
        "expr": "score == 85"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 121,
    "group": "Collections · Sets",
    "title": "Keep only unique values",
    "intro": "",
    "body": "<p>A set holds distinct values. It has no positional indexes, and you should not rely on its printed order. Use <code>set(list)</code> to remove duplicates.</p>",
    "example": "names = [\"Ada\", \"Lin\", \"Ada\"]\nunique = set(names)",
    "walkthrough": "unique contains Ada and Lin once each. Either printed order is valid.",
    "task": "Convert names to a set called unique.",
    "starter": "names = [\"Ada\", \"Lin\", \"Ada\"]\n",
    "answer": "names = [\"Ada\", \"Lin\", \"Ada\"]\nunique = set(names)",
    "hint": "unique contains Ada and Lin once each. Either printed order is valid.",
    "tests": [
      {
        "label": "Exactly the unique names",
        "expr": "type(unique) is set and unique == {\"Ada\",\"Lin\"}"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 122,
    "group": "Collections · Sets",
    "title": "Create an empty set",
    "intro": "",
    "body": "<p><code>set()</code> makes an empty set. Empty braces <code>{}</code> make a dictionary instead. A nonempty set can use braces around values without key-value colons.</p>",
    "example": "empty = set()\ncolours = {\"red\", \"blue\"}",
    "walkthrough": "empty has no members. colours is a set with two strings; it is not a dictionary because there are no key-value pairs.",
    "task": "Create an empty set named seen.",
    "starter": "seen = {}",
    "answer": "seen = set()",
    "hint": "empty has no members. colours is a set with two strings; it is not a dictionary because there are no key-value pairs.",
    "tests": [
      {
        "label": "An empty set",
        "expr": "type(seen) is set and len(seen) == 0"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 123,
    "group": "Collections · Sets",
    "title": "Add to a set",
    "intro": "",
    "body": "<p><code>.add(value)</code> puts a value in a set. Adding a value already present does not create a duplicate.</p>",
    "example": "names = {\"Ada\"}\nnames.add(\"Lin\")",
    "walkthrough": "names now contains Ada and Lin. Adding Ada again would leave two unique members.",
    "task": "Add Lin to names.",
    "starter": "names = {\"Ada\"}\n",
    "answer": "names = {\"Ada\"}\nnames.add(\"Lin\")",
    "hint": "names now contains Ada and Lin. Adding Ada again would leave two unique members.",
    "tests": [
      {
        "label": "Both names are present",
        "expr": "names == {\"Ada\",\"Lin\"}"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 124,
    "group": "Collections · Sets",
    "title": "Remove from a set",
    "intro": "",
    "body": "<p><code>.discard(value)</code> removes a value if present and does nothing if it is absent. <code>.remove(value)</code> also removes, but raises an error when the value is absent.</p>",
    "example": "names = {\"Ada\", \"Lin\"}\nnames.discard(\"Lin\")",
    "walkthrough": "Only Ada remains. Calling discard(\"Lin\") again would still be safe.",
    "task": "Discard Lin from names.",
    "starter": "names = {\"Ada\", \"Lin\"}\n",
    "answer": "names = {\"Ada\", \"Lin\"}\nnames.discard(\"Lin\")",
    "hint": "Only Ada remains. Calling discard(\"Lin\") again would still be safe.",
    "tests": [
      {
        "label": "Only Ada remains",
        "expr": "names == {\"Ada\"}"
      },
      {
        "label": "Missing member is safe",
        "expr": "rerun({\"names\":{\"Ada\"}})[\"names\"] == {\"Ada\"}"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 125,
    "group": "Collections · Sets",
    "title": "Combine sets: union",
    "intro": "",
    "body": "<p>Union includes every value from either set, once. Use <code>|</code> between two sets.</p>",
    "example": "a = {\"Ada\", \"Lin\"}\nb = {\"Lin\", \"Sam\"}\nresult = a | b",
    "walkthrough": "The result contains Ada, Lin, Sam. The original sets stay unchanged.",
    "task": "Store a | b in result.",
    "starter": "a = {\"Ada\", \"Lin\"}\nb = {\"Lin\", \"Sam\"}\n",
    "answer": "a = {\"Ada\", \"Lin\"}\nb = {\"Lin\", \"Sam\"}\nresult = a | b",
    "hint": "The result contains Ada, Lin, Sam. The original sets stay unchanged.",
    "tests": [
      {
        "label": "Correct set members",
        "expr": "result == {'Lin', 'Sam', 'Ada'}"
      },
      {
        "label": "Uses both sets",
        "expr": "rerun({\"a\":{1,2},\"b\":{2,3}})[\"result\"] == ({1,2} | {2,3})"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 126,
    "group": "Collections · Sets",
    "title": "Shared values: intersection",
    "intro": "",
    "body": "<p>Intersection includes only values present in both sets. Use <code>&amp;</code> between two sets.</p>",
    "example": "a = {\"Ada\", \"Lin\"}\nb = {\"Lin\", \"Sam\"}\nresult = a & b",
    "walkthrough": "The result contains Lin. The original sets stay unchanged.",
    "task": "Store a & b in result.",
    "starter": "a = {\"Ada\", \"Lin\"}\nb = {\"Lin\", \"Sam\"}\n",
    "answer": "a = {\"Ada\", \"Lin\"}\nb = {\"Lin\", \"Sam\"}\nresult = a & b",
    "hint": "The result contains Lin. The original sets stay unchanged.",
    "tests": [
      {
        "label": "Correct set members",
        "expr": "result == {'Lin'}"
      },
      {
        "label": "Uses both sets",
        "expr": "rerun({\"a\":{1,2},\"b\":{2,3}})[\"result\"] == ({1,2} & {2,3})"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 127,
    "group": "Collections · Sets",
    "title": "Only in the first: difference",
    "intro": "",
    "body": "<p>Difference includes values in the left set that are absent from the right set. Use <code>-</code> between two sets.</p>",
    "example": "a = {\"Ada\", \"Lin\"}\nb = {\"Lin\", \"Sam\"}\nresult = a - b",
    "walkthrough": "The result contains Ada. The original sets stay unchanged.",
    "task": "Store a - b in result.",
    "starter": "a = {\"Ada\", \"Lin\"}\nb = {\"Lin\", \"Sam\"}\n",
    "answer": "a = {\"Ada\", \"Lin\"}\nb = {\"Lin\", \"Sam\"}\nresult = a - b",
    "hint": "The result contains Ada. The original sets stay unchanged.",
    "tests": [
      {
        "label": "Correct set members",
        "expr": "result == {'Ada'}"
      },
      {
        "label": "Uses both sets",
        "expr": "rerun({\"a\":{1,2},\"b\":{2,3}})[\"result\"] == ({1,2} - {2,3})"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 128,
    "group": "Functions",
    "title": "Define a function",
    "intro": "",
    "body": "<p>A function groups instructions under a name so you can reuse them. <code>def</code> creates the function; its indented body waits until you call it.</p>",
    "example": "def greet():\n    print(\"Hello\")\n\ngreet()",
    "walkthrough": "The definition stores the instructions. The final greet() call runs them and displays Hello. Without the call, nothing would print.",
    "task": "Complete greet so it prints Welcome. Keep the call at the bottom.",
    "starter": "def greet():\n    pass\n\ngreet()",
    "answer": "def greet():\n    print(\"Welcome\")\n\ngreet()",
    "hint": "The definition stores the instructions. The final greet() call runs them and displays Hello. Without the call, nothing would print.",
    "tests": [
      {
        "label": "Welcome prints",
        "expr": "output == 'Welcome\\n'"
      },
      {
        "label": "Define greet",
        "expr": "callable(greet) and has_node(\"FunctionDef\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 129,
    "group": "Functions",
    "title": "Call a function again",
    "intro": "",
    "body": "<p>Once defined, a function can be called multiple times. Each call runs its body again.</p>",
    "example": "def greet():\n    print(\"Hello\")\n\ngreet()\ngreet()",
    "walkthrough": "There is one definition and two calls, so Hello prints twice. You do not need to copy the body.",
    "task": "Call the supplied greet function exactly twice.",
    "starter": "def greet():\n    print(\"Welcome\")\n\n",
    "answer": "def greet():\n    print(\"Welcome\")\n\ngreet()\ngreet()",
    "hint": "There is one definition and two calls, so Hello prints twice. You do not need to copy the body.",
    "tests": [
      {
        "label": "Two greetings",
        "expr": "output == 'Welcome\\nWelcome\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 130,
    "group": "Functions",
    "title": "Give a function one input",
    "intro": "",
    "body": "<p>A parameter is a name in a function’s definition. An argument is the value supplied when you call it. That value becomes the parameter’s value during the call.</p>",
    "example": "def greet(name):\n    print(f\"Hello, {name}\")\n\ngreet(\"Ada\")",
    "walkthrough": "name is the parameter. \"Ada\" is the argument. Inside this call, name refers to Ada.",
    "task": "Call greet with the argument Lin.",
    "starter": "def greet(name):\n    print(f\"Hello, {name}\")\n\n",
    "answer": "def greet(name):\n    print(f\"Hello, {name}\")\n\ngreet(\"Lin\")",
    "hint": "name is the parameter. \"Ada\" is the argument. Inside this call, name refers to Ada.",
    "tests": [
      {
        "label": "Use the supplied function",
        "expr": "output == 'Hello, Lin\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 131,
    "group": "Functions",
    "title": "Return a value",
    "intro": "",
    "body": "<p><code>return</code> sends a value back to the code that called the function. Printing displays a value; returning lets other code store or use it.</p>",
    "example": "def double(number):\n    return number * 2\n\nresult = double(3)",
    "walkthrough": "The call receives 6 and stores it in result. Nothing prints because this code has no print instruction.",
    "task": "Replace pass so double returns number * 2.",
    "starter": "def double(number):\n    pass",
    "answer": "def double(number):\n    return number * 2",
    "hint": "The call receives 6 and stores it in result. Nothing prints because this code has no print instruction.",
    "tests": [
      {
        "label": "Double 3",
        "expr": "double(3) == 6"
      },
      {
        "label": "Double 0",
        "expr": "double(0) == 0"
      },
      {
        "label": "Double a negative",
        "expr": "double(-2) == -4"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 132,
    "group": "Functions",
    "title": "Use a returned value",
    "intro": "",
    "body": "<p>Save a function call’s result just like any other value. Then you can print it, calculate with it, or pass it to another function.</p>",
    "example": "def double(number):\n    return number * 2\n\nresult = double(3)\nprint(result)",
    "walkthrough": "double returns 6. The assignment stores it, then print displays it.",
    "task": "Call double with 5, save its return value in result, then print result.",
    "starter": "def double(number):\n    return number * 2\n\n",
    "answer": "def double(number):\n    return number * 2\n\nresult = double(5)\nprint(result)",
    "hint": "double returns 6. The assignment stores it, then print displays it.",
    "tests": [
      {
        "label": "Return value stored",
        "expr": "result == 10"
      },
      {
        "label": "Printed result",
        "expr": "output == '10\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 133,
    "group": "Functions",
    "title": "Give a function two inputs",
    "intro": "",
    "body": "<p>Separate parameters with commas. In a positional call, the first argument goes to the first parameter and the second to the second.</p>",
    "example": "def subtract(a, b):\n    return a - b\n\nresult = subtract(9, 4)",
    "walkthrough": "a becomes 9 and b becomes 4. The function returns 5. Reversing the arguments would change the result.",
    "task": "Define add(a, b) to return their sum.",
    "starter": "def add(a, b):\n    pass",
    "answer": "def add(a, b):\n    return a + b",
    "hint": "a becomes 9 and b becomes 4. The function returns 5. Reversing the arguments would change the result.",
    "tests": [
      {
        "label": "Add positive numbers",
        "expr": "add(2,3) == 5"
      },
      {
        "label": "Add negative and positive",
        "expr": "add(-2,3) == 1"
      },
      {
        "label": "Add zeros",
        "expr": "add(0,0) == 0"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 134,
    "group": "Functions",
    "title": "Supply a default input",
    "intro": "",
    "body": "<p>A default parameter is used when the caller omits that argument. Put the default after <code>=</code> in the definition.</p>",
    "example": "def add(a, b=1):\n    return a + b\n\nresult = add(5)",
    "walkthrough": "Only a is supplied. b uses its default of 1, so result is 6. add(5, 3) would use 3 instead.",
    "task": "Give b a default of 1 in the supplied add definition.",
    "starter": "def add(a, b):\n    return a + b",
    "answer": "def add(a, b=1):\n    return a + b",
    "hint": "Only a is supplied. b uses its default of 1, so result is 6. add(5, 3) would use 3 instead.",
    "tests": [
      {
        "label": "Omitted b uses 1",
        "expr": "add(5) == 6"
      },
      {
        "label": "Explicit b replaces default",
        "expr": "add(5,3) == 8"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 135,
    "group": "Functions",
    "title": "Name arguments in a call",
    "intro": "",
    "body": "<p>Keyword arguments identify parameters by name. Their order in the call can differ from the definition because each value says where it belongs.</p>",
    "example": "def subtract(a, b):\n    return a - b\n\nresult = subtract(b=4, a=9)",
    "walkthrough": "Despite appearing second, a receives 9. b receives 4. The result is 5.",
    "task": "Call subtract with a=10 and b=3 using keyword arguments. Save the result in result.",
    "starter": "def subtract(a, b):\n    return a - b\n\n",
    "answer": "def subtract(a, b):\n    return a - b\n\nresult = subtract(a=10, b=3)",
    "hint": "Despite appearing second, a receives 9. b receives 4. The result is 5.",
    "tests": [
      {
        "label": "Result is 7",
        "expr": "result == 7"
      },
      {
        "label": "Use both keyword names",
        "expr": "any(isinstance(n,__import__(\"ast\").Call) and {k.arg for k in n.keywords} == {\"a\",\"b\"} for n in __import__(\"ast\").walk(__import__(\"ast\").parse(source)))"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 136,
    "group": "Functions",
    "title": "Return ends a function",
    "intro": "",
    "body": "<p>When Python reaches return, it immediately leaves that function call. Lines later in that same call do not run.</p>",
    "example": "def label(score):\n    if score >= 50:\n        return \"Pass\"\n    return \"Retry\"",
    "walkthrough": "For 70, the first return ends the call with Pass. For 40, the if block is skipped and the final return gives Retry.",
    "task": "Finish label so scores below 50 return Retry.",
    "starter": "def label(score):\n    if score >= 50:\n        return \"Pass\"\n",
    "answer": "def label(score):\n    if score >= 50:\n        return \"Pass\"\n    return \"Retry\"",
    "hint": "For 70, the first return ends the call with Pass. For 40, the if block is skipped and the final return gives Retry.",
    "tests": [
      {
        "label": "Passing score",
        "expr": "label(70) == \"Pass\""
      },
      {
        "label": "Boundary passes",
        "expr": "label(50) == \"Pass\""
      },
      {
        "label": "Low score",
        "expr": "label(49) == \"Retry\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 137,
    "group": "Functions · Scope",
    "title": "A local variable",
    "intro": "",
    "body": "<p>A variable assigned inside a function is local to that call. Code outside the function cannot use that local name directly. Return the value if outside code needs it.</p>",
    "example": "def make_total():\n    total = 3 + 4\n    return total\n\nresult = make_total()",
    "walkthrough": "total exists inside the call. result stores the returned 7 outside. They are separate names in separate scopes.",
    "task": "Return local result from increase so the caller can store it.",
    "starter": "def increase(value):\n    result = value + 1\n\nupdated = increase(10)",
    "answer": "def increase(value):\n    result = value + 1\n    return result\n\nupdated = increase(10)",
    "hint": "total exists inside the call. result stores the returned 7 outside. They are separate names in separate scopes.",
    "tests": [
      {
        "label": "Returned value is available",
        "expr": "updated == 11"
      },
      {
        "label": "Local name does not leak",
        "expr": "\"result\" not in user_globals"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 138,
    "group": "Functions · Scope",
    "title": "Read a global variable",
    "intro": "",
    "body": "<p>A variable assigned outside functions is global in this file. A function can read it. Passing a value as an argument often makes the function’s dependencies clearer.</p>",
    "example": "bonus = 5\ndef add_bonus(score):\n    return score + bonus",
    "walkthrough": "bonus belongs to the outer file. add_bonus reads it without assigning to it. add_bonus(10) returns 15.",
    "task": "Complete add_bonus by returning score + bonus.",
    "starter": "bonus = 5\ndef add_bonus(score):\n    pass",
    "answer": "bonus = 5\ndef add_bonus(score):\n    return score + bonus",
    "hint": "bonus belongs to the outer file. add_bonus reads it without assigning to it. add_bonus(10) returns 15.",
    "tests": [
      {
        "label": "Use the global value",
        "expr": "add_bonus(10) == 15"
      },
      {
        "label": "Different input",
        "expr": "add_bonus(20) == 25"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 139,
    "group": "Functions · Scope",
    "title": "Same name, different scope",
    "intro": "",
    "body": "<p>Assigning a name inside a function normally creates a local variable, even when a global variable has the same name. This can explain why an outer value did not change.</p>",
    "example": "total = 10\ndef local_total():\n    total = 3\n    return total\n\ninside = local_total()",
    "walkthrough": "inside becomes 3. The global total stays 10. The two total names belong to different scopes.",
    "task": "Keep the global total at 10. Make local_total return its local value 3.",
    "starter": "total = 10\ndef local_total():\n    total = 3\n\ninside = local_total()",
    "answer": "total = 10\ndef local_total():\n    total = 3\n    return total\n\ninside = local_total()",
    "hint": "inside becomes 3. The global total stays 10. The two total names belong to different scopes.",
    "tests": [
      {
        "label": "Local value returned",
        "expr": "inside == 3"
      },
      {
        "label": "Global unchanged",
        "expr": "total == 10"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 140,
    "group": "Functions · Scope",
    "title": "Explicit global assignment",
    "intro": "",
    "body": "<p><code>global</code> inside a function makes assignments to that name affect the global variable. Use it deliberately: other code now depends on that shared state.</p>",
    "example": "count = 0\ndef increment():\n    global count\n    count += 1\n\nincrement()",
    "walkthrough": "global count tells Python which count to update. After the call, the outer count is 1. Without global, this read-and-update would cause an error.",
    "task": "Add global count before the update inside increment.",
    "starter": "count = 0\ndef increment():\n    count += 1\n\nincrement()",
    "answer": "count = 0\ndef increment():\n    global count\n    count += 1\n\nincrement()",
    "hint": "global count tells Python which count to update. After the call, the outer count is 1. Without global, this read-and-update would cause an error.",
    "tests": [
      {
        "label": "Global count increments",
        "expr": "count == 1"
      },
      {
        "label": "Declare global",
        "expr": "has_node(\"Global\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 141,
    "group": "Functions · Comprehensions",
    "title": "Build a list with a loop",
    "intro": "",
    "body": "<p>Before shortening a list-building loop, practise its separate steps: create an empty list, calculate one item, and append it.</p>",
    "example": "numbers = [1, 2, 3]\nsquares = []\nfor number in numbers:\n    squares.append(number ** 2)",
    "walkthrough": "The loop appends 1, then 4, then 9. squares ends as [1, 4, 9].",
    "task": "Append each number squared inside the supplied loop.",
    "starter": "numbers = [2, 3, 4]\nsquares = []\nfor number in numbers:\n",
    "answer": "numbers = [2, 3, 4]\nsquares = []\nfor number in numbers:\n    squares.append(number ** 2)",
    "hint": "The loop appends 1, then 4, then 9. squares ends as [1, 4, 9].",
    "tests": [
      {
        "label": "Squared items",
        "expr": "squares == [4,9,16]"
      },
      {
        "label": "Use the loop",
        "expr": "has_node(\"For\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 142,
    "group": "Functions · Comprehensions",
    "title": "A basic list comprehension",
    "intro": "",
    "body": "<p>A list comprehension puts a simple list-building loop into an expression: <code>[result for item in collection]</code>. Start with the value you want for each item.</p>",
    "example": "numbers = [1, 2, 3]\nsquares = [number ** 2 for number in numbers]",
    "walkthrough": "For each number, calculate number ** 2 and collect the result. This produces the same [1, 4, 9] as the previous loop.",
    "task": "Use a list comprehension to square numbers into squares.",
    "starter": "numbers = [2, 3, 4]\n",
    "answer": "numbers = [2, 3, 4]\nsquares = [number ** 2 for number in numbers]",
    "hint": "For each number, calculate number ** 2 and collect the result. This produces the same [1, 4, 9] as the previous loop.",
    "tests": [
      {
        "label": "Squares are correct",
        "expr": "squares == [4,9,16]"
      },
      {
        "label": "Use a comprehension",
        "expr": "has_node(\"ListComp\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 143,
    "group": "Functions · Comprehensions",
    "title": "Filter a comprehension",
    "intro": "",
    "body": "<p>An optional <code>if</code> at the end of a comprehension decides which items to include. The expression before for decides what value to store.</p>",
    "example": "numbers = [1, 2, 3, 4]\nevens = [number for number in numbers if number % 2 == 0]",
    "walkthrough": "Remainder zero means even. Only 2 and 4 satisfy the condition, so evens is [2, 4]. Keep a normal loop if the comprehension becomes hard to read.",
    "task": "Use a comprehension to keep only even numbers in evens.",
    "starter": "numbers = [1, 2, 3, 4, 5, 6]\n",
    "answer": "numbers = [1, 2, 3, 4, 5, 6]\nevens = [number for number in numbers if number % 2 == 0]",
    "hint": "Remainder zero means even. Only 2 and 4 satisfy the condition, so evens is [2, 4]. Keep a normal loop if the comprehension becomes hard to read.",
    "tests": [
      {
        "label": "Only even items",
        "expr": "evens == [2,4,6]"
      },
      {
        "label": "Use a comprehension",
        "expr": "has_node(\"ListComp\")"
      },
      {
        "label": "Works with other numbers",
        "expr": "rerun({\"numbers\":[7,8,10]})[\"evens\"] == [8,10]"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 144,
    "group": "Projects · Functions",
    "title": "Calculator · add and subtract",
    "intro": "",
    "body": "<p>Start a calculator with just two operations. Use op to select the branch, then return a calculation using a and b.</p>",
    "example": "def calculate(a, b, op):\n    if op == \"+\":\n        return a + b\n    return None",
    "walkthrough": "The supplied addition branch is already complete. Returning None means the operation was not handled.",
    "task": "Add a branch for op == \"-\" that returns a - b, before the final return.",
    "starter": "def calculate(a, b, op):\n    if op == \"+\":\n        return a + b\n    return None",
    "answer": "def calculate(a, b, op):\n    if op == \"+\":\n        return a + b\n    if op == \"-\":\n        return a - b\n    return None",
    "hint": "The supplied addition branch is already complete. Returning None means the operation was not handled.",
    "tests": [
      {
        "label": "Addition still works",
        "expr": "calculate(2,3,\"+\") == 5"
      },
      {
        "label": "Subtraction works",
        "expr": "calculate(9,4,\"-\") == 5 and calculate(4,9,\"-\") == -5"
      },
      {
        "label": "Unknown operation",
        "expr": "calculate(2,3,\"?\") is None"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 145,
    "group": "Projects · Functions",
    "title": "Calculator · multiply",
    "intro": "",
    "body": "<p>Extend a working function with one branch at a time. The existing returns finish their calls, so later branches handle other operations.</p>",
    "example": "if op == \"*\":\n    return a * b",
    "walkthrough": "This branch belongs inside calculate, before its final return None. It uses the same parameters as the earlier branches.",
    "task": "Add multiplication to the supplied calculator.",
    "starter": "def calculate(a, b, op):\n    if op == \"+\":\n        return a + b\n    if op == \"-\":\n        return a - b\n    return None",
    "answer": "def calculate(a, b, op):\n    if op == \"+\":\n        return a + b\n    if op == \"-\":\n        return a - b\n    if op == \"*\":\n        return a * b\n    return None",
    "hint": "This branch belongs inside calculate, before its final return None. It uses the same parameters as the earlier branches.",
    "tests": [
      {
        "label": "Multiply inputs",
        "expr": "calculate(3,4,\"*\") == 12 and calculate(-2,5,\"*\") == -10"
      },
      {
        "label": "Earlier operations remain",
        "expr": "calculate(2,3,\"+\") == 5 and calculate(9,4,\"-\") == 5"
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 146,
    "group": "Projects · Functions",
    "title": "Calculator · safe division",
    "intro": "",
    "body": "<p>Division by zero raises an error. Before dividing, require the operation to be / and the divisor b to be nonzero.</p>",
    "example": "if op == \"/\" and b != 0:\n    return a / b",
    "walkthrough": "Both conditions must be true. If b is zero, this branch is skipped and the final return None handles the request.",
    "task": "Add safe division before the final return None.",
    "starter": "def calculate(a, b, op):\n    if op == \"+\":\n        return a + b\n    if op == \"-\":\n        return a - b\n    if op == \"*\":\n        return a * b\n    return None",
    "answer": "def calculate(a, b, op):\n    if op == \"+\":\n        return a + b\n    if op == \"-\":\n        return a - b\n    if op == \"*\":\n        return a * b\n    if op == \"/\" and b != 0:\n        return a / b\n    return None",
    "hint": "Both conditions must be true. If b is zero, this branch is skipped and the final return None handles the request.",
    "tests": [
      {
        "label": "Normal division",
        "expr": "calculate(9,2,\"/\") == 4.5"
      },
      {
        "label": "Zero divisor returns None",
        "expr": "calculate(9,0,\"/\") is None"
      },
      {
        "label": "Other operations remain",
        "expr": "calculate(2,3,\"+\") == 5 and calculate(9,4,\"-\") == 5 and calculate(3,4,\"*\") == 12"
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 147,
    "group": "Projects · Functions",
    "title": "To-do list · add a task",
    "intro": "",
    "body": "<p>Build a reusable operation using a list copy, so the caller’s original list is preserved. The function should return the updated list.</p>",
    "example": "updated = tasks.copy()\nupdated.append(task)\nreturn updated",
    "walkthrough": "First copy the list, then append to the copy, then return it. These lines belong inside the function body.",
    "task": "Finish add_task by appending task to updated and returning updated.",
    "starter": "def add_task(tasks, task):\n    updated = tasks.copy()\n",
    "answer": "def add_task(tasks, task):\n    updated = tasks.copy()\n    updated.append(task)\n    return updated",
    "hint": "First copy the list, then append to the copy, then return it. These lines belong inside the function body.",
    "tests": [
      {
        "label": "Add to existing list",
        "expr": "add_task([\"Study\"],\"Rest\") == [\"Study\",\"Rest\"]"
      },
      {
        "label": "Add to empty list",
        "expr": "add_task([],\"Walk\") == [\"Walk\"]"
      },
      {
        "label": "Keep caller list unchanged",
        "expr": "(lambda items: add_task(items,\"Rest\") == [\"Study\",\"Rest\"] and items == [\"Study\"])([\"Study\"])"
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 148,
    "group": "Projects · Functions",
    "title": "To-do list · complete a task",
    "intro": "",
    "body": "<p>Remove a task only when it exists. Keep the original list unchanged by working with a copy.</p>",
    "example": "if task in updated:\n    updated.remove(task)",
    "walkthrough": "The membership check prevents remove() from failing when the task is missing. Return the copy after the if block.",
    "task": "Complete the if block to remove task, then return updated outside the block.",
    "starter": "def complete_task(tasks, task):\n    updated = tasks.copy()\n    if task in updated:\n        pass\n",
    "answer": "def complete_task(tasks, task):\n    updated = tasks.copy()\n    if task in updated:\n        updated.remove(task)\n    return updated",
    "hint": "The membership check prevents remove() from failing when the task is missing. Return the copy after the if block.",
    "tests": [
      {
        "label": "Remove a present task",
        "expr": "complete_task([\"Study\",\"Rest\"],\"Study\") == [\"Rest\"]"
      },
      {
        "label": "Absent task leaves values unchanged",
        "expr": "complete_task([\"Study\"],\"Walk\") == [\"Study\"]"
      },
      {
        "label": "Preserve the original list",
        "expr": "(lambda items: complete_task(items,\"Study\") == [] and items == [\"Study\"])([\"Study\"])"
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 149,
    "group": "Projects · Functions",
    "title": "Quiz · ignore extra spaces",
    "intro": "",
    "body": "<p>Start answer checking by cleaning only outer spaces. Return the cleaned text so another step can compare it.</p>",
    "example": "def clean_answer(text):\n    return text.strip()",
    "walkthrough": "\"  Ada  \" becomes \"Ada\". Spaces inside an answer remain intact.",
    "task": "Define clean_answer to return text with outer whitespace removed.",
    "starter": "def clean_answer(text):\n    pass",
    "answer": "def clean_answer(text):\n    return text.strip()",
    "hint": "\"  Ada  \" becomes \"Ada\". Spaces inside an answer remain intact.",
    "tests": [
      {
        "label": "Trim outer spaces",
        "expr": "clean_answer(\"  Ada  \") == \"Ada\""
      },
      {
        "label": "Keep inner spaces",
        "expr": "clean_answer(\" New York \") == \"New York\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 150,
    "group": "Projects · Functions",
    "title": "Quiz · ignore capitalization",
    "intro": "",
    "body": "<p>Now apply lowercase after removing outer spaces. Use two explicit assignments so you can see the value after each change.</p>",
    "example": "clean = text.strip()\nclean = clean.lower()\nreturn clean",
    "walkthrough": "\"  ADA  \" first becomes \"ADA\", then \"ada\". Both operations were taught separately; here they work together.",
    "task": "Add the lowercase conversion before returning clean.",
    "starter": "def clean_answer(text):\n    clean = text.strip()\n    return clean",
    "answer": "def clean_answer(text):\n    clean = text.strip()\n    clean = clean.lower()\n    return clean",
    "hint": "\"  ADA  \" first becomes \"ADA\", then \"ada\". Both operations were taught separately; here they work together.",
    "tests": [
      {
        "label": "Spaces and capitals handled",
        "expr": "clean_answer(\"  ADA  \") == \"ada\""
      },
      {
        "label": "Empty answer is safe",
        "expr": "clean_answer(\"   \") == \"\""
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 151,
    "group": "Projects · Functions",
    "title": "Quiz · compare cleaned answers",
    "intro": "",
    "body": "<p>Reuse clean_answer on both the learner’s answer and the expected answer. Compare the returned strings with ==.</p>",
    "example": "actual = clean_answer(answer)\nwanted = clean_answer(expected)\nreturn actual == wanted",
    "walkthrough": "\"  ADA \" and \"Ada\" both become \"ada\", so they compare equal. Cleaning only one side could give an unfair mismatch.",
    "task": "Complete is_correct with return actual == wanted.",
    "starter": "def clean_answer(text):\n    clean = text.strip()\n    return clean.lower()\n\ndef is_correct(answer, expected):\n    actual = clean_answer(answer)\n    wanted = clean_answer(expected)\n",
    "answer": "def clean_answer(text):\n    clean = text.strip()\n    return clean.lower()\n\ndef is_correct(answer, expected):\n    actual = clean_answer(answer)\n    wanted = clean_answer(expected)\n    return actual == wanted",
    "hint": "\"  ADA \" and \"Ada\" both become \"ada\", so they compare equal. Cleaning only one side could give an unfair mismatch.",
    "tests": [
      {
        "label": "Matching answers",
        "expr": "is_correct(\" ADA \",\"Ada\") is True"
      },
      {
        "label": "Different answers",
        "expr": "is_correct(\"Lin\",\"Ada\") is False"
      },
      {
        "label": "Clean both sides",
        "expr": "is_correct(\"ada\",\" ADA \") is True"
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 152,
    "group": "Projects · Functions",
    "title": "Contact book · find a contact",
    "intro": "",
    "body": "<p>A contact book can be a dictionary with names as keys and phone numbers as values. Wrap a lookup in a function so it is reusable.</p>",
    "example": "contacts = {\"Ada\": \"123\"}\nphone = contacts.get(\"Ada\", \"Not found\")",
    "walkthrough": "An existing name returns its phone number. A missing name returns the provided message.",
    "task": "Define lookup to return the phone for name, or Not found if absent.",
    "starter": "def lookup(contacts, name):\n    pass",
    "answer": "def lookup(contacts, name):\n    return contacts.get(name, \"Not found\")",
    "hint": "An existing name returns its phone number. A missing name returns the provided message.",
    "tests": [
      {
        "label": "Known name",
        "expr": "lookup({\"Ada\":\"123\"},\"Ada\") == \"123\""
      },
      {
        "label": "Unknown name",
        "expr": "lookup({\"Ada\":\"123\"},\"Lin\") == \"Not found\""
      },
      {
        "label": "Empty book",
        "expr": "lookup({},\"Ada\") == \"Not found\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 153,
    "group": "Projects · Functions",
    "title": "Contact book · add a contact",
    "intro": "",
    "body": "<p>Use dictionary assignment inside a function to add or replace one phone number. This version deliberately updates the caller’s dictionary.</p>",
    "example": "contacts[name] = phone\nreturn contacts",
    "walkthrough": "If name already exists, its phone changes. Otherwise a new entry is added. Returning contacts makes the updated book easy to inspect.",
    "task": "Complete save_contact by assigning phone at key name, then returning contacts.",
    "starter": "def save_contact(contacts, name, phone):\n    pass",
    "answer": "def save_contact(contacts, name, phone):\n    contacts[name] = phone\n    return contacts",
    "hint": "If name already exists, its phone changes. Otherwise a new entry is added. Returning contacts makes the updated book easy to inspect.",
    "tests": [
      {
        "label": "Add an entry",
        "expr": "save_contact({},\"Ada\",\"123\") == {\"Ada\":\"123\"}"
      },
      {
        "label": "Replace a phone and preserve others",
        "expr": "save_contact({\"Ada\":\"123\",\"Lin\":\"789\"},\"Ada\",\"456\") == {\"Ada\":\"456\",\"Lin\":\"789\"}"
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 154,
    "group": "Projects · Functions",
    "title": "Expenses · total the amounts",
    "intro": "",
    "body": "<p>Each expense is a dictionary. Loop through the list, read the amount from each dictionary, and add it to a running total.</p>",
    "example": "expenses = [{\"amount\": 5}, {\"amount\": 8}]\ntotal = 0\nfor expense in expenses:\n    total += expense[\"amount\"]",
    "walkthrough": "The first dictionary adds 5. The second adds 8. total finishes at 13.",
    "task": "Add each expense’s amount to total inside total_expenses.",
    "starter": "def total_expenses(expenses):\n    total = 0\n    for expense in expenses:\n        pass\n    return total",
    "answer": "def total_expenses(expenses):\n    total = 0\n    for expense in expenses:\n        total += expense[\"amount\"]\n    return total",
    "hint": "The first dictionary adds 5. The second adds 8. total finishes at 13.",
    "tests": [
      {
        "label": "Sum records",
        "expr": "total_expenses([{\"amount\":5},{\"amount\":8}]) == 13"
      },
      {
        "label": "Empty list",
        "expr": "total_expenses([]) == 0"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 155,
    "group": "Projects · Functions",
    "title": "Expenses · filter a category",
    "intro": "",
    "body": "<p>Add an if condition inside the loop so only matching categories contribute to the total. The total still starts before the loop.</p>",
    "example": "if expense[\"category\"] == category:\n    total += expense[\"amount\"]",
    "walkthrough": "For category \"food\", a food expense contributes its amount. A travel expense is skipped.",
    "task": "Complete the matching-category block by adding the expense amount.",
    "starter": "def total_for(expenses, category):\n    total = 0\n    for expense in expenses:\n        if expense[\"category\"] == category:\n            pass\n    return total",
    "answer": "def total_for(expenses, category):\n    total = 0\n    for expense in expenses:\n        if expense[\"category\"] == category:\n            total += expense[\"amount\"]\n    return total",
    "hint": "For category \"food\", a food expense contributes its amount. A travel expense is skipped.",
    "tests": [
      {
        "label": "Only matching amounts",
        "expr": "total_for([{\"category\":\"food\",\"amount\":5},{\"category\":\"travel\",\"amount\":20},{\"category\":\"food\",\"amount\":3}],\"food\") == 8"
      },
      {
        "label": "No matches",
        "expr": "total_for([{\"category\":\"food\",\"amount\":5}],\"travel\") == 0"
      },
      {
        "label": "Empty list",
        "expr": "total_for([],\"food\") == 0"
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 156,
    "group": "Projects · Functions",
    "title": "Adventure · move north",
    "intro": "",
    "body": "<p>Represent the current room as text. A move function returns the new room. When a direction is unavailable, return the current room unchanged.</p>",
    "example": "if room == \"hall\" and direction == \"north\":\n    return \"library\"\nreturn room",
    "walkthrough": "North from the hall reaches the library. Any other move leaves the player where they are.",
    "task": "Implement this one route in move.",
    "starter": "def move(room, direction):\n    return room",
    "answer": "def move(room, direction):\n    if room == \"hall\" and direction == \"north\":\n        return \"library\"\n    return room",
    "hint": "North from the hall reaches the library. Any other move leaves the player where they are.",
    "tests": [
      {
        "label": "Go north",
        "expr": "move(\"hall\",\"north\") == \"library\""
      },
      {
        "label": "Blocked direction",
        "expr": "move(\"hall\",\"west\") == \"hall\""
      },
      {
        "label": "No teleport from other rooms",
        "expr": "move(\"garden\",\"north\") == \"garden\""
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 157,
    "group": "Projects · Functions",
    "title": "Adventure · return south",
    "intro": "",
    "body": "<p>Extend the movement rules with the reverse route. Keep the fallback return so unrecognised moves remain safe.</p>",
    "example": "if room == \"library\" and direction == \"south\":\n    return \"hall\"",
    "walkthrough": "This rule belongs after the north rule and before return room. Only the matching route changes the room.",
    "task": "Add the south route from library to hall.",
    "starter": "def move(room, direction):\n    if room == \"hall\" and direction == \"north\":\n        return \"library\"\n    return room",
    "answer": "def move(room, direction):\n    if room == \"hall\" and direction == \"north\":\n        return \"library\"\n    if room == \"library\" and direction == \"south\":\n        return \"hall\"\n    return room",
    "hint": "This rule belongs after the north rule and before return room. Only the matching route changes the room.",
    "tests": [
      {
        "label": "Return south",
        "expr": "move(\"library\",\"south\") == \"hall\""
      },
      {
        "label": "North still works",
        "expr": "move(\"hall\",\"north\") == \"library\""
      },
      {
        "label": "Unavailable route",
        "expr": "move(\"library\",\"east\") == \"library\""
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 158,
    "group": "Projects · Functions",
    "title": "Rock-paper-scissors · a draw",
    "intro": "",
    "body": "<p>Start with the simplest game result: identical choices are a draw. Leave other outcomes as pending until the next step.</p>",
    "example": "if player == computer:\n    return \"draw\"\nreturn \"pending\"",
    "walkthrough": "This rule works for rock against rock, paper against paper, and scissors against scissors.",
    "task": "Finish winner so equal choices return draw and unequal choices return pending.",
    "starter": "def winner(player, computer):\n    return \"pending\"",
    "answer": "def winner(player, computer):\n    if player == computer:\n        return \"draw\"\n    return \"pending\"",
    "hint": "This rule works for rock against rock, paper against paper, and scissors against scissors.",
    "tests": [
      {
        "label": "All three draws",
        "expr": "all(winner(x,x) == \"draw\" for x in [\"rock\",\"paper\",\"scissors\"])"
      },
      {
        "label": "Other rounds remain pending",
        "expr": "winner(\"rock\",\"paper\") == \"pending\""
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 159,
    "group": "Projects · Functions",
    "title": "Rock-paper-scissors · a winner",
    "intro": "",
    "body": "<p>The starter handles draws and two winning combinations. Add the remaining rule: scissors beats paper. For valid choices, every other non-draw is a loss.</p>",
    "example": "if player == \"scissors\" and computer == \"paper\":\n    return \"win\"",
    "walkthrough": "Both parts must match this exact winning combination. Add the rule before the final return \"lose\".",
    "task": "Add the scissors-versus-paper winning branch.",
    "starter": "def winner(player, computer):\n    if player == computer:\n        return \"draw\"\n    if player == \"rock\" and computer == \"scissors\":\n        return \"win\"\n    if player == \"paper\" and computer == \"rock\":\n        return \"win\"\n    return \"lose\"",
    "answer": "def winner(player, computer):\n    if player == computer:\n        return \"draw\"\n    if player == \"rock\" and computer == \"scissors\":\n        return \"win\"\n    if player == \"paper\" and computer == \"rock\":\n        return \"win\"\n    if player == \"scissors\" and computer == \"paper\":\n        return \"win\"\n    return \"lose\"",
    "hint": "Both parts must match this exact winning combination. Add the rule before the final return \"lose\".",
    "tests": [
      {
        "label": "All winning combinations",
        "expr": "all(winner(a,b) == \"win\" for a,b in [(\"rock\",\"scissors\"),(\"paper\",\"rock\"),(\"scissors\",\"paper\")])"
      },
      {
        "label": "All losing combinations",
        "expr": "all(winner(a,b) == \"lose\" for a,b in [(\"rock\",\"paper\"),(\"paper\",\"scissors\"),(\"scissors\",\"rock\")])"
      },
      {
        "label": "Draws still work",
        "expr": "all(winner(x,x) == \"draw\" for x in [\"rock\",\"paper\",\"scissors\"])"
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 160,
    "group": "Errors",
    "title": "Fix a syntax error",
    "intro": "",
    "body": "<p>A syntax error means Python cannot read the structure of your code. Check the indicated line for missing punctuation or an unfinished quote or parenthesis. Python must parse the file before running it.</p>",
    "example": "print(\"Hello\")",
    "walkthrough": "The opening parenthesis and quote each have a matching closer. The starter is missing the final parenthesis.",
    "task": "Fix the missing parenthesis so the program prints Hello.",
    "starter": "print(\"Hello\"",
    "answer": "print(\"Hello\")",
    "hint": "The opening parenthesis and quote each have a matching closer. The starter is missing the final parenthesis.",
    "tests": [
      {
        "label": "Valid code prints Hello",
        "expr": "output == 'Hello\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 161,
    "group": "Errors",
    "title": "Read a runtime error",
    "intro": "",
    "body": "<p>A runtime error happens while valid Python code is running. Read the last line of the error for its type and message, then find the line in practice.py mentioned above it.</p>",
    "example": "NameError: name 'nmae' is not defined",
    "walkthrough": "This message says Python could not find a variable named nmae. Compare that spelling with the earlier assignment to name.",
    "task": "Fix the misspelled variable in the print line.",
    "starter": "name = \"Ada\"\nprint(nmae)",
    "answer": "name = \"Ada\"\nprint(name)",
    "hint": "This message says Python could not find a variable named nmae. Compare that spelling with the earlier assignment to name.",
    "tests": [
      {
        "label": "The defined name prints",
        "expr": "output == 'Ada\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 162,
    "group": "Errors",
    "title": "Find a logic error",
    "intro": "",
    "body": "<p>A logic error means code runs but produces the wrong result. Compare the actual result with a small example whose correct answer you know.</p>",
    "example": "numbers = [10, 20]\nexpected_average = 15",
    "walkthrough": "An average divides the total by the number of items. Dividing by a fixed number only works accidentally for lists of that length.",
    "task": "Fix average so it divides by len(numbers), not 3. Assume the list is nonempty.",
    "starter": "def average(numbers):\n    return sum(numbers) / 3",
    "answer": "def average(numbers):\n    return sum(numbers) / len(numbers)",
    "hint": "An average divides the total by the number of items. Dividing by a fixed number only works accidentally for lists of that length.",
    "tests": [
      {
        "label": "Two values",
        "expr": "average([10,20]) == 15"
      },
      {
        "label": "One value",
        "expr": "average([8]) == 8"
      },
      {
        "label": "Three values",
        "expr": "average([3,6,9]) == 6"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 163,
    "group": "Errors",
    "title": "Inspect an intermediate value",
    "intro": "",
    "body": "<p>When a result surprises you, print the value just before the calculation. This helps locate where the program first differs from what you expected.</p>",
    "example": "raw = \"12\"\nprint(type(raw))\ncount = int(raw)",
    "walkthrough": "The type check shows that raw is text. That explains why adding a number to it would fail until it is converted.",
    "task": "Convert raw to an integer in count before adding 1. Keep the existing print line.",
    "starter": "raw = \"12\"\ncount = raw\nprint(count + 1)",
    "answer": "raw = \"12\"\ncount = int(raw)\nprint(count + 1)",
    "hint": "The type check shows that raw is text. That explains why adding a number to it would fail until it is converted.",
    "tests": [
      {
        "label": "Output is 13",
        "expr": "output == '13\\n'"
      },
      {
        "label": "The stored count is numeric",
        "expr": "type(count) is int"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 164,
    "group": "Errors",
    "title": "Catch one expected error",
    "intro": "",
    "body": "<p><code>try</code> attempts a block. An <code>except ValueError</code> block runs if that block raises ValueError, such as converting \"cat\" with int().</p>",
    "example": "try:\n    number = int(\"cat\")\nexcept ValueError:\n    number = None",
    "walkthrough": "The conversion fails, so Python jumps to the matching except block. number becomes None instead of the program stopping.",
    "task": "In safe_int, catch ValueError and return None for invalid numeric text.",
    "starter": "def safe_int(text):\n    try:\n        return int(text)\n    except ValueError:\n        return 0",
    "answer": "def safe_int(text):\n    try:\n        return int(text)\n    except ValueError:\n        return None",
    "hint": "The conversion fails, so Python jumps to the matching except block. number becomes None instead of the program stopping.",
    "tests": [
      {
        "label": "Valid text converts",
        "expr": "safe_int(\"12\") == 12"
      },
      {
        "label": "Invalid text handled",
        "expr": "safe_int(\"cat\") is None"
      },
      {
        "label": "Empty text handled",
        "expr": "safe_int(\"\") is None"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 165,
    "group": "Errors",
    "title": "Catch the specific exception",
    "intro": "",
    "body": "<p>Different failures have different exception types. int(\"cat\") raises ValueError; int(None) raises TypeError. A tuple after except can list the specific exceptions you expect.</p>",
    "example": "except (ValueError, TypeError):\n    return None",
    "walkthrough": "This catches those two kinds of conversion failure. It does not hide every possible error in the program.",
    "task": "Update safe_int to catch TypeError as well as ValueError.",
    "starter": "def safe_int(text):\n    try:\n        return int(text)\n    except ValueError:\n        return None",
    "answer": "def safe_int(text):\n    try:\n        return int(text)\n    except (ValueError, TypeError):\n        return None",
    "hint": "This catches those two kinds of conversion failure. It does not hide every possible error in the program.",
    "tests": [
      {
        "label": "Valid text",
        "expr": "safe_int(\"12\") == 12"
      },
      {
        "label": "Invalid text",
        "expr": "safe_int(\"cat\") is None"
      },
      {
        "label": "None handled",
        "expr": "safe_int(None) is None"
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 166,
    "group": "Errors",
    "title": "Run else after a successful try",
    "intro": "",
    "body": "<p>An <code>else</code> block on try runs only when the try block finishes without an exception. It keeps success-only work separate from error handling.</p>",
    "example": "try:\n    number = int(text)\nexcept ValueError:\n    result = None\nelse:\n    result = number + 1",
    "walkthrough": "Valid text reaches else and gets increased by 1. Invalid text reaches except and sets result to None.",
    "task": "Complete the else block by returning number + 1.",
    "starter": "def next_number(text):\n    try:\n        number = int(text)\n    except ValueError:\n        return None\n    else:\n        pass",
    "answer": "def next_number(text):\n    try:\n        number = int(text)\n    except ValueError:\n        return None\n    else:\n        return number + 1",
    "hint": "Valid text reaches else and gets increased by 1. Invalid text reaches except and sets result to None.",
    "tests": [
      {
        "label": "Success path",
        "expr": "next_number(\"4\") == 5"
      },
      {
        "label": "Failure path",
        "expr": "next_number(\"cat\") is None"
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 167,
    "group": "Errors",
    "title": "Run cleanup with finally",
    "intro": "",
    "body": "<p><code>finally</code> runs when execution leaves the try statement, whether the operation succeeded or a handled exception occurred. It is useful for cleanup.</p>",
    "example": "try:\n    number = int(text)\nexcept ValueError:\n    number = None\nfinally:\n    finished = True",
    "walkthrough": "finished becomes True in either path. A return inside finally can override other results, so this example only sets a flag.",
    "task": "Set finished to True inside finally.",
    "starter": "text = \"cat\"\nfinished = False\ntry:\n    number = int(text)\nexcept ValueError:\n    number = None\nfinally:\n    pass",
    "answer": "text = \"cat\"\nfinished = False\ntry:\n    number = int(text)\nexcept ValueError:\n    number = None\nfinally:\n    finished = True",
    "hint": "finished becomes True in either path. A return inside finally can override other results, so this example only sets a flag.",
    "tests": [
      {
        "label": "Cleanup after failure",
        "expr": "finished is True and number is None"
      },
      {
        "label": "Cleanup after success",
        "expr": "rerun({\"text\":\"8\"})[\"finished\"] is True and rerun({\"text\":\"8\"})[\"number\"] == 8"
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 168,
    "group": "Errors",
    "title": "Raise an error deliberately",
    "intro": "",
    "body": "<p><code>raise</code> reports an invalid situation to the caller. Give the exception a clear message explaining what input is acceptable.</p>",
    "example": "if age < 0:\n    raise ValueError(\"Age cannot be negative\")",
    "walkthrough": "This rejects a negative age instead of silently accepting an impossible value. The caller may catch the ValueError.",
    "task": "Add the raise statement inside the negative-age branch.",
    "starter": "def validate_age(age):\n    if age < 0:\n        pass\n    return age",
    "answer": "def validate_age(age):\n    if age < 0:\n        raise ValueError(\"Age cannot be negative\")\n    return age",
    "hint": "This rejects a negative age instead of silently accepting an impossible value. The caller may catch the ValueError.",
    "tests": [
      {
        "label": "Nonnegative ages work",
        "expr": "validate_age(0) == 0 and validate_age(25) == 25"
      },
      {
        "label": "Negative age raises ValueError",
        "expr": "raises_error(validate_age, -1, ValueError)"
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 169,
    "group": "Modules",
    "title": "Import a module",
    "intro": "",
    "body": "<p>A module groups reusable Python code. The standard library contains modules supplied with Python. <code>import math</code> makes math available by its name.</p>",
    "example": "import math\nroot = math.sqrt(9)",
    "walkthrough": "math.sqrt calls the square-root function inside math. root is 3.0. The dot selects a member of the imported module.",
    "task": "Import math and store the square root of 25 in root.",
    "starter": "import math\n",
    "answer": "import math\nroot = math.sqrt(25)",
    "hint": "math.sqrt calls the square-root function inside math. root is 3.0. The dot selects a member of the imported module.",
    "tests": [
      {
        "label": "Square root is 5",
        "expr": "root == 5"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 170,
    "group": "Modules",
    "title": "Import one function",
    "intro": "",
    "body": "<p><code>from module import name</code> brings a specific name into your code. You can then call it without the module prefix.</p>",
    "example": "from math import sqrt\nroot = sqrt(9)",
    "walkthrough": "sqrt is now available directly. Both import styles can calculate square roots; their spelling at the call is different.",
    "task": "Import sqrt from math, then use sqrt(36) to set root.",
    "starter": "from math import sqrt\n",
    "answer": "from math import sqrt\nroot = sqrt(36)",
    "hint": "sqrt is now available directly. Both import styles can calculate square roots; their spelling at the call is different.",
    "tests": [
      {
        "label": "Root is 6",
        "expr": "root == 6"
      },
      {
        "label": "sqrt imported directly",
        "expr": "\"sqrt\" in user_globals"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 171,
    "group": "Modules",
    "title": "Give an import an alias",
    "intro": "",
    "body": "<p><code>as</code> gives an imported module or name a different local name. Choose an alias that keeps the code readable.</p>",
    "example": "import math as maths\nroot = maths.sqrt(9)",
    "walkthrough": "maths refers to the math module. The alias changes the spelling in your code, not what the module does.",
    "task": "Import math as maths and use it to calculate the square root of 49 into root.",
    "starter": "import math as maths\n",
    "answer": "import math as maths\nroot = maths.sqrt(49)",
    "hint": "maths refers to the math module. The alias changes the spelling in your code, not what the module does.",
    "tests": [
      {
        "label": "Alias works",
        "expr": "root == 7 and maths.__name__ == \"math\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 172,
    "group": "Modules",
    "title": "Random whole numbers",
    "intro": "",
    "body": "<p><code>random.randint(a, b)</code> chooses a whole number from a through b, including both ends. The result may differ each run.</p>",
    "example": "import random\nroll = random.randint(1, 6)",
    "walkthrough": "roll can be 1, 2, 3, 4, 5, or 6. There is no single expected roll; a check should verify the permitted range.",
    "task": "Create roll using random.randint(1, 6).",
    "starter": "import random\n",
    "answer": "import random\nroll = random.randint(1, 6)",
    "hint": "roll can be 1, 2, 3, 4, 5, or 6. There is no single expected roll; a check should verify the permitted range.",
    "tests": [
      {
        "label": "Whole number within range",
        "expr": "type(roll) is int and 1 <= roll <= 6"
      },
      {
        "label": "Call randint",
        "expr": "calls(\"random.randint\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 173,
    "group": "Modules",
    "title": "Represent a date",
    "intro": "",
    "body": "<p><code>datetime.date</code> represents a calendar date. Give it a year, month, and day in that order. It validates that the date exists.</p>",
    "example": "import datetime\nday = datetime.date(2026, 9, 1)",
    "walkthrough": "day represents September 1, 2026. Printing it shows 2026-09-01. This fixed example does not depend on today’s date.",
    "task": "Create day for January 15, 2027 using datetime.date.",
    "starter": "import datetime\n",
    "answer": "import datetime\nday = datetime.date(2027, 1, 15)",
    "hint": "day represents September 1, 2026. Printing it shows 2026-09-01. This fixed example does not depend on today’s date.",
    "tests": [
      {
        "label": "Correct calendar date",
        "expr": "day == __import__(\"datetime\").date(2027,1,15)"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 174,
    "group": "Projects · Random choices",
    "title": "Password practice · one character",
    "intro": "",
    "body": "<p>For password-like randomness, use <code>secrets</code> instead of random. <code>secrets.choice(text)</code> chooses one character from the supplied text. This small alphabet is for learning, not a password policy.</p>",
    "example": "import secrets\nalphabet = \"abcXYZ123!\"\ncharacter = secrets.choice(alphabet)",
    "walkthrough": "character is one of the characters in alphabet. Different runs may produce the same character; randomness does not promise a change every time.",
    "task": "Choose one character from alphabet into character using secrets.choice.",
    "starter": "import secrets\nalphabet = \"abcXYZ123!\"\n",
    "answer": "import secrets\nalphabet = \"abcXYZ123!\"\ncharacter = secrets.choice(alphabet)",
    "hint": "character is one of the characters in alphabet. Different runs may produce the same character; randomness does not promise a change every time.",
    "tests": [
      {
        "label": "One permitted character",
        "expr": "type(character) is str and len(character) == 1 and character in alphabet"
      },
      {
        "label": "Use secrets.choice",
        "expr": "calls(\"secrets.choice\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 175,
    "group": "Projects · Random choices",
    "title": "Password practice · build a string",
    "intro": "",
    "body": "<p>Repeat the one-character choice and append it to a string. Start with empty text and return the finished string after the loop.</p>",
    "example": "password = \"\"\nfor index in range(length):\n    password += secrets.choice(alphabet)\nreturn password",
    "walkthrough": "Each turn adds one character. A length of 4 means four turns and a four-character result. The return belongs outside the loop.",
    "task": "Complete the loop by adding one chosen character to password.",
    "starter": "import secrets\n\ndef make_password(length):\n    alphabet = \"abcXYZ123!\"\n    password = \"\"\n    for index in range(length):\n        pass\n    return password",
    "answer": "import secrets\n\ndef make_password(length):\n    alphabet = \"abcXYZ123!\"\n    password = \"\"\n    for index in range(length):\n        password += secrets.choice(alphabet)\n    return password",
    "hint": "Each turn adds one character. A length of 4 means four turns and a four-character result. The return belongs outside the loop.",
    "tests": [
      {
        "label": "Requested length",
        "expr": "len(make_password(12)) == 12 and len(make_password(4)) == 4"
      },
      {
        "label": "Permitted characters",
        "expr": "all(c in \"abcXYZ123!\" for c in make_password(20))"
      },
      {
        "label": "Zero length",
        "expr": "make_password(0) == \"\""
      },
      {
        "label": "Use secrets.choice",
        "expr": "calls(\"secrets.choice\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 176,
    "group": "Files",
    "title": "Write a text file",
    "intro": "",
    "body": "<p><code>open()</code> opens a file. Mode <code>\"w\"</code> writes a new file or replaces an existing file’s contents. <code>with</code> closes it when the block ends. This site uses a temporary virtual filesystem, not files on your computer.</p>",
    "example": "with open(\"notes.txt\", \"w\", encoding=\"utf-8\") as file:\n    file.write(\"Hello\")",
    "walkthrough": "file is the name for the opened file inside the block. write stores text. utf-8 specifies how text is encoded. Every Run starts fresh; files do not persist between runs here.",
    "task": "Write the text Learn Python into notes.txt.",
    "starter": "with open(\"notes.txt\", \"w\", encoding=\"utf-8\") as file:\n    pass",
    "answer": "with open(\"notes.txt\", \"w\", encoding=\"utf-8\") as file:\n    file.write(\"Learn Python\")",
    "hint": "file is the name for the opened file inside the block. write stores text. utf-8 specifies how text is encoded. Every Run starts fresh; files do not persist between runs here.",
    "tests": [
      {
        "label": "File contains the exact text",
        "expr": "read_text(\"notes.txt\") == \"Learn Python\""
      },
      {
        "label": "Use with",
        "expr": "has_node(\"With\")"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 177,
    "group": "Files",
    "title": "Read a text file",
    "intro": "",
    "body": "<p>Mode <code>\"r\"</code> opens an existing file for reading. <code>.read()</code> returns its contents as text. The starter writes the file first because this site resets its virtual files every run.</p>",
    "example": "with open(\"notes.txt\", \"r\", encoding=\"utf-8\") as file:\n    contents = file.read()",
    "walkthrough": "read gives you the stored text. Save that return value if you want to use it after the file closes.",
    "task": "Finish the reading block by storing file.read() in contents.",
    "starter": "with open(\"notes.txt\", \"w\", encoding=\"utf-8\") as file:\n    file.write(\"Learn Python\")\n\nwith open(\"notes.txt\", \"r\", encoding=\"utf-8\") as file:\n    pass",
    "answer": "with open(\"notes.txt\", \"w\", encoding=\"utf-8\") as file:\n    file.write(\"Learn Python\")\n\nwith open(\"notes.txt\", \"r\", encoding=\"utf-8\") as file:\n    contents = file.read()",
    "hint": "read gives you the stored text. Save that return value if you want to use it after the file closes.",
    "tests": [
      {
        "label": "Read the text into contents",
        "expr": "contents == \"Learn Python\""
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 178,
    "group": "Files",
    "title": "Append instead of replacing",
    "intro": "",
    "body": "<p>Mode <code>\"a\"</code> adds text at the end. write() does not add a newline automatically; include <code>\\n</code> when you want one.</p>",
    "example": "with open(\"notes.txt\", \"a\", encoding=\"utf-8\") as file:\n    file.write(\"Practice\\n\")",
    "walkthrough": "This appends a line without erasing earlier content. Mode \"w\" would erase the old text first.",
    "task": "Append Practice followed by a newline to the supplied file.",
    "starter": "with open(\"notes.txt\", \"w\", encoding=\"utf-8\") as file:\n    file.write(\"Learn\\n\")\n\nwith open(\"notes.txt\", \"a\", encoding=\"utf-8\") as file:\n    pass",
    "answer": "with open(\"notes.txt\", \"w\", encoding=\"utf-8\") as file:\n    file.write(\"Learn\\n\")\n\nwith open(\"notes.txt\", \"a\", encoding=\"utf-8\") as file:\n    file.write(\"Practice\\n\")",
    "hint": "This appends a line without erasing earlier content. Mode \"w\" would erase the old text first.",
    "tests": [
      {
        "label": "Keep the old line and add the new one",
        "expr": "read_text(\"notes.txt\") == 'Learn\\nPractice\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 179,
    "group": "Files",
    "title": "Understand file paths",
    "intro": "",
    "body": "<p>A path tells Python where a file is. A relative path starts from the program’s current working directory. An absolute path starts from the filesystem root. A parent folder must exist before you open a file inside it.</p>",
    "example": "notes.txt\nlessons/notes.txt",
    "walkthrough": "The first relative path looks in the working directory. The second looks inside its lessons subfolder. On this site, both refer to virtual files created during the current run.",
    "task": "What does lessons/notes.txt refer to?",
    "starter": "",
    "answer": "",
    "hint": "The first relative path looks in the working directory. The second looks inside its lessons subfolder. On this site, both refer to virtual files created during the current run.",
    "tests": [],
    "inputs": "",
    "kind": "question",
    "options": [
      "notes.txt inside a lessons subfolder",
      "A file named lessons on the desktop",
      "A file automatically downloaded to your computer"
    ],
    "correct": 0,
    "exampleRunnable": false
  },
  {
    "id": 180,
    "group": "Files",
    "title": "Handle a missing file",
    "intro": "",
    "body": "<p>Opening a missing file in read mode raises <code>FileNotFoundError</code>. Catch that specific exception when missing content is an expected situation.</p>",
    "example": "try:\n    with open(\"missing.txt\", \"r\", encoding=\"utf-8\") as file:\n        contents = file.read()\nexcept FileNotFoundError:\n    contents = \"\"",
    "walkthrough": "If the file is absent, the program uses empty text. Permission errors and unrelated failures are not hidden by this handler.",
    "task": "Complete the except block by setting contents to empty text.",
    "starter": "try:\n    with open(\"missing.txt\", \"r\", encoding=\"utf-8\") as file:\n        contents = file.read()\nexcept FileNotFoundError:\n    pass",
    "answer": "try:\n    with open(\"missing.txt\", \"r\", encoding=\"utf-8\") as file:\n        contents = file.read()\nexcept FileNotFoundError:\n    contents = \"\"",
    "hint": "If the file is absent, the program uses empty text. Permission errors and unrelated failures are not hidden by this handler.",
    "tests": [
      {
        "label": "Use an empty fallback",
        "expr": "contents == \"\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 181,
    "group": "OOP",
    "title": "Define a class",
    "intro": "",
    "body": "<p>A class describes a kind of object you can create. An object is a particular instance of that class. Start with an empty class before adding data or behaviour.</p>",
    "example": "class Student:\n    pass\n\nstudent = Student()",
    "walkthrough": "The class statement defines Student. Student() creates one Student object. student refers to that object. pass keeps the empty class body valid.",
    "task": "Create a Student object named student using the supplied class.",
    "starter": "class Student:\n    pass\n\n",
    "answer": "class Student:\n    pass\n\nstudent = Student()",
    "hint": "The class statement defines Student. Student() creates one Student object. student refers to that object. pass keeps the empty class body valid.",
    "tests": [
      {
        "label": "student is a Student instance",
        "expr": "isinstance(student,Student)"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 182,
    "group": "OOP",
    "title": "Store an attribute",
    "intro": "",
    "body": "<p>An attribute is a value attached to an object. Use a dot to name it. Each object can hold its own values.</p>",
    "example": "class Student:\n    pass\n\nstudent = Student()\nstudent.name = \"Ada\"",
    "walkthrough": "student.name stores the text Ada on this particular Student object. Read it later with the same dot notation.",
    "task": "Give student a name attribute containing Lin.",
    "starter": "class Student:\n    pass\n\nstudent = Student()\n",
    "answer": "class Student:\n    pass\n\nstudent = Student()\nstudent.name = \"Lin\"",
    "hint": "student.name stores the text Ada on this particular Student object. Read it later with the same dot notation.",
    "tests": [
      {
        "label": "Object stores its name",
        "expr": "isinstance(student,Student) and student.name == \"Lin\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 183,
    "group": "OOP",
    "title": "Initialize an object",
    "intro": "",
    "body": "<p><code>__init__</code> runs automatically when a new instance is created. It is a method: a function defined inside a class. Its first parameter, conventionally called <code>self</code>, receives the new instance.</p>",
    "example": "class Student:\n    def __init__(self):\n        self.name = \"Ada\"\n\nstudent = Student()",
    "walkthrough": "Student() creates the object and calls __init__. self.name stores Ada on that object. Python supplies self; you do not pass it in this call.",
    "task": "Set self.name to Lin inside __init__.",
    "starter": "class Student:\n    def __init__(self):\n        pass\n\nstudent = Student()",
    "answer": "class Student:\n    def __init__(self):\n        self.name = \"Lin\"\n\nstudent = Student()",
    "hint": "Student() creates the object and calls __init__. self.name stores Ada on that object. Python supplies self; you do not pass it in this call.",
    "tests": [
      {
        "label": "Initialization stores Lin",
        "expr": "student.name == \"Lin\""
      },
      {
        "label": "New instances also initialize",
        "expr": "Student().name == \"Lin\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 184,
    "group": "OOP",
    "title": "Pass data to a new object",
    "intro": "",
    "body": "<p>Add a parameter after self to let each new object receive different data. Store it as an attribute if the object needs to remember it after initialization.</p>",
    "example": "class Student:\n    def __init__(self, name):\n        self.name = name\n\nstudent = Student(\"Ada\")",
    "walkthrough": "The argument Ada becomes the local parameter name. self.name = name copies that value onto the instance. self.name and name are different places.",
    "task": "Complete __init__ by storing name in self.name.",
    "starter": "class Student:\n    def __init__(self, name):\n        pass",
    "answer": "class Student:\n    def __init__(self, name):\n        self.name = name",
    "hint": "The argument Ada becomes the local parameter name. self.name = name copies that value onto the instance. self.name and name are different places.",
    "tests": [
      {
        "label": "Ada instance",
        "expr": "Student(\"Ada\").name == \"Ada\""
      },
      {
        "label": "Lin instance",
        "expr": "Student(\"Lin\").name == \"Lin\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 185,
    "group": "OOP",
    "title": "Give an object a method",
    "intro": "",
    "body": "<p>A method can use the object’s attributes through self. Call it through an instance; Python supplies that instance as self.</p>",
    "example": "class Student:\n    def __init__(self, name):\n        self.name = name\n\n    def greeting(self):\n        return f\"Hello, {self.name}\"",
    "walkthrough": "Student(\"Ada\").greeting() returns Hello, Ada. The method reads the name belonging to the object on which it was called.",
    "task": "Complete greeting with the return statement shown in the example.",
    "starter": "class Student:\n    def __init__(self, name):\n        self.name = name\n\n    def greeting(self):\n        pass",
    "answer": "class Student:\n    def __init__(self, name):\n        self.name = name\n\n    def greeting(self):\n        return f\"Hello, {self.name}\"",
    "hint": "Student(\"Ada\").greeting() returns Hello, Ada. The method reads the name belonging to the object on which it was called.",
    "tests": [
      {
        "label": "Uses Ada’s name",
        "expr": "Student(\"Ada\").greeting() == \"Hello, Ada\""
      },
      {
        "label": "Uses Lin’s name",
        "expr": "Student(\"Lin\").greeting() == \"Hello, Lin\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 186,
    "group": "OOP",
    "title": "Change an object’s state",
    "intro": "",
    "body": "<p>A method can update an attribute so the object remembers a change. This is useful when several operations act on the same stored data.</p>",
    "example": "def increment(self):\n    self.value += 1\n    return self.value",
    "walkthrough": "The counter starts at 0. The first increment call changes it to 1; the second changes it to 2. The value survives between calls.",
    "task": "Add self.value += 1 before the return in increment.",
    "starter": "class Counter:\n    def __init__(self):\n        self.value = 0\n\n    def increment(self):\n        return self.value",
    "answer": "class Counter:\n    def __init__(self):\n        self.value = 0\n\n    def increment(self):\n        self.value += 1\n        return self.value",
    "hint": "The counter starts at 0. The first increment call changes it to 1; the second changes it to 2. The value survives between calls.",
    "tests": [
      {
        "label": "Two calls remember state",
        "expr": "counter_repeats(Counter)"
      },
      {
        "label": "Instances stay separate",
        "expr": "counter_independent(Counter)"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 187,
    "group": "OOP",
    "title": "Each instance has its own data",
    "intro": "",
    "body": "<p>Create a list on self inside __init__ when each instance needs a separate list. Putting one shared list on the class would let changes appear across instances.</p>",
    "example": "class Student:\n    def __init__(self, name):\n        self.name = name\n        self.grades = []",
    "walkthrough": "Creating Ada and Lin runs __init__ twice. Each run creates a fresh empty list for that student.",
    "task": "Add self.grades = [] inside __init__.",
    "starter": "class Student:\n    def __init__(self, name):\n        self.name = name",
    "answer": "class Student:\n    def __init__(self, name):\n        self.name = name\n        self.grades = []",
    "hint": "Creating Ada and Lin runs __init__ twice. Each run creates a fresh empty list for that student.",
    "tests": [
      {
        "label": "Starts empty",
        "expr": "Student(\"Ada\").grades == []"
      },
      {
        "label": "Separate lists",
        "expr": "Student(\"Ada\").grades is not Student(\"Lin\").grades"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 188,
    "group": "OOP",
    "title": "Inherit a method",
    "intro": "",
    "body": "<p>Inheritance lets one class reuse behaviour from another. Put the parent class in parentheses after the new class name.</p>",
    "example": "class Animal:\n    def speak(self):\n        return \"Hello\"\n\nclass Cat(Animal):\n    pass",
    "walkthrough": "Cat has no new method yet, but Cat().speak() can use the method inherited from Animal.",
    "task": "Make Cat inherit from Animal by adding Animal inside its class parentheses.",
    "starter": "class Animal:\n    def speak(self):\n        return \"Hello\"\n\nclass Cat:\n    pass",
    "answer": "class Animal:\n    def speak(self):\n        return \"Hello\"\n\nclass Cat(Animal):\n    pass",
    "hint": "Cat has no new method yet, but Cat().speak() can use the method inherited from Animal.",
    "tests": [
      {
        "label": "Cat is an Animal subclass",
        "expr": "issubclass(Cat,Animal)"
      },
      {
        "label": "Inherited method works",
        "expr": "Cat().speak() == \"Hello\""
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 189,
    "group": "OOP",
    "title": "Override inherited behaviour",
    "intro": "",
    "body": "<p>A child class can define a method with the same name as a parent method. Calls on child instances use the child’s version.</p>",
    "example": "class Cat(Animal):\n    def speak(self):\n        return \"Meow\"",
    "walkthrough": "The parent can still say Hello, while the child supplies its own response. Only Cat’s behaviour changes.",
    "task": "Give Cat a speak method that returns Meow.",
    "starter": "class Animal:\n    def speak(self):\n        return \"Hello\"\n\nclass Cat(Animal):\n    pass",
    "answer": "class Animal:\n    def speak(self):\n        return \"Hello\"\n\nclass Cat(Animal):\n    def speak(self):\n        return \"Meow\"",
    "hint": "The parent can still say Hello, while the child supplies its own response. Only Cat’s behaviour changes.",
    "tests": [
      {
        "label": "Child overrides",
        "expr": "Cat().speak() == \"Meow\""
      },
      {
        "label": "Parent unchanged",
        "expr": "Animal().speak() == \"Hello\""
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 190,
    "group": "OOP",
    "title": "Keep updates behind methods",
    "intro": "",
    "body": "<p>Encapsulation means grouping data with the operations that manage it. A leading underscore, such as _value, marks an internal attribute by convention. It does not make access impossible or provide security.</p>",
    "example": "class Counter:\n    def __init__(self):\n        self._value = 0\n\n    def read(self):\n        return self._value",
    "walkthrough": "Call read() to obtain the value through the class’s intended interface. Other code should respect the underscore convention.",
    "task": "Complete read so it returns self._value.",
    "starter": "class Counter:\n    def __init__(self):\n        self._value = 0\n\n    def read(self):\n        pass",
    "answer": "class Counter:\n    def __init__(self):\n        self._value = 0\n\n    def read(self):\n        return self._value",
    "hint": "Call read() to obtain the value through the class’s intended interface. Other code should respect the underscore convention.",
    "tests": [
      {
        "label": "Read the stored value",
        "expr": "Counter().read() == 0"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 191,
    "group": "Projects · Grade manager",
    "title": "Grade manager · add one grade",
    "intro": "",
    "body": "<p>Combine an instance attribute with the list method append(). The method should update only the student it was called on.</p>",
    "example": "def add_grade(self, score):\n    self.grades.append(score)",
    "walkthrough": "self.grades selects this student’s list. append adds the supplied score to it. No return value is needed for this update.",
    "task": "Complete add_grade by appending score to self.grades.",
    "starter": "class Student:\n    def __init__(self, name):\n        self.name = name\n        self.grades = []\n\n    def add_grade(self, score):\n        pass",
    "answer": "class Student:\n    def __init__(self, name):\n        self.name = name\n        self.grades = []\n\n    def add_grade(self, score):\n        self.grades.append(score)",
    "hint": "self.grades selects this student’s list. append adds the supplied score to it. No return value is needed for this update.",
    "tests": [
      {
        "label": "Add two grades",
        "expr": "grades_added(Student)"
      },
      {
        "label": "Keep students separate",
        "expr": "grades_separate(Student)"
      }
    ],
    "inputs": "",
    "exampleRunnable": true
  },
  {
    "id": 192,
    "group": "Projects · Grade manager",
    "title": "Grade manager · average grades",
    "intro": "",
    "body": "<p>Compute an average from the grades belonging to this student. First handle an empty list so the calculation never divides by zero.</p>",
    "example": "if len(self.grades) == 0:\n    return 0\nreturn sum(self.grades) / len(self.grades)",
    "walkthrough": "No grades returns 0 for this project. Otherwise, add the grades and divide by their count. The method reads data without changing it.",
    "task": "Complete average with the sum divided by the number of grades.",
    "starter": "class Student:\n    def __init__(self, name):\n        self.name = name\n        self.grades = []\n\n    def add_grade(self, score):\n        self.grades.append(score)\n\n    def average(self):\n        if len(self.grades) == 0:\n            return 0\n        return 0",
    "answer": "class Student:\n    def __init__(self, name):\n        self.name = name\n        self.grades = []\n\n    def add_grade(self, score):\n        self.grades.append(score)\n\n    def average(self):\n        if len(self.grades) == 0:\n            return 0\n        return sum(self.grades) / len(self.grades)",
    "hint": "No grades returns 0 for this project. Otherwise, add the grades and divide by their count. The method reads data without changing it.",
    "tests": [
      {
        "label": "Average of 80 and 100",
        "expr": "student_average(Student)"
      },
      {
        "label": "Empty and independent students",
        "expr": "student_independent(Student)"
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  },
  {
    "id": 193,
    "group": "Projects · Grade manager",
    "title": "Grade manager · show a report",
    "intro": "",
    "body": "<p>The class below is complete. Use its public methods to create one student, add two scores, and display the average. This is a final integration step using only earlier operations.</p>",
    "example": "student = Student(\"Ada\")\nstudent.add_grade(80)\nstudent.add_grade(100)\nprint(student.average())",
    "walkthrough": "The two method calls store 80 and 100 on this student. average returns 90.0, which print displays.",
    "task": "The object and grades are already prepared. Add a print call that shows student.average().",
    "starter": "class Student:\n    def __init__(self, name):\n        self.name = name\n        self.grades = []\n\n    def add_grade(self, score):\n        self.grades.append(score)\n\n    def average(self):\n        if len(self.grades) == 0:\n            return 0\n        return sum(self.grades) / len(self.grades)\n\nstudent = Student(\"Ada\")\nstudent.add_grade(80)\nstudent.add_grade(100)\n",
    "answer": "class Student:\n    def __init__(self, name):\n        self.name = name\n        self.grades = []\n\n    def add_grade(self, score):\n        self.grades.append(score)\n\n    def average(self):\n        if len(self.grades) == 0:\n            return 0\n        return sum(self.grades) / len(self.grades)\n\nstudent = Student(\"Ada\")\nstudent.add_grade(80)\nstudent.add_grade(100)\nprint(student.average())",
    "hint": "The two method calls store 80 and 100 on this student. average returns 90.0, which print displays.",
    "tests": [
      {
        "label": "Display the average",
        "expr": "output == '90.0\\n'"
      }
    ],
    "inputs": "",
    "exampleRunnable": false
  }
];
