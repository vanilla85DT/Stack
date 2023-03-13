"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
//เช็คเครื่องหมาย
function cherkOperator(c) {
    // return mathOperatorRegex.test(c) //อันไหนก้ได้ รีเทรินได้เหมือนกัน
    var mathOperatorRegex = /[+\-*/^]/;
    return mathOperatorRegex.test(c);
}
//เช็คและรีเทรินค่าของเครื่องหมาย
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
//แปลงนิพจน์ Infix to Postfix เพื่อหาผลลัพธ์ส่งออก
function infixToPostfix(str) {
    var output = "";
    var ch;
    var myStack = new Stack_1.Stack();
    for (var i = 0; i < str.length; i++) {
        ch = str.charAt(i);
        if (ch == "(") {
            myStack.push(ch);
        }
        else if (cherkOperator(ch)) {
            while (!myStack.isEmpty() && cherkPriority(ch) <= cherkPriority(myStack.peek())) {
                output = output + myStack.pop();
            }
            myStack.push(ch);
        }
        else if (ch == ")") {
            while (!myStack.isEmpty() && myStack.peek() != "(") {
                output = output + myStack.pop();
            }
            myStack.pop();
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
//คำนวนผลลัพธืของนิพจน์ของ Postfix ที่ได้จากการแปลง
function evaluatePostfix(expression) {
    var myevaluate = []; //ตัวแปร Array ของ number กำหนดให้มีค่าเริ่มต้นเป็น empty array 
    //ไม่มีสมาชิกอยู่ภายใน array ในตอนที่ประกาศตัวแปรนี้
    for (var i = 0; i < expression.length; i++) {
        var char = expression[i];
        if (!isNaN(parseInt(char))) { //ตรวจสอบว่า char เป็นตัวเลขหรือไม่จะใช้ฟังก์ชัน parseInt()แปลง char เป็นเลข //ใช้ฟังก์ชั่น isnan ตรวจสอบว่าเป็นตัวเลขตัวเลขหรือไม่
            myevaluate.push(parseInt(char));
        }
        else { //! ตัวแปรไม่เป็น null หรือ undefined 
            //ไม่ว่าจะเป็นไปได้เนื่องจากว่าโค้ดนี้ไม่ได้ตรวจสอบว่ามีข้อมูลใน array ที่ pop ออกมาอยู่จริง
            //ถ้าไม่ใส่ non-null จะแจ้ง error เนื่องจากจำเป็นต้องมีการตรวจสอบว่าค่านี้ไม่เป็น null หรือ undefined ก่อนใช้งาน 
            //กรณีนี้เขียนไว้ให้แน่ใจว่าข้อมูลใน array ไม่ว่างเพราะมีการตรวจสอบ
            //non-null assertion operator เป็นการยืนยันว่าข้อมูลนั้นไม่เป็น null หรือ undefined อยู่แล้ว ทำให้โปรแกรมสามารถทำงานได้โดยไม่เกิด error จาก TypeScript compiler
            var operand2 = myevaluate.pop();
            var operand1 = myevaluate.pop();
            if (char == "+") {
                myevaluate.push(operand1 + operand2);
            }
            else if (char == "-") {
                myevaluate.push(operand1 - operand2);
            }
            else if (char == "*") {
                myevaluate.push(operand1 * operand2);
            }
            else if (char == "/") {
                myevaluate.push(operand1 / operand2);
            }
            else if (char == "^") {
                myevaluate.push(Math.pow(operand1, operand2));
            }
        }
    }
    return myevaluate.pop();
}
//การใช้งานการแปลงค่าส่งออก
var expression = "((1+2)*3/3+5^2)/7";
console.info("----- expression -----");
console.info("Expression : ".concat(expression));
//${expression} คือตัวแปรที่มีค่าเป็น "((1+2)*3/3+5^2)/7" 
//โดยข้อความนี้ใช้เพื่อแสดงสิ่งที่ทำงานอยู่ในขณะนั้น 
//ในกรณีนี้คือแสดง Expression ที่กำลังถูกแปลงจาก infix เป็น postfix ด้วยฟังก์ชัน infixToPostfix() 
//โดยใช้ข้อมูลจากตัวแปร expression
var postfix = infixToPostfix(expression);
console.info("----- postfix -----");
console.info("Postfix : ".concat(postfix)); //Template string in grave`` and ${ตัวแปร}
//แสดงค่า Postfix ที่ถูกแปลงออกมา
var result = evaluatePostfix(postfix);
console.info("----- result -----");
console.info("Result : ".concat(expression, " = ").concat(result));
//แสดงผลลัพธ์ของนิพจน์ ที่คำนวนได้จาก evaluate function
