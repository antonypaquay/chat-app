import React, { Component } from "react";
import "./App.css";
import Formulaire from "./components/Formulaire";
import Message from "./components/Message";

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  };

  addMessage = message => {
    const messages = { ...this.state.messages };
    messages[`message-${Date.now()}`] = message;
    this.setState({ messages });
  };

  render() {
    const messages = Object.keys(this.state.messages).map(key => {
      return (
        <Message
          key={key}
          message={this.state.messages[key].message}
          pseudo={this.state.messages[key].pseudo}
        />
      );
    });

    return (
      <div className="box">
        <div className="messages">{messages}</div>
        <Formulaire
          length={140}
          pseudo={this.state.pseudo}
          addMessage={message => this.addMessage(message)}
        />
      </div>
    );
  }
}

export default App;
