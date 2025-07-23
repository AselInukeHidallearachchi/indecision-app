if (true) {
  var firstName = "Andrew";
}
console.log(firstName); // ✅ 'Andrew' (var leaks out of block)

if (true) {
  let lastName = "Mead";
}
console.log(lastName); // ❌ ReferenceError
