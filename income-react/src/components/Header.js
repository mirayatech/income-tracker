import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

function Header({ totalIncome }) {
  return (
    <header>
      <h1>Income Tracker</h1>
      <div className="total-income">
        <FontAwesomeIcon icon={faDollarSign} className="dollar" />
        {totalIncome}
      </div>
    </header>
  );
}

export default Header;
