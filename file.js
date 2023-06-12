
// globals :- process, require , global, 

// console.log(process);
// console.log(require);
// console.log(global);

// module :- common js module, es6 module

const searchingFunctions = require('./searchingFile');
// console.log(searchingFunctions);

// {
//     linearSearch: [Function: linearSearch],
//     binarySearch: [Function: binarySearch]
// }

// console.log(searchingFunctions.linearSearch([1,2,4,5,6,7,78], 6));
// console.log(searchingFunctions.binarySearch([13,45,66,77,87,91], 6));


// 😶‍🌫️😶‍🌫️ // we can also use destructuring of object

const {linearSearch, binarySearch} = require('./searchingFile');
console.log(linearSearch([1,2,4,5,6,7,78], 6));

// one more way of alias 
const{binarySearch : bs} = require('./searchingFile');
console.log(bs[1,2,4,5,6,7,78], 6);