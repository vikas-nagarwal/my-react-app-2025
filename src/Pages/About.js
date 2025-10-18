import React from "react";
import Api from "../APi/Api";
import "../App.css";
import Product from "../Components/product";
import { appName, version, greet } from "./globals"; // from globals.js

function bye() {
  return "Thanks for visiting " + appName;
}
const Header = () => <h1>{appName}</h1>; // directly using imported global
const Footer = () => <footer>{appName}</footer>;

// global scope
let rrahul = "Rahul";
function myFunction() {
  console.log("Hello " + rrahul + " from " + appName);
  return "Thanks " + rrahul;
}

const vika = "vikasnagarwa";
function myFunction1() {
  return "Thanks " + vika + " from " + appName;
}
console.log(myFunction1());
// gloal scope end

// block scop

{
  let blockVar = "I am block scoped";
  const anotherBlockVar = "Me too!";
  console.log(blockVar); // ✅ Console me dikh raha hai
  console.log(anotherBlockVar); // ✅ Console me dikh raha hai
  // Return me show karne ke liye ek variable bana lete hain
  var output = blockVar + " & " + anotherBlockVar;
}

// block scop end

const About = () => {
  return (
    <div>
      <div>
        <h1>{appName}</h1> {/* from globals.js */}
        <h2>{version}</h2>
        <h3>{greet()}</h3>
      </div>
      <div>
        <h2>{myFunction1()}</h2>
        <h2>{myFunction()}</h2>
      </div>

      <h2>{Header()}</h2>
      <h2>{Footer()}</h2>
      <h2>{bye()}</h2>
      <h2>{greet()}</h2>
      <Product />
    </div>
  );
};

export default About;
