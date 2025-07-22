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

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
};

var termplateThree = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <p>This is a paragraph</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(termplateThree, appRoot);
