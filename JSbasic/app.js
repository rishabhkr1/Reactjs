//const userData = {
//  firstName: "Rishabh",
//lastName: "Kumar"
//}

//console.log(userData.firstName);

//function app() {
//   function fun1() {
//      console.log("Hello from fun1");
// }

// sum();

//function sum() {
//   console.log("Hello from sum");
// }
//    console.log("Hello from app");
//}
//app();

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

const nums = [1, 2, 3, 4]
const squares = nums.map(function(num) {
    return num ** 2;
})

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

const square = nums.map(num => num ** 2);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

const cubes = nums.map(num => {
    return num ** 3;
})
console.log(squares);
console.log(cubes);
console.log(square);