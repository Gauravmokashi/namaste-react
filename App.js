import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "child1" }, "I'm Child"),
        React.createElement("div", { id: "child2" },
            React.createElement("h1", { id: "Grand-Child" }, "I'm Grand Child"))
    ]))

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)