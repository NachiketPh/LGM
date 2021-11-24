import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "./card";

const App = () => {
  const [card, setCard] = useState([]);
  const submit = async () => {
    const fetching = await fetch("https://reqres.in/api/users?page=1");
    const data = await fetching.json();
    setCard(data.data);
  };
  
  return (
    <>
      <nav className="navbar">
        <h4 className="logo">LGM</h4>
        <button id="btn" onClick={submit}>Get Users</button>
      </nav>
      {card.length === 0? 
        <h1>Click on Button to get Client details</h1>
       : 
        <div>
          <h1>Clients Information</h1>
          {card.map((user) => (
            <Card
              key={user.first_name}
              name={user.first_name}
              lname={user.last_name}
              email={user.email}
              image={user.avatar}
            />
          ))}
        </div>
      }
    </>
  );
};

export default App;
