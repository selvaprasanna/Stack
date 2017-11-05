// App.jsx

import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
    render() {
        return element;
    }
}

const user = {
    firstName: "Selva",
    lastName: "Prasanna"
};

var element = (
    <div>
    <h1>
        Hello, {formatName(user)}!
    </h1>
    </div>
);    

function formatName(user){
    return user.firstName + ' ' + user.lastName
}

