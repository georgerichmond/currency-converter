import React from "react";

const CurrencySelector = ({ name, label, rates }) => (
  <select name={name} aria-label={label}>
    {rates.map((rate) => (
      <option key={rate.currency} value={rate.currency}>
        {rate.currency}
      </option>
    ))}
  </select>
);

export default CurrencySelector;
