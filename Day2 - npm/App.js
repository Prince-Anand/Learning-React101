import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1", key: "child1" },
    [
      React.createElement("h1", { key: "h1" }, "This is React101"),
      React.createElement("h2", { key: "h2" }, "Hot Module replacement of this all contents"),
    ]
  ),
  React.createElement(
    "div",
    { id: "child2", key: "child2" },
    [
      React.createElement("h3", { key: "h3" }, "I am an H3 tag"),
      React.createElement("h4", { key: "h4" }, "I am an H4 tag"),
    ]
  ),
]);

ReactDOM.createRoot(document.getElementById("root")).render(parent);
