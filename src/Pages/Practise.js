import React from "react";

function Practise() {
  const studentid = {
    a: 20,
    b: 30,
    c: 40,
  };

  const message = studentid.a > 10 && studentid.b > studentid.a;
  return (
    <>
      <h2>Day Message</h2>
      <h3 style={{ color: "blue" }}>{message}</h3>

      <div
        style={{
          backgroundColor: "#f8f8f8",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <h2>Student A: {studentid.a}</h2>
        <h2>Student B: {studentid.b}</h2>
        <h2>Student C: {studentid.c}</h2>
      </div>
    </>
  );
}
export default Practise;
