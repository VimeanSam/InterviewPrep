let TreeNode = require('./TreeNode');
module.exports = class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    //insert data into the tree
    insert(data){
        let newNode = new TreeNode(data);
        //if root is null, the data will be the root
        if(this.root === null){
            this.root = newNode;
        }else{
            //helper function for recursive calls for inserting node
            insertNode(this.root, newNode); 
        }
        // helper function to recurse down the tree to see where the data should be inserted
        function insertNode(rootNode, node){
            //if data is less than root, insert it to the left side
            if(node.data < rootNode.data){
                //if left of the root is null, the left node will become the newnode data
                if(rootNode.left === null){
                    rootNode.left = node;
                }else{
                    //traverse until the finding the null spot
                    insertNode(rootNode.left, node);
                }
            }else{
                //if right of the root is null, the right node will become the newnode data
                if(rootNode.right === null){
                    rootNode.right = node;
                }else{
                    //traverse until the finding the null spot
                    insertNode(rootNode.right, node);
                }
            }
        }
    }
    remove(data){
        //set copy of root
        let rootNode = this.root;
        //helper recursive function for node removal
        return removeNode(rootNode, data);
        function removeNode(rootNode, value){
            //if the data is less than the value of the root, recurse to the left subtree
            if(rootNode.data > value){
                rootNode.left = removeNode(rootNode.left, value);
                return rootNode;
                //if the data is greater than the value of root, recurse to the right subtree
            }else if(rootNode.data < value){    
                
                rootNode.right = removeNode(rootNode.right, value);
                return rootNode;
                //found the data
            }else if(rootNode.data == value){
                //removing a leaf with no children, simply assign it to null
                if(rootNode.left === null && rootNode.right === null){
                    rootNode = null;
                    return rootNode;
                }
                //removing a node with 1 right children, assign right node to the current node
                if(rootNode.left === null){
                    rootNode = rootNode.right;
                    return rootNode;
                }
                //removing a node with 1 left children, assign left node to the current node
                if(rootNode.right === null){
                    rootNode = rootNode.left;
                    return rootNode;
                }
                //removing node with 2 children, find the smallest value of the right subtree
                let minNode = getMinNode(rootNode.right);
                //assign the smallest value of right subtree to the current node
                rootNode.data = minNode.data;
                //remove the node of the smallest value of the right subtree 
                rootNode.right = removeNode(rootNode.right, minNode.data);
                return rootNode;
            }
        }
        //helper function to find the min value of the right subtree, recurse left to find it
        function getMinNode(rootNode){
            if(rootNode.left == null){
                return rootNode;
            }else{
                return getMinNode(rootNode.left);
            }
        }
    }
    //search for the node containing the target data. Returns the node if found, null if not found
    search(data){
        //assign root
        let rootNode = this.root;
        return find(rootNode, data);
        //helper function to traverse through the tree to find the data
        function find(rootNode, data){
            //search completed and no data found, return null
            if(rootNode === null){
                return null;
            }
            //if data is less than root data, recurse left
            if(rootNode.data > data){
                return find(rootNode.left, data);
            }
            //if data is greater than root data, recurse right
            if(rootNode.data < data){
                return find(rootNode.right, data);
            }
            //if found a match, return the node and its information
            if(rootNode.data == data){
                return rootNode;
            }
        }
    }

    //get the root of the tree
    getRootNode(){
        return this.root;
    }
    
    //left -> root -> right
    printInOrder(){
        let rootNode = this.root;
        inorder(rootNode);
        function inorder (rootNode) {
            if(rootNode !== null) { 
                inorder(rootNode.left); 
                console.log(rootNode.data); 
                inorder(rootNode.right); 
            } 
        } 
    }

    //root -> left -> right
    printPreOrder(){
        let rootNode = this.root;
        preorder(rootNode);
        function preorder (rootNode) {
            if(rootNode !== null) { 
                console.log(rootNode.data); 
                preorder(rootNode.left); 
                preorder(rootNode.right); 
            } 
        } 
    }

    //left -> right -> root
    printPostOrder(){
        let rootNode = this.root;
        postorder(rootNode);
        function postorder (rootNode) {
            if(rootNode !== null) { 
                postorder(rootNode.left);  
                postorder(rootNode.right); 
                console.log(rootNode.data);
            } 
        } 
    }
    //get the height of the tree
    getHeight(){
        //assign root
        let rootNode = this.root;
        return height(rootNode);
        //helper function
        function height(rootNode){
            
            if(rootNode == null){
                return 0;
            }
            //assign left and right values
            let left = height(rootNode.left);
            let right = height(rootNode.right);
            if(left > right){
                return left+1;
            }else{
                return right+1;
            }
        }
    }
}