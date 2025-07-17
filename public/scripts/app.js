import React from "react";

console.log("Hello, World!");

//JSX  - javascript XML
var template = <p>This is JSX for app.js </p>;
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
