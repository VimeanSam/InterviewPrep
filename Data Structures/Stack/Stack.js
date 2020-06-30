module.exports = class Stack{
    constructor(){
        this.stack = [];
    }
    //adds element to the stack
    push(item){
        this.stack.push(item);
    }
    //remove and return element from the top of the stack
    pop(){
        if(this.stack.length == 0){
            console.log("Stack is empty");
            return false;
        }
        let tail = this.stack[this.stack.length-1];
        this.stack.splice(this.stack.length-1, 1);
        return tail;
    }
    //retrieve the top of the stack without removing it
    peek(){
        return this.stack[this.stack.length-1];
    }
    //check if stack is empty
    isEmpty(){
        return this.stack.length == 0;
    }
    //get size of the stack
    getSize(){
        return this.stack.length;
    }
    //print the contents of the stack
    printStack(){
        let stackTrace = "Top {";
        for(let i = this.stack.length-1; i >= 0; i--){
            stackTrace += this.stack[i]+"|";
        }
        console.log(stackTrace+"} Bottom");
    }
}