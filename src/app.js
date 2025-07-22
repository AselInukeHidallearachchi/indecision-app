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

var templateTwo = (
  <div>
    <h1>Andreq Mead</h1>
    <p>Age: 26</p>
    <p>Location: New York</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
