import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <>
      <div className={`bg-white p3 rounded-lg text-sm flex ${className}`}>
        <div className="w-3/4">
          <label
            htmlFor={amountInputId}
            className="text-black/40 mb-5 ml-5 mt-2 inline-block"
          >
            {label}
          </label>
          <input
            id={amountInputId}
            className="outline-none w-4/5 bg-transparent py-1.5 ml-5"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black-40 m-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 m-2 bg-gray-100 cursor-pointer outline-none"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>  
    </>
  );
}

export default InputBox;
