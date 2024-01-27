import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setValid] = useState(true);
  const[Touch,SetTouch]=useState(false);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    SetTouch(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  const HandlingBlur=(event)=>{
    if(enteredValue.trim().length===0){
      setValid(false);
    }
  }

  const SetHandler=()=>{
    setValid(true);
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: isValid ? "red" : "black",
            background: isValid ? "salmon" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
          onBlur={HandlingBlur}
          onFocus={SetHandler}
        />
      </div>
      <Button style={{background: isValid ? "red" :"green"}} type="submit">
        Add Goal
      </Button>
      {Touch &&!isValid  && <p style={{color : "red"}}>Please Enter Valid Input</p>}
    </form>
  );
};

export default CourseInput;
