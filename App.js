import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return (<h1>This is Title</h1>)
}

const HeadingComponent = () => {
    return (
        <div id="container">
            {Title()}
            <Title />
            <Title></Title>
            <h3 id="heading" className="heading">I am Heading</h3>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent />)
