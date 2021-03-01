import React, { Component, createRef } from "react";
import { Link } from 'react-router-dom';
import Formulaire from "./components/Formulaire";
import Message from "./components/Message";
import './App.scss';
// firebase
import base from "./config/base";
// Animations
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
  state = {
    messages: {},
    user: this.props.match.params.user
  };

  messagesRef = createRef();

  componentDidMount() {
    base.syncState("/", {
      context: this,
      state: "messages"
    });
  }

  componentDidUpdate() {
    const ref = this.messagesRef.current;
    ref.scrollTop = ref.scrollHeight;
  }

  addMessage = message => {
    const messages = { ...this.state.messages };
    messages[`message-${Date.now()}`] = message;
    Object.keys(messages)
      .slice(0, -10)
      .forEach(key => {
        messages[key] = null;
      });
    this.setState({ messages });
  };

  isUser = user => user === this.state.user;

  handleClick = () => {
    localStorage.removeItem('user');
  }

  render() {
    const messages = Object.keys(this.state.messages).map(key => {
      return (
        <CSSTransition
          key={key}
          timeout={200}
          classNames='fade'
        >
          <Message
            isUser={this.isUser}
            message={this.state.messages[key].message}
            user={this.state.messages[key].user}
            time={this.state.messages[key].time}
          />
        </CSSTransition>
      );
    });

    return (
      <div className="app">
        <Link to="/" onClick={this.handleClick}>Log out</Link>
        <div className="messages" ref={this.messagesRef}>
          <TransitionGroup className="message">{messages}</TransitionGroup>
        </div>
        <Formulaire
          length={140}
          user={this.state.user}
          addMessage={message => this.addMessage(message)}
        />
      </div>
    );
  }
}

export default App;
