// const heading = React.createElement(
//     "h1",
//     {id: "heading", xyz: "abc"}, // attributes of h1 element
//     "Hello, World! from React" // children of h1 element
// );

// // props - children and attributes altogether are called props
// // heading is an object representation of the above h1 element

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// // render converts the object representation to real DOM (h1 html element) and displays on the screen

/*
 * <div>
 *    <div id="child1">
 *        <h1>I am an H1 tag</h1>
 *        <h2>I am h2</h2>
 *    </div>
 *    <div id="child2">
 *        <h3>I am h3</h3>
 *        <h4>I am h4</h4>
 *    </div>
 * </div>
 *
 */

// createElement(object) => html element(browser understands)
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an H1 tag"),
    React.createElement("h2", {}, "I am an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "I am an H3 tag"),
    React.createElement("h4", {}, "I am an H4 tag"),
  ]),
]);
//This is how we create a nested structure in React using createElement method. but this is not a good way to write code. so we use JSX.

ReactDOM.createRoot(document.getElementById("root")).render(parent);
