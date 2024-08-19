import React, { useState } from "react";
import "../Css/CreditSimulation.css";

const CreditSimulation = () => {
  const [price, setPrice] = useState(56690);
  const [interestRate, setInterestRate] = useState(12);
  const [period, setPeriod] = useState(12);
  const [downPayment, setDownPayment] = useState(24480);
  const [monthlyPayment, setMonthlyPayment] = useState(2878);

  const calculateMonthlyPayment = () => {
    // Implement the calculation logic here
    // For now, we'll just use the current value
    setMonthlyPayment(2878);
  };

  return (
    <div className="credit-simulation">
      <div className="credit-simulation-container">
        <div className="input-group">
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Interest Rate (%)</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Period in Months</label>
          <select value={period} onChange={(e) => setPeriod(e.target.value)}>
            <option value={12}>12 Months</option>
            <option value={24}>24 Months</option>
            <option value={36}>36 Months</option>
            <option value={48}>48 Months</option>
          </select>
        </div>
        <div className="input-group">
          <label>Down Payment</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
          />
        </div>
        <div className="monthly-payment">
          <label>Monthly Payment</label>
          <div className="payment-amount">${monthlyPayment}</div>
        </div>
      </div>
    </div>
  );
};

export default CreditSimulation;
