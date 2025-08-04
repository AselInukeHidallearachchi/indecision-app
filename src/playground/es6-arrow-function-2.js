// const user = {
//   name: "Asel",
//   sayHi: () => {
//     console.log(this.name); // ❌ undefined
//   },
// };
// user.sayHi();

// const user = {
//   name: "Asel",
//   sayHi() {
//     console.log(this.name); // ✅ "Asel"
//   },
// };
// user.sayHi();

// const multiplier = {
//   multiplyBy: 2,
//   multiply(numbers) {
//     return numbers.map((number) => number * this.multiplyBy);
//   },
// };

// console.log(multiplier.multiply([1, 2, 3]));

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply: function (numbers) {
    return numbers.map((number) => number * this.multiplyBy);
  },
};
console.log(multiplier.multiply());
