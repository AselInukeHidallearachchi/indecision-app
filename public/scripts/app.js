"use strict";

console.log("Hello, World!");

var firstname = "Asel";

//JSX  - javascript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    firstname
  ),
  " ",
  React.createElement(
    "p",
    null,
    "Put your life in the hands of a computer"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Option 1"
    ),
    React.createElement(
      "li",
      null,
      "Option 2"
    )
  )
);

var user = {
  name: "andrew",
  age: 26
};

var userName = "Andreq";
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: 26"
  ),
  React.createElement(
    "p",
    null,
    "Location: New York"
  )
);

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two", "Three"]
};

function getLocation() {
  return "Sri Lanka";
}
var termplateThree = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle && app.subtitle
  ),
  React.createElement(
    "p",
    null,
    getLocation()
  ),
  app.options.length > 0 ? React.createElement(
    "p",
    null,
    app.options
  ) : React.createElement(
    "p",
    null,
    "No options"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(termplateThree, appRoot);
