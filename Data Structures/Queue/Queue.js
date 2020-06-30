module.exports = class Queue{
    constructor(){
        this.queue = [];
    }
    //adds element to the queue
    enqueue(item){
        this.queue.push(item);
    }
    //remove and return element from the front of the queue
    dequeue(){
        if(this.queue.length == 0){
            console.log("Queue is empty");
            return false;
        }
        let front = this.queue[0];
        this.queue.splice(0, 1);
        return front;
    }
    //retrieve the front of the queue without removing it
    front(){
        return this.queue[0];
    }
    //check if queue is empty
    isEmpty(){
        return this.queue.length == 0;
    }
    //get size of the queue
    getSize(){
        return this.queue.length;
    }
    //print the contents of the queue
    printQueue(){
        let trace = "Front ";
        for(let i = 0; i < this.queue.length; i++){
            trace += this.queue[i]+"|";
        }
        console.log(trace+" Back");
    }
}