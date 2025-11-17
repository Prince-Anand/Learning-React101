const heading = React.createElement(
    "h1", 
    {id: "heading", xyz: "abc"}, // attributes of h1 element
    "Hello, World! from React" // children of h1 element
);

// props - children and attributes altogether are called props
// heading is an object representation of the above h1 element

const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(heading);
