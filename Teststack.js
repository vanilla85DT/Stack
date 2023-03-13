"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
function infixToPostfix(str) {
    var output = "";
    var ch;
    var myStack = new Stack_1.Stack();
    for (var i = 0; i < str.length; i++) {
        ch = str.charAt(i);
        if (ch == "(") {
            myStack.push(ch);
            console.info("----- List of Stack 1 -----");
            myStack.display();
        }
        else if (cherkOperator(ch)) {
            while (!myStack.isEmpty() && cherkPriority(ch) <= cherkPriority(myStack.peek())) {
                output = output + myStack.pop();
            }
            myStack.push(ch);
            console.info("----- List of Stack 2 -----");
            myStack.display();
        }
        else if (ch == ")") {
            while (!myStack.isEmpty() && myStack.peek() != "(") {
                output = output + myStack.pop();
            }
            myStack.pop();
            console.info("----- List of Stack 3 -----");
            myStack.display();
        }
        else {
            output = output + ch;
        }
    }
    while (!myStack.isEmpty()) {
        output = output + myStack.pop();
    }
    return output;
}
function cherkOperator(c) {
    var mathOperatorRegex = /[+\-*/^]/; //เช็คว่ามีเครื่องหมายพวกนี้มั้ย operator ส่วน operan คือ อักษรหรือเลข
    // return mathOperatorRegex.test(c) //or อันไหนก้ได้ รีเทรินได้เหมือนกัน
    if (mathOperatorRegex.test(c))
        return true;
    else
        return false;
}
function cherkPriority(c) {
    if (c == "+" || c == "-") {
        return 1;
    }
    else if (c == "*" || c == "/") {
        return 2;
    }
    else if (c == "^") {
        return 3;
    }
    else {
        return 0;
    }
}
// console.info(cherkOperator("+"))
// console.info(cherkOperator("A"))
// console.info(cherkOperator("1"))
var str;
str = "((A+B)*C/D+E^F)/G";
console.info(infixToPostfix(str));
// let str : string = "AC"
// console.info(str.charAt(0))
// console.info(str.length)
// let myStack : Stack = new Stack()
// or
// let myStack : Stack
// myStack = new Stack()
// console.info(myStack.isEmpty())
// console.info("----- add data -----")
// myStack.push('a')
// myStack.push('b')
// myStack.push('c')
// myStack.push('d')
// console.info('----- peek -----')
// console.info("top of stack = " + myStack.peek())
// console.info("----- display -----")
// myStack.display()
