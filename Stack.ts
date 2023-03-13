import { ArrayLinearList } from "./ArrayLinearlist";
export class Stack{
     myList : ArrayLinearList //ประกาศตัวแปรฟพพฟั ว่าคือ มายลิส
     constructor(){
          this.myList = new ArrayLinearList()
     }
     isEmpty() : boolean{
          return this.myList.isEmpty()
     }
     push(theElement : string){
          this.myList.addLast(theElement)
     }
     pop() : string{
          if(this.myList.isEmpty()){
               return ''
          }
          else{
               return this.myList.removeData(this.myList.sizeList() - 1) 
          }
     }
     peek() : string{
          return this.myList.getData(this.myList.sizeList() - 1)
     }
     display(){
          //loop แบบลด
          for(let i = this.myList.sizeList() - 1; i >= 0; i--){
               console.info(this.myList.getData(i))
          }
     }
}