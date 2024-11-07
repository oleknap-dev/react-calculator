import React, { useState } from "react";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";
import Header from "./components/Header";
import { evaluate, format } from "mathjs";

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [expression, setExpression] = useState("0");
  const [previousExpression, setPreviousExpression] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const handleClick = (value) => {
    const operators = ["+", "-", "*", "/"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const lastInput = expression.slice(-1);

    // When a result is displayed and the next input is a number or decimal
    // reset calculator and replace result with the new input
    if (
      (isResultDisplayed === true && numbers.includes(value)) ||
      (isResultDisplayed === true && value === ".")
    ) {
      resetCalculator(value);
      return;
    }

    // When result is "Error" and next input is not "CE", handle it
    if (displayValue === "Error" && value !== "CE") {
      resetCalculator(
        numbers.includes(value) || value === "-" ? value : "0" + value
      );
      return;
    }

    // Prevent multiple leading zeros ("00000" is not allowed but "0.000" is)
    if (currentNumber === "0" && value === "0") {
      return;
    }

    // Disallow multiple decimal points in a single number
    if (value === "." && currentNumber.includes(".")) {
      return;
    }

    // Handle "%" operator
    if (
      lastInput === "%" &&
      !operators.includes(value) &&
      value !== "CE" &&
      value !== "="
    ) {
      // Prevent multiple "%" operators in a row
      if (value === "%") {
        return;
      }
      setExpression((current) => current + "*" + value);
      setDisplayValue((current) => current + "*" + value);
      return;
    }

    // Handle case when first input is a number or minus
    if (
      displayValue === "0" &&
      (numbers.includes(value) || value === "-") &&
      previousExpression === ""
    ) {
      setExpression(value);
      setDisplayValue(value);
      setCurrentNumber(value);
      return;
    }

    // Replace the last operator with the new operator if there are two in a row
    if (
      (operators.includes(value) || value === "%") &&
      operators.includes(lastInput)
    ) {
      setDisplayValue((current) => current.slice(0, -1) + value);
      setExpression((current) => current.slice(0, -1) + value);
      return;
    }

    // Handle "=" operator
    if (value === "=") {
      // Don't allow calculation if expression ends with an operator
      if (operators.includes(lastInput)) {
        return;
      }
      try {
        const result = evaluate(expression);
        const displayResult = parseFloat(result.toFixed(6));
        if (isNaN(result)) {
          setDisplayValue("Error");
          setPreviousExpression(expression + "=");
          setIsResultDisplayed(true);
          return;
        }
        setPreviousExpression(expression + "=");
        setDisplayValue(String(displayResult));
        setExpression(String(result));
        setCurrentNumber("");
        setIsResultDisplayed(true);
      } catch (error) {
        setDisplayValue("Error");
        setExpression("0");
        setPreviousExpression("");
        setCurrentNumber("");
        setIsResultDisplayed(true);
      }
      return;
    }

    // Delete button handling
    if (value === "CE") {
      if (isResultDisplayed || displayValue === "0") {
        resetCalculator();
      } else {
        setDisplayValue((current) => current.slice(0, -1) || "0");
        setExpression((current) => current.slice(0, -1) || "0");

        if (!operators.includes(lastInput)) {
          setCurrentNumber((current) => current.slice(0, -1) || "0");
        }

        if (expression.length <= 1) {
          resetCalculator();
        }

        setIsResultDisplayed(false);
      }
      return;
    }

    // Default operator handler
    if (operators.includes(value)) {
      setCurrentNumber("");
    }
    setDisplayValue((current) => current + value);
    setExpression((current) => current + value);

    // Update current number
    if (!operators.includes(value)) {
      setCurrentNumber((current) => current + value);
    }

    setIsResultDisplayed(false);
  };

  // Helper function to reset the calculator to its initial state
  const resetCalculator = (initialValue = "0") => {
    setDisplayValue(initialValue);
    setExpression(initialValue);
    setPreviousExpression("");
    setCurrentNumber(initialValue === "0" ? "" : initialValue);
    setIsResultDisplayed(false);
  };

  // Replace "*" with "x" and replace "/" with "÷" on display
  const formatDisplayValue = (value) => {
    return value.replace(/\*/g, "×").replace(/\//g, "÷");
  };

  return (
    <>
      <div className="app-container">
        <Header text={"React Calculator"} />
        <div className="calculator-container">
          <Display
            value={formatDisplayValue(displayValue)}
            history={formatDisplayValue(previousExpression)}
          />
          <Keyboard
            onButtonClick={handleClick}
            isResultDisplayed={isResultDisplayed}
          />
        </div>
      </div>
    </>
  );
}

export default App;
