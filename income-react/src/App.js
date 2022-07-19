import React, { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
  // Array of incomes
  const [income, setIncome] = useState([]);
  // Total income
  const [totalIncome, setTotalIncome] = useState(0);

  return (
    <div className="App">
      <Header totalIncome={totalIncome} />
    </div>
  );
}

export default App;
