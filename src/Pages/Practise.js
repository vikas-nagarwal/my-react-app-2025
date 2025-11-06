import React from "react";

function Practise() {
  // पहले वाला calculator function
  const calculate = (value1 = 0, value2 = 0, op = "+") => {
    switch (op) {
      case "+":
        return value1 + value2;
      case "-":
        return value1 - value2;
      case "*":
        return value1 * value2;
      case "/":
        return value2 !== 0 ? value1 / value2 : "Cannot divide by zero";
      default:
        return "Invalid operator";
    }
  };

  // 🧮 नया function: sum of digits निकालने के लिए
  const sumOfDigits = (num = 0) => {
    return num
      .toString()
      .split("")
      .reduce((acc, curr) => acc + parseInt(curr), 0);
  };

  // Calculation examples
  const results = calculate(1000, 20, "*");
  const totalDigits = sumOfDigits(98765); // Example

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>📊 Database Operator Results</h2>
        <p>Add : {calculate(1000, 20, "+")} </p>
        <p>Sub : {calculate(1000, 20, "-")} </p>
        <p>Div : {calculate(1000, 20, "/")} </p>
        <p>Mul : {calculate(1000, 20, "*")} </p>

        <hr />
        <h3>🔢 Sum of Digits Function</h3>
        <p>Number: 98765 → Total: {totalDigits}</p>

        <a className="btn btn-primary" href="#" role="button">
          Button
        </a>
      </div>
    </>
  );
}

export default Practise;
