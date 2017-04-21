import React, { Component } from 'react';

export default class App extends Component {

  componentDidMount() {
    $('h1').text('jQueryLoaded');
  }

  render() {
    return (
      <div>
        <h1>This is Home Page</h1>
      </div>
    );
  }
}