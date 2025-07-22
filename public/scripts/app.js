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

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Andreq Mead"
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

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
