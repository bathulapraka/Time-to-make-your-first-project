// UserForm.jsx
import React, { useState } from "react";

const UserForm = (props) => {
  const [UserName, SetUserName] = useState("");
  const [Age, SetAge] = useState("");
  const [warning, SetWarning] = useState("");
  const [MinusValues, SetMinusValues] = useState("");

  const UserNameDetails = (event) => {
    SetUserName(event.target.value);
  };

  const AgeDetails = (event) => {
    SetAge(event.target.value);
  };

  const SubmitDetails = () => {
    Warning();
    const UserData = {
      id: Date.now(),
      UserName: UserName,
      Age: Age,
    };
    props.onAddExpense(UserData);
  };

  const Warning = () => {
    if (UserName.trim() === "" || NegativeValues()) {
      SetWarning("Please Enter The User Details");
      return true;
    }
    SetUserName("");
    SetAge("");
    SetWarning("");
    SetMinusValues("");
    return false;
  };

  const NegativeValues = () => {
    const ageNumber = parseInt(Age);
    if (ageNumber < 0) {
      SetMinusValues("Negative values not allowed");
      return true;
    }
    return false;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "black", 
        borderRadius:"6px"
      }}
      className="All-Details"
    >
      <div className="Details" style={{  borderRadius:"19px",padding:"30px",border:"2px solid white",color: "white" }}>
        <label className="username">Username</label>
        <br />
        <input
          style={{ width: "600px", marginTop: "15px" }}
          type="text"
          value={UserName}
          placeholder="Enter your Name"
          id="UserName"
          onChange={UserNameDetails}
        />
        <br />
        <label style={{ padding: "3px" }} className="age">
          Age (Years)
        </label>
        <br />
        <input
          style={{ width: "600px", marginTop: "8px" }}
          type="number"
          value={Age}
          id="Age"
          placeholder="Enter your Age"
          onChange={AgeDetails}
        />
        <br />
        <button
          style={{ width: "px", backgroundColor:"violet", marginTop: "15px" }}
          onClick={SubmitDetails}
        >
          Submit
        </button>
        {warning  && <p>{warning}</p>}
        {MinusValues && <p>{MinusValues}</p>}
      </div>
    </div>
  );
};

export default UserForm;
