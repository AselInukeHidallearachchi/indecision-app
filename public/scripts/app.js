console.log("Hello, World!");

//JSX  - javascript XML
//var template = <p>This is JSX for app.js </p>;

var template = React.createElement(
  "h1",
  { id: "title" },
  "This is JSX for app.js"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
