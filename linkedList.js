

class linkedList {
    constructor(head = null){
        this.head = head;
    };
    append(value){
        if (!this.head){
            this.head = new node(value);
            return this;
             
        }
        let last = this.getLast();
        last.next = new node(value);
        return last;
    };

    getLast() {
        if (!this.head) return null;
        let lastNode = this.head;
       
            while (lastNode.next !== null) {
                lastNode = lastNode.next;
            }
        
        return lastNode;
    };
    prepend(value){ 
        if (!this.head){
        this.head = new node(value);
        return this;
    } 
    let previusHead = this.head;
    this.head = new node(value);
    this.head.next = previusHead;

    };
    size(){
       
        let count = 0;
        let node = this.head
        while(node !== null){
            count++
            node = node.next
        }
        return count
    };
    head(){
        return this.head
    }
};


class node {
    constructor(value) {
       this.value = value;
       this.next = null;
    }

  
}
const list = new linkedList();
console.log(list.size())
console.log(list.append(1))
console.log(list.size())
console.log(list.append(2))

console.log(list)

console.log(list.prepend(0))
console.log(list)

