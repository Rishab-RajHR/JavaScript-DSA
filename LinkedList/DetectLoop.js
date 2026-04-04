
class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
     constructor() {
        this.head = null;
     }

     append(data){
         let newNode = new Node(data);

         if(!this.head) {
            this.head = newNode;    
            return;  
         }

         let current = this.head;

         while(current.next) {
            current = current.next;
         }

         current.next = newNode;
     }

    // Detect Loop using Floyd's Algorithm
    detectLoop(){
       let slow = this.head;
       let fast = this.head;

       while(fast && fast.next){
          slow = slow.next;
          fast = fast.next.next;

          if(slow === fast){
              return true;
          }
       }
       return false;
    }


     print(){
        let current = this.head;
        let result = "";

        while(current) {
             result += current.data + "->";

             current  = current.next;
        }

        console.log(result + "null");
     }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);

list.print();

// list.head.next.next.next.next = list.head.next

// Create loop in the Linked List
let first = list.head;
let second = first.next;
let third = second.next;
let fourth = third.next;

fourth.next = second;

console.log(list.detectLoop())
