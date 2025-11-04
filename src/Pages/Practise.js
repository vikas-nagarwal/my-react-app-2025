import React from "react";

const studentdata = {
  name: 12,
  id: 25,
  school: 0,

  // 👇 method defined
  activity() {
    if (this.name > this.id) {
      return "Name is greater than ID";
    } else if (this.id > this.name) {
      return "ID is greater than Name";
    } else {
      return "Both are equal";
    }
  },
};

// ✅ 2-number multiplication object
const data = {
  a: 6,
  b: 20,
  dataclear() {
    return this.a * this.b; // return the multiplied value
  },
};

function Practise() {
  // 👇 call both functions
  const result = studentdata.activity();
  const multiplyResult = data.dataclear();

  console.log("Student Result:", result);
  console.log("Multiplication Result:", multiplyResult);

  return (
    <>
      {/* --- Student Data Section --- */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Student Data</h2>
        <h3>Result: {result}</h3>
        <h3>Name: {studentdata.name}</h3>
        <h3>ID: {studentdata.id}</h3>
        <h3>School: {studentdata.school}</h3>
      </div>

      {/* --- Multiplication Section --- */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Multiplication Data</h2>
        <h3>Value of A: {data.a}</h3>
        <h3>Value of B: {data.b}</h3>
        <h1>Multiplication Result: {multiplyResult}</h1>
      </div>
    </>
  );
}

export default Practise;
