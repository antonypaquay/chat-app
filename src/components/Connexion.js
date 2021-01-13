import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Connexion extends Component {
  state = {
    pseudo: "",
    goToChat: false,
    character: false
  };

  handleChange = event => {
    const pseudo = event.target.value;
    if (pseudo) {
      this.setState({ character: true })
    } else {
      this.setState({ character: false })
    }
    this.setState({ pseudo });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ goToChat: true });
  };

  render() {
    if (this.state.goToChat) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>;
    }

    return (
    
      <div className="connexionBox">
          <header>
            <h1>ConnectApp</h1>
          </header>
          <form className="connexion" onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="What is your pseudo?"
              required
            />
            <button type="submit">Start takling!</button>
          </form>
        </div>
     
    );
  }
}

export default Connexion;
