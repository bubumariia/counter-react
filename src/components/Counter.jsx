import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { counter: 1 };
  }
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  reset = () => {
    this.setState({ counter: 0 });
  };
  render() {
    return (
      <>
        <h1 className="name">Counter</h1>
        <h1 className="counter">{this.state.counter}</h1>
        <div className="container">
          <button className="button decrease" onClick={this.decrement}>
            Decrease
          </button>
          <button className="button reset" onClick={this.reset}>
            Reset
          </button>
          <button className="button increase" onClick={this.increment}>
            Increase
          </button>
        </div>
      </>
    );
  }
}
export default Counter;
