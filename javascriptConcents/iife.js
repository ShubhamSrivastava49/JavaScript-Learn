class Node {
  constructor(val,next =null){
      this.val = val;
      this.next = next

  }
}
class Stack{
    constructor(){
        this.head = null;
        this.tail =null;
        this.length =0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head =newNode;
            this.tail=newNode
          
        }
        else{
            this.tail.next =newNode;
            this.tail =newNode;
        }
        this.length++
        return this;
    }
    pop(){
        if(!this.head){
            return 'No nodes'
        }
        else{
            let current = this.head;
            let previous = current;
            while(current.next){
                previous =current;
                current =current.next;
            }
            this.tail =previous;
            this.tail.next =null;
            this.length--;
        }
    }
    shift(){
        let current = this.head;
        this.head = current.next;
        this.length--
    }
    unshift(val){
      let newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this.tail = newNode;
      }
      else{
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++
    }
    get(index){
      if(index <0 && index >this.length){return 'cannot get index out of range'};
      let count =0;
      let current = this.head
      while(count< index){
          current = current.next
          count++
      }
      return current;
    }
    //update an element with given position
    set(index,value){
        if(index <0 && index >this.length){return 'cannot set index out of range'};
        let getIndexedNode = this.get(index);
        getIndexedNode.val = value;
        this.length++
    }
    //insert an element at any given index
    insert(index,value){
      if(index ===0){
          this.unshift(value);
         return true;
        }
         if(index === this.length -1){
            this.push(value);
           return true;
        }
        let newNode = new Node(value)
        let preIndexedNode = this.get(index -1);
        let temp =preIndexedNode.next;
        preIndexedNode.next = newNode;
        newNode.next = temp
        this.length++;
   }
    //remove an element from given position
    remove(index){
        if(index ===0){
            this.shift();
           return true;
          }
           if(index === this.length -1){
              this.pop();
             return true;
          }
          let preIndexedNode = this.get(index -1);
          let removed = preIndexedNode.next;
          preIndexedNode.next = removed.next;
          this.length--;
    }
    reverse(){
        this.head = this.tail;
        this.tail = this.head;
        
    }
   printStack(){
       let arr =[];
       let current = this.head;
       while(current){
           arr.push(current.val)
           current = current.next;
       }
       console.log(arr)
    }
    
}
var stack = new Stack();
stack.push(20);
stack.push(40);
stack.push(50);
// stack.pop();
// stack.shift();
stack.unshift(10);
//console.log(stack.get(2))
//stack.set(2,30)
stack.insert(2,30);
stack.remove(2)
stack.printStack();


