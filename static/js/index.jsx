// alert("Hello World!");
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Toggle from "./Toggle"
import LoginControl from "./LoginControl"

class Clock extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState( {
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>
                    The time is {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        );    
    }
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

ReactDOM.render(<App />, document.getElementById("content"));
ReactDOM.render(<Clock />, document.getElementById("content3")); 
ReactDOM.render(<NestedFunctionalComponent/>, document.getElementById("content4"));
ReactDOM.render(<Toggle />, document.getElementById("content5"));
// ReactDOM.render(<LoginControl />, document.getElementById("greeting"));