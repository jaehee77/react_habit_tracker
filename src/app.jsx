import React, { Component } from "react";
import "./app.css";
import Navbar from "./components/navbar";
import Habits from "./components/habits";

class App extends Component {
  // state
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    // console.log(`handleIncrement ${habit.name}`);
    const habits = this.state.habits.map((item) => {
      if (item.id == habit.id) {
        // console.log(habit);
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    // 위의 this.state.habits 인 key 와 멤버변수내에서 복사및업데이트한 habits 로 value 를 지정함
    // this.setState({ habits: habits });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    // console.log(`handleDecrement ${habit.name}`);
    const habits = this.state.habits.map((item) => {
      if (item.id == habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });

    this.setState({ habits });
  };

  handleDelete = (habit) => {
    // console.log(`handleDelete ${habit.name}`);

    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    // console.log(name);
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits });
  };

  handleReset = () => {
    // console.log(`reset`);
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    // console.log(habits);
    this.setState({ habits });
  };

  render() {
    console.log(`app`);
    return (
      <div>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;
