import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputRef.current.value);
    const name = inputRef.current.value;
    name && props.onAdd(name);

    // this.inputRef.current.value = "";

    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        type="text"
        className="add-input"
        placeholder="Please enter your Habit"
        ref={inputRef}
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
