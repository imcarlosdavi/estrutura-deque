class Node {
    constructor(data){
      this.data = data;
      this.previousSibling = null;
      this.next = 0;
    }
  }

  class Deque {
    constructor(){
      this.right = null;
      this.left = null;
      this._size = 0;
    }

    push_right(elem){
      let node = new Node(elem)
      
      if(this.right === null){
        this.right = node;
        this.left = node;
      }else{
        this.right.previousSibling = node;
        node.next = this.right;
        this.right = node;
      }
      this._size += 1
    }

    push_left(elem){
      let node = new Node(elem)
      
      if(this.left === null){
        this.left = node;
        this.right = node;
      }else{
        this.left.previousSibling = node;
        node.next = this.left;
        this.left = node;
      }
      this._size += 1
    }

    pop_left(){
      if(this._size === 0) return "Agora o deque está vazio";

      let el = this.left.data;
      this.left = this.left.next;
      if(this.left === null){ this.left = null};
      this._size -= 1;
      return el + ', ';
    }

    pop_right(){
      if(this._size === 0) return "Agora o deque está vazio";

      let el = this.right.data;
      this.right = this.right.next;
      if(this.right === null){ this.right = null};
      this._size -= 1;
      return el + ', ';
    }

    empty(){
      if(this._size === 0) return "O deque está vazio";
      else return this._size;
    }

    read(){
      if(this._size === 0){return "Nada no Deque."}

      let l = this.left;
      let s = '<< ';
      while(l){
        s += l.data;
        l = l.next;
        if(l){s += ', '}
      }
      return s;
    }
  }

  let deck = new Deque();