import { useState } from "react";
import "./index.css";
import Box from "./component/Box";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount || "");
    setConvertedAmount(null);
  };

  const convert = () => {
    if (
      amount !== "" &&
      !isNaN(Number(amount)) &&
      currencyInfo[toCurrency] !== undefined
    ) {
      setConvertedAmount(Number(amount) * currencyInfo[toCurrency]);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-[#14161b] p-6 text-white">
      <h1 className="text-5xl mb-4">Currency Converter</h1>
      <Box
        amount={amount}
        onAmountChange={setAmount}
        setFromCurrency={setFromCurrency}
        setToCurrency={setToCurrency}
        currencyOptions={options}
        fromCurr={fromCurrency}
        toCurr={toCurrency}
        swap={swap}
        convert={convert}
        convertedAmount={convertedAmount}
      />
      <button
        className="bg-white text-black rounded-xl px-4 py-2 mt-4"
        onClick={() => {
          setAmount("");
          setFromCurrency("usd");
          setToCurrency("inr");
          setConvertedAmount(null);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;