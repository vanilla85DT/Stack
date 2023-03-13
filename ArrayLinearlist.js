"use strict";
exports.__esModule = true;
exports.ArrayLinearList = void 0;
var ArrayLinearList = /** @class */ (function () {
    function ArrayLinearList() {
        this.size = 0; //ตัวระบุว่าเป็นค่าของdata mem
        this.element = [];
    }
    ArrayLinearList.prototype.isEmpty = function () {
        if (this.size == 0)
            return true;
        else
            return false;
    };
    ArrayLinearList.prototype.sizeList = function () {
        return this.size;
    };
    ArrayLinearList.prototype.getData = function (index) {
        if (index >= 0 && index < this.size) { // let outofdata : string // outofdata = this.element[index]
            return this.element[index];
        }
        else
            return index + " = error can not find letters";
    };
    ArrayLinearList.prototype.indexOf = function (theElement) {
        for (var i = 0; i < this.size; i++)
            if (theElement == this.element[i])
                return i;
        return -1;
    };
    ArrayLinearList.prototype.removeData = function (index) {
        if (index >= 0 && index < this.size) {
            var dataRemove = void 0;
            dataRemove = this.element[index];
            for (var i = index + 1; i < this.size; i++) {
                this.element[i - 1] = this.element[i];
            }
            this.element[this.size - 1] = ""; //ลดจำนวนขนาดของ size
            this.size--; //size ก้ต้องลดลงตามการ remove
            return dataRemove;
        }
        else
            return index + " = error index out of bounds";
    };
    ArrayLinearList.prototype.addData = function (index, theElement) {
        if (index >= 0 && index <= this.size) { //ไว้เช็คindexต้องไม่น้อยกว่า0ไม่ต่ำกว่าsize
            for (var i = this.size - 1; i >= index; i--) {
                this.element[i + 1] = this.element[i];
            }
            this.element[index] = theElement;
            this.size++;
        }
    };
    ArrayLinearList.prototype.addLast = function (theElement) {
        this.element[this.size] = theElement;
        //this.size = this.size + 1 //same this.size++ 
        this.size++;
    };
    ArrayLinearList.prototype.displayData = function () {
        for (var i = 0; i < this.size; i++)
            console.info(this.element[i]);
    };
    return ArrayLinearList;
}());
exports.ArrayLinearList = ArrayLinearList;
// //Call class ArrayLinearList
// let myList : ArrayLinearList = new ArrayLinearList() //เพื่อเรียกใช้ constructor mylist เป็น object ของ Arraylist
// console.info(myList.isEmpty())
// console.info("----- get data -----")
// myList.addLast('a')
// myList.addLast('b')
// myList.addLast('c')
// myList.addLast('d')
// myList.addLast('e')
// myList.addLast('f')
// myList.displayData()
// console.info("size of list = " + myList.sizeList())
// console.info("----- find data -----") // let index : number // index = myList.indexOf('c')
// console.info(myList.indexOf('c'))
// console.info("----- find letter -----")
// console.info(myList.getData(6))
// //console.info("find letter : " + myList.getData(3))
// console.info("----- remove data -----")
// console.info("Data of remove = " + myList.removeData(3))
// myList.displayData()
// console.info("size of list = " + myList.sizeList())
// console.info("----- add data -----")
// myList.addData(4,'y')
// myList.displayData()
// console.info("size of list = " + myList.sizeList())
// // console.info("----- find letter -----")
// // console.info(myList.getData(1))
