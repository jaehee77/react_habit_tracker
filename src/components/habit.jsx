import React, { Component } from "react";

class Habit extends Component {
  render() {
    // console.log(this.props, this.props.habit);

    const { name, count } = this.props.habit;

    return (
      <>
        <li className="habit">
          <span className="habit-name">{name}</span>
          <span className="habit-count">{count}</span>
          <button
            className="habit-button habit-increase"
            onClick={() => {
              this.props.onIncrement(this.props.habit);
            }}
          >
            <i className="fas fa-plus-square" />
          </button>
          <button
            className="habit-button habit-decrease"
            onClick={() => {
              this.props.onDecrement(this.props.habit);
            }}
          >
            <i className="fas fa-minus-square" />
          </button>
          <button
            className="habit-button habit-delete"
            onClick={() => {
              this.props.onDelete(this.props.habit);
            }}
          >
            <i className="fas fa-trash" />
          </button>
        </li>
      </>
    );
  }
}

export default Habit;
