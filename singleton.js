// let instance;
// let counter = 0;

// class Counter {
//    constructor() {
//       if (instance) {
//          throw new Error('You can create only one instance!')
//       }
//       instance = this
//    }

//    getInstance() {
//       return this
//    }

//    getCount() {
//       return counter
//    }

//    increment() {
//       return ++counter
//    }

//    decrement() {
//       return --counter
//    }
// }

// const counter1 = Object.freeze(new Counter());



// let instance
// let counter

// class Counter {
//    constructor() {
//       if (instance) {
//          throw new Error('error')
//       }

//       instance = this
//    }

//    getInstance() {
//       return this
//    }

//    getCount() {
//       return counter
//    }

//    increment() {
//       return ++counter
//    }

//    decrement() {
//       return --counter
//    }
// }

// const counter1 = Object.freeze(new Counter())


let instance
let counter

class Counter {
   constructor() {
      if (instance) {
         throw new Error('error')
      }
      instance = this
   }

   getInstance() {
      return instance
   }

   getCounter() {
      return counter
   }

   increment() {
      ++counter
   }

   decrement() {
      --counter
   }
}

const count = Object.freeze(new Counter())