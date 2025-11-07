import { data } from "@remix-run/router";
import { ResultType } from "@remix-run/router/dist/utils";
import React from "react";

function Practise() {
  const ajaysharam = {
    a: 50,
    b: 55,
    c: 40,
    d: 49,

    calc() {
      if (this.a > this.b && this.a > this.c && this.a > this.d) {
        return this.a; // a की value
      } else if (this.b > this.a && this.b > this.c && this.b > this.d) {
        return this.b; // b की value
      } else if (this.c > this.a && this.c > this.b && this.c > this.d) {
        return this.c; // c की value
      } else {
        return this.d; // d की value
      }
    },
  };

  console.log(ajaysharam.calc());

  return <></>;
}
const result (ajaysharam.calc);
export default Practise;

