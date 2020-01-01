import React from "react";
import "./button.styles.scss";

import Item from "../add-item/Item";

const items = ["coffee", "food", "shopping", "rent", "other"];

function Button() {
  return (
    <div className="btn-container">
      <div className="cross-container"></div>
      {items.map(item => (
        <Item name={item} key={item}></Item>
      ))}
    </div>
  );
}
export default Button;
