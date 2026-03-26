class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
   
}

class LinkedList{
     constructor() {
        this.head = null;
     }

     insertAtBeginning(data){
        const newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;
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

list.insertAtBeginning(20);
list.insertAtBeginning(10);

list.print();