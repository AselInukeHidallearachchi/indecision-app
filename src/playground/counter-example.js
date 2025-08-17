

// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>{count}</button>
//     </div>
//   );
// }

// export default Counter;


// function test(){
//   if(true){
//     var x = 1 ; 
//     let y = 2;
//     const z = 3;
//   }
//   console.log
// }

// test();

// let count = 0;
// const addOne = () => {
//   count++;
//   console.log("addOne");
//   renderCounterApp();
// };

// const minusOne = () => {
//   console.log("minusOne");
//   count--;
//   renderCounterApp();
// };

// const reset = () => {
//   console.log("reset");
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();