/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */
function Node(val) {
  this.value = val;
  this.next = null;
}
function kthToLastNode(k, head) {
  if(!head || k <= 0) return undefined

  //iterate over entire node list to get length;
  let len = 0;
  let node = head;
  while(node) {
    len += 1
    node = node.next
  }
  if(k > len) {
    return undefined
  }

  //iterate over entire node list AGAIN, stopping at length - k;
  let start = head;
  let stop = len - k;
  while(stop) {
    start = start.next
    stop--
  }
  return start.value
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Snake {
  constructor(n){
    this.size = n;
    this.board = Array(n).fill().map(()=>Array(n).fill(0));
    this.direction = {
      dx: 1,
      dy: 0
    };   
    this.apple = {
      ax: randomNumber(0, n - 1),
      ay: randomNumber(0, n - 1)
    };
    this.start = {
      sx: randomNumber(0, n - 1),
      sy: randomNumber(0, n - 1)
    };
    this.snake = new listSnake(
      this.start.sx,
      this.start.sy
    );  
    this.init(n);
  }
  keydown(e){
    if(e.key === 'ArrowLeft') {
      this.direction.dx = -1;
      this.direction.dy = 0;
    }
    if(e.key === 'ArrowRight') {
      this.direction.dx = 1;
      this.direction.dy = 0;
    }
    if(e.key === 'ArrowUp') {
      this.direction.dx = 0;
      this.direction.dy = -1;
    }
    if(e.key === 'ArrowDown') {
      this.direction.dx = 0;
      this.direction.dy = 1;
    }
  }
  init(n){
    const {sx, sy} = this.start;
    const {ax, ay} = this.apple;
    this.board[sy][sx] = 1;
    this.board[ay][ax] = 3;
  }
  //TODO: write function to get random empty space
  move() {
    const {dy, dx} = this.direction;
    const {y, x} = this.snake.head;
    const my = dy + y
    const mx = dx + x
    const curr = this.board[y][x];
    const next = this.board[my][mx];

    const node = new Node(mx, my)
    console.log("our new node at 64", node)

    if(curr + next === 1) {
      const node = new Node(my, mx);
      this.snake.updateHead(node);
      this.snake.updateTail();
    }

    if(curr + next === 2) {
      throw 'Error'
    }

    if(curr + next === 4) {
      const node = new Node(my, mx);
      this.snake.updateHead(node);
    }
  }
}

// DLlist for snake 

// list generator
class listSnake {
  constructor(x, y) {
    this.head = new Node(x, y);
    this.tail = this.head;
  }
  updateHead(newNode){
    console.log(this.head)
    if(!this.head.next) {
      this.head = newNode;
      this.tail = newNode;
    }
    console.log(this.head)
    // node.next = this.head;
    // this.head = node;
    // this.head.previous = null;
  }
  updateTail() {
    // console.log(this)
    // if(this.head !== this.tail) {

    // }
    // this.tail = this.tail.previous;
    // this.tail.next.previous = null;
    // this.tail.next = null;
  }
}

// node class
class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.previous = null;
    this.next = null;
  }
}

const game = new Snake(12);
game.move();
// console.log(game.board)
// game.move()
// console.log(game.board)
// game.keydown({key: 'ArrowDown'})
// game.move();
// console.log(game.board)



module.exports = {Node: Node, kthToLastNode: kthToLastNode};