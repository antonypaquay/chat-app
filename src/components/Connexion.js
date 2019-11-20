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
    if(pseudo){
      this.setState({character: true})
    } else {
      this.setState({character: false})
    }
    this.setState({ pseudo });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ goToChat: true });
  };

  render() {
    if (this.state.goToChat) {
      return <Redirect to={`/pseudo/${this.state.pseudo}`}></Redirect>;
    }

    return (
      <div className="connexionBox">
        <form className="connexion" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Your personal ID"
            required
          />
          {this.state.character ? <button type="submit">GO</button> : null}
        </form>
      </div>
    );
  }
}

export default Connexion;
