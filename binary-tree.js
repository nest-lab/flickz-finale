class Node{
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null; 
  }
}

class BinaryTree{
  constructor(){
    this.root = null;
  }
  push(val){
    var root = this.root;
    if(!root){
      this.root = new Node(val);
      return;
    }
    var currentNode = root;
    var newNode = new Node(val);
    while(currentNode){
      if(val < currentNode.value){
        if(!currentNode.left){
          currentNode.left = newNode;
          break;
        }else{
          currentNode = currentNode.left;
        }
      }else{
        if(!currentNode.right){
          currentNode.right = newNode;
          break;
        }else{
          currentNode = currentNode.right;
        }
      }
    }
  }
}

const bst = new BinaryTree(5);
bst.push(2);
bst.push(3);
bst.push(4);
bst.push(7);

