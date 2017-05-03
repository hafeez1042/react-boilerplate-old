import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageName: 'Home',
    };
  }
  
  render() {
    return (
      <div>
        <h1>This is {this.state.PageName} page</h1>
      </div>
    );
  }
}
