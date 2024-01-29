(function() {
  console.log("hello");
})();

// iife -> immediately invoked function expression

/**
* Breakdown of iife
*/

// 1. function expression
// (function() {
//     console.log("hello");
// })

// 2. invoke the function
// by adding (); at the end of the function expression

// 3. immediately invoked
// (function() {
//     console.log("hello");
// })();







// function process() {
//     let list = [];
//     for(let i = 0; i < 10; i++) {
//         list.push(i); // add to the end of the array
//     }

//     return list;
// }

// const processedData = process();
// console.log(processedData);

const pd = (function() {
  let list = [];
  for(let i = 0; i < 10; i++) {
      list.push(i); // add to the end of the array
  }
  return list;
})()
console.log(pd);