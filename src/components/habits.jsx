import React, { Component } from "react";
import HabitAddForm from "./habitAddForm";
import Habit from "./habit";

class Habits extends Component {
  // handleIncrement = (habit) => {
  //   this.props.onIncrement(habit);
  // };

  // handleDecrement = (habit) => {
  //   this.props.onDecrement(habit);
  // };

  // handleDelete = (habit) => {
  //   this.props.onDelete(habit);
  // };

  render() {
    console.log(`habits`);
    return (
      <>
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
