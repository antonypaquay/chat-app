import React, { Component } from "react";
import './Formulaire.scss'
import SendIcon from '../../assets/img/send.svg';

class Formulaire extends Component {
  state = {
    message: "",
    length: this.props.length
  };

  getCurrentTime = () => {

    const date = new Date();
    const currentTime = {
      year: date.getUTCFullYear(),
      month: date.getMonth(),
      day: date.getDay(),
      hour: date.getHours(),
      minutes: date.getMinutes(),
    }

    return currentTime;

  }




  createMessage = () => {
    const { addMessage, user } = this.props;
    const message = {
      user,
      message: this.state.message,
      time: this.getCurrentTime()
    };
    this.getCurrentTime();
    addMessage(message);
    this.setState({ message: "" });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.createMessage();
  };

  handleKeyUp = e => {
    if (e.key === "Enter") {
      this.createMessage();
    }
  }

  handleChange = e => {
    const message = e.target.value;
    const length = this.props.length - message.length;
    this.setState({ message, length });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          required
          maxLength={this.props.length}
          placeholder="Type your message..."
          rows="1"
        />
       
        <button type="submit">
          <img srcSet={SendIcon} alt="send icon"/>
        </button>
      </form>
    );
  }
}

export default Formulaire;
