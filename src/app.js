console.log("Hello, World!");

var firstname = "Asel";

var user = {
  name: "andrew",
  age: 26,
};

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two", "Three"],
};

function getLocation() {
  return "Sri Lanka";
}
const termplateThree = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle && app.subtitle}</p>
    <p>{getLocation()}</p>
    {app.options.length > 0 ? <p>{app.options}</p> : <p>No options</p>}
  </div>
);

let count = 0;
const addOne = () => {
  count++;
  console.log("addOne");
  renderCounterApp();
};

const minusOne = () => {
  console.log("minusOne");
  count--;
  renderCounterApp();
};

const reset = () => {
  console.log("reset");
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
