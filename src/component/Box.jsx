import React from "react";
import { ArrowLeftRight } from "lucide-react";

function Box({
  amount,
  onAmountChange,
  setFromCurrency,
  setToCurrency,
  currencyOptions = [],
  fromCurr = "usd",
  toCurr = "inr",
  swap,
  convert,
  convertedAmount,
}) {
  return (
    <div className="flex flex-row justify-center mt-6">
      <div className="bg-indigo-600 rounded-xl px-20 py-10 flex flex-col items-center">
        <label htmlFor="amount-input" className="text-white">
          Enter Amount
        </label>
        <input
          id="amount-input"
          type="number"
          min="0"
          className="w-full p-2 my-4 text-black rounded-xl px-4 py-3 bg-white"
          placeholder="Enter amount"
          value={amount === "" ? "" : amount}
          onChange={(e) => {
            const value = e.target.value === "" ? "" : Number(e.target.value);
            onAmountChange?.(value);
          }}
        />

        <div className="flex flex-col mt-5 gap-y-2">
          <div className="flex justify-between w-full text-white">
            <label htmlFor="from-select">From</label>
            <label htmlFor="to-select">To</label>
          </div>

          <div className="flex w-full items-center gap-5">
            <select
              id="from-select"
              className="w-full p-2 my-4 text-black rounded-xl px-4 py-3 bg-white"
              name="from"
              value={fromCurr}
              onChange={(e) => setFromCurrency?.(e.target.value)}
              disabled={!currencyOptions.length}
            >
              {currencyOptions.length ? (
                currencyOptions.map((curr) => (
                  <option key={curr} value={curr}>
                    {curr}
                  </option>
                ))
              ) : (
                <option value="">No currencies available</option>
              )}
            </select>

            <button
              className="rounded-full bg-white text-black h-12 w-12 hover:bg-gray-200 transition"
              onClick={swap}
              aria-label="Swap currencies"
            >
              <ArrowLeftRight />
            </button>

            <select
              id="to-select"
              className="w-full p-2 my-4 text-black rounded-xl px-4 py-3 bg-white"
              name="to"
              value={toCurr}
              onChange={(e) => setToCurrency?.(e.target.value)}
              disabled={!currencyOptions.length}
            >
              {currencyOptions.length ? (
                currencyOptions.map((curr) => (
                  <option key={curr} value={curr}>
                    {curr}
                  </option>
                ))
              ) : (
                <option value="">No currencies available</option>
              )}
            </select>
          </div>
        </div>

        <button
          className="bg-white text-black rounded-xl px-4 py-2 mt-5"
          onClick={convert}
        >
          Convert
        </button>
        <div className="border-white border-2 rounded-xl p-2 mt-2 px-5 py-4 text-center w-full text-white">
          <p>
            {convertedAmount
              ? `${amount} ${fromCurr} = ${convertedAmount.toFixed(2)} ${toCurr}`
              : "Enter amount and currencies to convert"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Box;