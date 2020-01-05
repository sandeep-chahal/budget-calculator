import React, { useState } from "react";
import "./button.styles.scss";

import Item from "../add-item/Item";

const items = ["coffee", "food", "shopping", "rent", "other"];

function Button(props) {
  const [itemState, setItem] = useState("");
  const [otherState, setOther] = useState("");
  const [amountState, setAmount] = useState(0);

  const addingItem = name => {
    setItem(name);
  };

  return (
    <div className="btn-container" onMouseLeave={() => setItem("")}>
      <div className="cross-container"></div>
      {items.map(item => {
        return (
          <Item
            name={item}
            key={item}
            hidden={itemState !== "" && itemState !== item}
            addingItem={addingItem}
          ></Item>
        );
      })}
      {itemState ? (
        <div className="adding-details">
          {itemState === "other" ? (
            <input
              type="text"
              placeholder="Name"
              onChange={e => setOther(e.target.value)}
            />
          ) : (
            ""
          )}
          <input
            type="number"
            placeholder="Amount"
            onChange={e => setAmount(parseFloat(e.target.value))}
          />
          <div
            className="btnAdd"
            onClick={() => {
              props.addItem({
                name: itemState !== "other" ? itemState : otherState,
                amount: amountState
              });
              setItem("");
              setOther("");
              setAmount(0);
            }}
          >
            Add
          </div>
          <div className="btnCancel" onClick={() => setItem("")}>
            Cancel
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Button;
