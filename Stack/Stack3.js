class Stack {
   constructor() {
      this.items = [];
   }

   push(value){
      this.items.push(value)
   }   

   pop(){
      if(this.isEmpty()){
          console.log("Stack is empty");
          return null;
      }
      return this.items.pop();
   }

   peek(){
      if(this.isEmpty()){
          console.log("Stack is empty");
          return null;
      }
      return this.items[this.items.length-1];
   }

   isEmpty(){
      return this.items.length === 0;
   }

   print(){
      console.log(this.items);
   }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());  // 30

stack.pop();
stack.print();