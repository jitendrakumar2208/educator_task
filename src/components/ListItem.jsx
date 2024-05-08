import React, { useState } from "react";
import "./listitem.css";
const ListItem = ({ handleDecrement, handleIncrement, subject, hours, id }) => {
  const onDecrease = (index) => {
    handleDecrement(index);
  };
  const onIncrease = (index) => {
    handleIncrement(index);
  };

  return (
    <div className="item_container">
      <span>{subject}</span>
      <span> - </span>
      <span>{hours} Hours</span>
      <button className="addBtn" onClick={() => onIncrease(id)}>
        +
      </button>
      <button className="removeBtn" onClick={() => onDecrease(id)}>
        -
      </button>
    </div>
  );
};

export default ListItem;
