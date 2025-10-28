import React from "react";
import Api from "../APi/Api";
import "../App.css";
import Product from "../Components/product";
import { appName, version, greet } from "./globals"; // from globals.js

if (true) {
  let country = "pakistan";
  console.log(country);
}
// Inside Block vs Outside Block
let color = "red";
if (true) {
  let color = "blue";
  console.log(color);
}

console.log(color);

// array
let color2 = ["red", "green", "blue"];
console.log(color2[0]);
console.log(color2[1]);
console.log(color2[2]);

// Reassign String
let greeting = "Hi";
greeting = greeting + " there!";
console.log(greeting); // Hi there!

let fruits = ["Apple", "Mango"];
console.log(fruits[0]);
console.log(fruits[1]);

// 🔹 13. Array Modify
let fruitsH = ["Apple", "Mango"];
fruitsH.push("Banana");
console.log(fruitsH); // Banana

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

let user = { name: "Vikas", age: 24 };
console.log(user);

const vika = "vikasnagarwa";
function myFunction1() {
  return "Thanks " + vika + " from " + appName;
}
console.log(myFunction1());
// gloal scope end

// block scop

ss

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
