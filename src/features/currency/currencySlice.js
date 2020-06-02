import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
  name: "currency",
  initialState: {
    rates: [],
  },
  reducers: {
    setRates: (state, action) => {
      state.rates = action.payload;
    },
  },
});

export const { setRates } = currencySlice.actions;

export const loadRates = () => (dispatch) => {
  setTimeout(() => {
    dispatch(
      setRates([
        { currency: "USD", rate: "1.1116" },
        { currency: "JPY", rate: "119.75" },
        { currency: "BGN", rate: "1.9558" },
      ])
    );
  }, 500);
};

export const selectRates = (state) => state.currency.rates;

export default currencySlice.reducer;
