// alert("Hello World!");
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

var run = setInterval(tick, 1000);

ReactDOM.render(<NestedFunctionalComponent/>, document.getElementById("content4"));
ReactDOM.render(<App />, document.getElementById("content"));

function Clock(props) {
    return (
        <div>
            <h1>
                The time is {props.date.toLocaleTimeString()}
            </h1>
        </div>
    );
}

function tick() {
    ReactDOM.render(<Clock date={new Date()}/>, document.getElementById("content3")); 
}

function NestedFunctionalComponent() {
    return(
        <div>
            <NestedComp name="Monica" />
            <NestedComp name="Thea" />
        </div>
    );
}

function NestedComp(props) {
    return <h1>Welcome {props.name}</h1>;
}