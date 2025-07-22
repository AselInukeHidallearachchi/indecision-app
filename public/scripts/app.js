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
  subtitle: "Put your life in the hands of a computer"
};

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
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    "This is a paragraph"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(termplateThree, appRoot);
