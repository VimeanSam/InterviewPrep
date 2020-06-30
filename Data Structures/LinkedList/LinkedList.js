let LinkedNode = require('./LinkedNode');
module.exports = class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    //add data to front of the list (head)
    push_front(data){
        //create new Node
        let newNode = new LinkedNode(data);
        //moved pointer of newNode to the head
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    //add node to the tail of the list
    push_back(data){
        //create new Node
        let newNode = new LinkedNode(data);
        //if the list is empty point the head to the newly created node;
        if(this.head == null){
            this.head = newNode;
        }else{
            let tail = this.head;
            //loop to the last element
            while(tail.next != null){
                tail = tail.next;
            }
            //point the tail to the newly created node above
            tail.next = newNode;
        }
        this.size++;
    }
    //insert element at an index
    insertAt(data, index){
        //check for valid index
        if(index < 0 || (index > 0 && index > this.size)){
            console.log("Index out of bounds: "+index)
            return false;
        }else{
            //create new node
            let newNode = new LinkedNode(data);
            //will be used to keep track of the index
            let count = 0;
            //current pointer set to the head
            let curr = this.head;
            //keep a copy of current pointer
            let prev;
            //if index is 0, append node to the head;
            if(index == 0){
                newNode.next = this.head;
                this.head = newNode;
                this.size++;
                return;
            }
            //iterate to the index for the new node to be inserted
            while(count < index){
                prev = curr;
                curr = curr.next;
                count++;
            }
            //next data of the new node is equal to the rest of the element
            newNode.next = curr;
            //join the previous elements to the current elements
            prev.next = newNode;
            this.size++;
        }
    }
    //remove data from the specified index and return the element
    removeFrom(index){
        //check for valid index
        if(index < 0 || (index > 0 && index >= this.size)){
            console.log("Index out of bounds: "+index)
            return false;
        }else{
            //if index is 0, remove the head
            let curr = this.head;
            let prev = curr;
            let count = 0;
            if(index == 0){
                this.head = curr.next;
            }else{
                //iterate to the index
                while(count < index){
                    prev = curr;
                    curr = curr.next;
                    count++;
                }
                prev.next = curr.next;
            }
            this.size--;
            return curr.data;
        }
    }
    //remove the head
    pop_front(){
        let curr = this.head;
        this.head = curr.next;
        this.size--;
    }
    //remove last item
    pop_back(){
        let curr = this.head;
        //exit if empty list
        if(curr === null){
            return;
        }
        if(curr.next == null){
            this.head = null;
            this.size--;
            return;
        }
        while(curr.next.next != null){
            curr = curr.next;
        }
        curr.next = null;
        this.size--;
    }
    //find the item in the list and retrieve its index if not, return -1
    find(data){
        let curr = this.head;
        let index = 0;
        console.log(curr.data)
        //if the head is the data
        if(curr.data == data){
            return index;
        }else{        
            //traverse through the list until the data is found
            while(curr != null){
                if(curr.data == data){
                    return index;
                }
                curr = curr.next;
                index++;
            }
        }
        return -1;
    }
    //retrieve the size of the list
    getLength(){
        return this.size;
    }
    //check if the list is empty
    empty(){
        return this.size == 0;
    }
    //output the list
    printList(){
        let curr = this.head;
        let linked = "Head ";
        while(curr != null){
            linked += curr.data + "->"
            curr = curr.next;
        }
        console.log(linked +" NULL Tail");
    }
}