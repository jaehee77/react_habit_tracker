import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    // console.log(this.inputRef.current.value);
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);

    // this.inputRef.current.value = "";

    this.formRef.current.reset();
  };
  render() {
    console.log(`add-form`);
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="add-input"
          placeholder="Please enter your Habit"
          ref={this.inputRef}
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
