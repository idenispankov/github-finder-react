import React, { Component } from 'react';

export class Navbar extends Component {

  static defaultProps = {
    title: 'GitHub Finder'
  }

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>{this.props.title}</h1>
      </nav>
    )
  }
}

export default Navbar
