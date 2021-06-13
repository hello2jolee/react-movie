import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  // put data that will change
  state = {
    count: 0,
  };
  add = () => {
    // every time you call "setState" react will render with the new state
    this.setState((current) => ({ count: current.count + 1 }));
  };
  // don't use "this.state" => 성능상 이슈가 발생할 수 있음
  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };
  componentWillMount() {
    console.log("Component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("Component unmount")
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
