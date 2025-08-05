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
  options: []
};

function getLocation() {
  return "Sri Lanka";
}

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = ""; // Clear the input field
  }
  renderApp();
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderApp();
};

var renderApp = function renderApp() {
  var templateThree = React.createElement(
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
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      ),
      React.createElement(
        "button",
        { onClick: onRemoveAll },
        "Remove All"
      )
    )
  );
  ReactDOM.render(templateThree, appRoot);
};

var appRoot = document.getElementById("app");

renderApp();
