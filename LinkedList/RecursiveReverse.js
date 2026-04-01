
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

     reverse() {
         let prev = null;
         let current = this.head;

         while(current) {
           let next = current.next;
           current.next = prev;
           prev = current;
           current = next;
         }
         this.head = prev;
     }

     recSol(node = this.head){
        if(!node || !node.next) {
            this.head = node;
            return node;
        }
        let newHead = this.recSol(node.next);

        node.next.next = node;
        node.next = null;

        return newHead;
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

list.append(10);
list.append(20);
list.append(30);

list.print();

// list.reverse();
list.recSol();
list.print();