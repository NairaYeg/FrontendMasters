// const one = () => Promise.resolve('One!')

// async function myFunc() {
//   console.log('In function!')
//   const res = await one()
//   console.log(res);
// }

// console.log('Before function');
// myFunc();

// console.log('After function');

// const num = 4;

// const promise = new Promise((resolve, reject)=>{
//   if (num < 5) {
//     resolve('resolve');
//   };

//   reject('reject');
// });

// promise.then((values)=>console.log(value))

// let arr = [4, 5, 7, 0];

// function fn(str) {
//  let i = 0;
//  let arr = [4, 5, 45, 100];
//   function inner() {
//     let elem = str[i];
//     i+= 1;
//     console.log(arr);
//     return elem;
//   };

//   return inner;
// };

// const it = fn('yoob');

// console.log('it', it);

// console.log(it());
// console.log(it());
// console.log(it());
// console.log(it());

// function sumFunc(arr) {
//   // YOUR CODE HERE
//   let i = 0;
//   let sum = 0;

//     while(i<arr.length) {
//       (function(){
//         let element = arr[i];
//         sum += element;
//         i+=1;
//         return sum;
//   })()
// };
//   return sum;
// }

// // Uncomment the lines below to test your work
// const array = [1, 2, 3, 4];
// console.log(sumFunc(array)); // -> should log 10

function nextIterator(arr) {
  // YOUR CODE HERE
  let i = 0;
  return {
    next: () => {
      let element = arr[i];
      i += 1;

      return element;
    },
  };
}

// Uncomment the lines below to test your work
// const array3 = [1, 2, 3];
// const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3

// function sumArray(arr) {
//
//   let sum = 0;
//   const iteratorWithNext = nextIterator(arr);
//   let element = iteratorWithNext.next();

//    while(element) {
//      element = iteratorWithNext.next();
//      if(element) sum += element;
//    };
//   // use your nextIterator function
//    return sum;
// }

// // Uncomment the lines below to test your work
// const array4 = [1, 2, 3, 4];

// console.log(sumArray(array4));

function setIterator(set) {
  return set.values();
}

// Uncomment the lines below to test your work
const mySet = new Set("hey");
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'
