import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './Connexion.scss'

class Connexion extends Component {
  state = {
    user: "",
    goToChat: false,
    character: false,
    keepConnection: false
  };

  componentDidMount() {
    const getUser = localStorage.getItem('user');
    if(getUser){
      this.setState({
        user: getUser,
        keepConnection: true
      });
    }
  }

  handleChange = event => {
    const user = event.target.value;
    if (user) {
      this.setState({ character: true })
    } else {
      this.setState({ character: false })
    }
    this.setState({ user });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.saveUser();
    this.setState({ goToChat: true });
  };


  saveUser = () => {
    let keepCheck =  document.querySelector('#keep');
    if(keepCheck.checked) {
      localStorage.setItem('user', this.state.user);
    } else {
      localStorage.clear();
    }
  }

  render() {
    if (this.state.goToChat && this.state.keepConnection === false) {
      return <Redirect push to={`/user/${this.state.user}`}></Redirect>;
    } 
    
    if(this.state.keepConnection) {
      return <Redirect push to={`/user/${this.state.user}`}></Redirect>;
    }

    return (

      <div className="connexion">
        <form className="connexion__form" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="What is your user?"
            required
          />
          <div className="form__elt">
            <label htmlFor="keep">Keep me logged</label>
            <input type="checkbox" id="keep"/>
          </div>
          <button class="btn__submit" type="submit">Start takling!</button>
        </form>
      </div>

    );
  }
}

export default Connexion;
