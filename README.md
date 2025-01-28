# React Calculator

This project is a calculator application built with React. It replicates the functionality of the Google calculator, featuring basic arithmetic operations, input validation, and a user-friendly interface.


## 🌐 Online version
[👉 Try the Calculator](https://oleknap-dev.github.io/react-calculator/)


## ✨ Features
- Basic arithmetic operations: Supports addition, subtraction, multiplication, and division.
- Input validation: Prevents invalid sequences, such as pressing multiple operators in a row, multiple decimal points, or leading zeros.
- Percentage handling: Allows calculations with the `%` operator (e.g., `50 % of 200`).
- Adaptive input handling: Adjusts the initial "0" based on user input (digit, decimal point, or minus sign).
- Operator management: Automatically replaces the last operator if a new one is pressed (e.g., `5 + -` becomes `5 -`) and inserts multiplication after `%` when followed by a number.
- Error handling: Displays "Error" for invalid expressions (e.g., `5 + (`).
- Intelligent "CE" button behavior: Acts as a delete button for single inputs, resets the calculator on long press (0.8 seconds).
- Expression evaluation: Uses `math.js` for accurate mathematical calculations.

## 🛠️ Technologies Used
- **React 18.3.1** – Frontend library for building interactive UIs.
- **Vite** – Fast development server and build tool.
- **Math.js** – Library for evaluating complex mathematical expressions.
- **GitHub Pages** – Hosting platform for live demo.

