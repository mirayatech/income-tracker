import React from "react";

function IncomeForm(income, setIncome) {
  return (
    <form className="income-form">
      <div className="form-inner">
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="income-description"
        />
        <input type="number" name="price" id="price" placeholder="Price." />
        <input type="date" name="date" id="date" placeholder="income date..." />
        <input type="submit" value="Add Income" />
      </div>
    </form>
  );
}

export default IncomeForm;
