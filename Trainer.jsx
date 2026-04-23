import React from "react";

function Trainer(props) {
  return (
    <div>
      <h2>Trainer </h2>
      <p>Trainer ID: {props.id}</p>

      {props.children}
    </div>
  );
}

export default Trainer;