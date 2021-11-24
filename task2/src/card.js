import React from "react";

const Card = ({ name, email, lname, image }) => {
  return (
    <div className="cards dib">
      <img alt="robots" src={image} />
      <div>
        <h2>
          {name} {lname}
        </h2>
        <h3>{email}</h3>
      </div>
    </div>
  );
};
export default Card;
