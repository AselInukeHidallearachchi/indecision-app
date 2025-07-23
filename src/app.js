console.log("Hello, World!");

var firstname = "Asel";

//JSX  - javascript XML
var template = (
  <div>
    <h1>{firstname}</h1> <p>Put your life in the hands of a computer</p>
    <ol>
      <li>Option 1</li>
      <li>Option 2</li>
    </ol>
  </div>
);

var user = {
  name: "andrew",
  age: 26,
};

var userName = "Andreq";
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: 26</p>
    <p>Location: New York</p>
  </div>
);

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

const appRoot = document.getElementById("app");

ReactDOM.render(termplateThree, appRoot);
