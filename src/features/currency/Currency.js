import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadRates, selectRates } from "./currencySlice";

const Currency = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(loadRates()), [dispatch]);
  const rates = useSelector(selectRates);

  return (
    <select name="rates" id="rates">
      {rates.map((rate) => (
        <option key={rate.currency} value={rate.currency}>
          {rate.currency}
        </option>
      ))}
    </select>
  );
};

export default Currency;
