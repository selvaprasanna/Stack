import React from "react";
import ReactDOM from "react-dom";

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
        Logout
      </button>  
    );
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
        Login
      </button>  
    );
}

function Greeting(props) {
    if (props.isLoggedIn) {
        return <h1>Welcome back!</h1>;
    }
    else {
      return <h1>Please login!</h1>;
    }
}

export default class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
  
      let button = null;
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }

  ReactDOM.render(<LoginControl />, document.getElementById("greeting"));