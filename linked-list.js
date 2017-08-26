class LinkedList{
  constructor(){
    this.head = null;
  }
  push(val){
    var node = {
      value: val,
      next: null
    }
    if(!this.head){
      this.head = node;
    }else{
      var current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }
}

//USE CASE: 
const Names = new LinkedList();
Names.push('Seun');
Names.push('Segun');
Names.push('Ojo');

for(var value in Names.head){
  console.log(Names.head[value]);
}

