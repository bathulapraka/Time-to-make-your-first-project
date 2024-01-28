// App.jsx
import "./App.css";
import React, { useState } from "react";
import UserForm from "./UserForm";

const App = () => {
  const [Expenses, SetExpenses] = useState([]);

  const AddExpense = (expense) => {
    SetExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <UserForm onAddExpense={AddExpense} />
      {Expenses.map((expense) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "black",
            color: "white",
            marginTop: "-600px",
            
          }}
          key={expense.id}
        >
          {expense.Age >= 0 && (
            <div >
              <p style={{ padding:"8px",width:"680px",border:"2px solid white",marginTop:"100px"}}> {expense.UserName}</p>
              {expense.Age && <p style={{ width:"700px",padding:"8px",border:"2px solid white"}}> ({expense.Age} Years Old)</p>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
