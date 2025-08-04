"use strict";

console.log("Hello, World!");

var firstname = "Asel";

var user = {
  name: "andrew",
  age: 26
};

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

var count = 0;
var addOne = function addOne() {
  count++;
  console.log("addOne");
  renderCounterApp();
};

var minusOne = function minusOne() {
  console.log("minusOne");
  count--;
  renderCounterApp();
};

var reset = function reset() {
  console.log("reset");
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "Reset"
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
