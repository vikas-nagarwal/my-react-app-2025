import React from "react";

function Practise() {
  let a = 140;
  let b = 20;
  let c = a;

  a = b;
  b = c;

  return (
    <>
      <h2>Day Message</h2>
      <p>a: {a}</p>
      <p>b: {b}</p>
    </>
  );
}

export default Practise;
