// QUEUE   -    add() -> tail ---> tails ---> queue ---> head -> poll()
//                      n .... 4, 3, 2, 1, 0

class Element {
    constructor (value) {
        this.value = value
    }
}

class ArrayQueue {
    constructor () {
        this.queue = []
    }

    add(element) {
        //if (element instanceof Element) {
            this.queue.push(element)
        //} else {
        //   console.error('ArrayQueue accepts only Elements objects')
        //}
    }

    poll() {
        return this.queue.shift()
    }

    peek() {
        return this.queue[0]
    }

    clear () {
        return this.queue.length = 0
    }
}

// STACK   --  push() -- > head --- > stack --- > tail
//             pop() < --- head --- > stack --- > tail
//                     n .... 4, 3, 2, 1, 0

class ArrayStack {
    constructor() {
        this.stack = []
    }

    push(element) {
        this.stack.unshift(element)
    }

    pop() {
        return this.stack.shift()
    }

    peek() {
        return this.stack[0]
    }

    clear () {
        return this.stack.length = 0
    }
}

// HW1: implement the clear() method - removes all the elements
// HW2: implement the peek() method for the Queue - peeks at first element