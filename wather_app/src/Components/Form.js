import React, { Component } from 'react';


class Form extends Component {
  render() {
    return (
      <form onSubmit= {this.props.getWeather}>
      <input type="text" name="city" placeholder="City..." required="true"></input>
        <input type="text" name="country" placeholder="Country..." required="true"></input>
        <button> Get Weather</button>
      </form>
    );
  }
}

export default Form;
