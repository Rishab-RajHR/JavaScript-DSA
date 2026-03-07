let stack = [];

function push(val){
    stack.push(val);
}

function pop(){
    if(stack.length === 0) {
        console.log("Stack is Empty");
        return null;
    }
    return stack.pop();
}

function peek(){
     if(stack.length === 0) {
         console.log("Stack is Empty");
         return null;
     }
     return stack[stack.length-1];
}

function isEmpty(){
    return stack.length === 0;
}

push(10);
push(20);
push(30);

console.log(peek()); // 30

pop();
console.log(stack);
