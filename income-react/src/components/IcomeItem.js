import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faDollarSign } from "@fortawesome/free-solid-svg-icons";

function IcomeItem({ income, index, removeIncome }) {
  let date = new Date(income.date);
  let day = date.getDate();
  let month = date.getMonth() * 1;
  let year = date.getFullYear();

  const removeHandle = (i) => {
    removeIncome(i);
  };

  return (
    <div className="income-item">
      <button className="remove-item" onClick={() => removeHandle(index)}>
        <FontAwesomeIcon icon={faXmark} />
        <div className="description">{income.decrription}</div>
        <div className="price">
          <FontAwesomeIcon icon={faDollarSign} />
          {income.price}
        </div>
        <div className="date">{day + "/" + month + "/" + year}</div>
      </button>
    </div>
  );
}

export default IcomeItem;
