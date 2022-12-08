import React, { Component } from "react";
export default class HoverCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovercount: 0,
    };
  }
  inc = () => {
    this.setState({ hovercount: this.state.hovercount + 1 });
  };
  render() {
    return (
      <>
        <h1>
          HoverCounter
          <br />
          <br />
          {this.state.hovercount}
          <br />
        </h1>
        <h2>
          <a onMouseLeave={this.inc} href="http://localhost:3000/">
            Reset/Hover Link
          </a>
        </h2>
      </>
    );
  }
}
