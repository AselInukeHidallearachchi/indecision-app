console.log("Hello, World!");

var firstname = "Asel";

var user = {
  name: "andrew",
  age: 26,
};

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
};

function getLocation() {
  return "Sri Lanka";
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = ""; // Clear the input field
  }
  renderApp();
};

const onRemoveAll = () => {
  app.options = [];
  renderApp();
};

const renderApp = () => {
  const templateThree = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle && app.subtitle}</p>
      <p>{getLocation()}</p>
      {app.options.length > 0 ? <p>{app.options}</p> : <p>No options</p>}

      <p>{app.options.length}</p>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
        <button onClick={onRemoveAll}>Remove All</button>
      </form>
    </div>
  );
  ReactDOM.render(templateThree, appRoot);
};

const appRoot = document.getElementById("app");

renderApp();
