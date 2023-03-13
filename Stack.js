"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var ArrayLinearlist_1 = require("./ArrayLinearlist");
var Stack = /** @class */ (function () {
    function Stack() {
        this.myList = new ArrayLinearlist_1.ArrayLinearList();
    }
    Stack.prototype.isEmpty = function () {
        return this.myList.isEmpty();
    };
    Stack.prototype.push = function (theElement) {
        this.myList.addLast(theElement);
    };
    Stack.prototype.pop = function () {
        if (this.myList.isEmpty()) {
            return '';
        }
        else {
            return this.myList.removeData(this.myList.sizeList() - 1);
        }
    };
    Stack.prototype.peek = function () {
        return this.myList.getData(this.myList.sizeList() - 1);
    };
    Stack.prototype.display = function () {
        //loop แบบลด
        for (var i = this.myList.sizeList() - 1; i >= 0; i--) {
            console.info(this.myList.getData(i));
        }
    };
    return Stack;
}());
exports.Stack = Stack;
