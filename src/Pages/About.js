import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { appName, version, greet } from "./globals";
import Product from "../Components/product";

const studentdata = {
  name: "Vikas",
  age: 24,
  skills: ["HTML", "CSS", "JavaScript", "React"],
  id: 101,
  getDetails() {
    return `${this.name} is ${this.age} years old and knows ${this.skills.join(
      ", "
    )}.`;
  },
};

console.log(studentdata.getDetails());
let stuendtsssss = {
  age2: 10,
  nameg: "gdfdf",
  age: 20,
  collage: "ssmd",
  colage() {
    return `${this.age2}, ${this.nameg}, ${this.age}, ${this.collage}`;
  },
};
console.log(stuendtsssss.colage());

function hement() {
  let name = "rahul";
  let namte = "raj";
  let agee = 20;
  console.log(name);
  console.log(namte);
  console.log(agee);
}
hement();

// var
var age = 24;
var name1 = "Viddkashh";
var name = "Vikashh";
var name = "Visskashh";

var isStudent = true;
console.log(name);
console.log(name);

console.log(name1);
// var end
function Vikas1() {
  console.log(name);
}
Vikas1();

let fruits1 = ["Apple", "Banana", "Mango"];
function Vikas() {
  return "Fruits after delete: " + fruits1; // simply return full array
}

delete fruits1[0]; // removes "Banana"
delete fruits1[2]; // removes "Mango"
console.log(Vikas());

let gfff = ["Apple", "Banana", "Mango"];
gfff.pop();
console.log(gfff); // ["Apple", "Banana"]

let fruitrrs = ["Apple", "Banana", "Mango"];
console.log(fruitrrs.join(" - ")); // "Apple - Banana - Mango"

let fruiftsd = ["Apple", "Banana", "Mango"];
console.log(fruiftsd.at(0)); // "Apple"
console.log(fruiftsd.at(-1)); // "Mango" (last item)

let fruitsd = ["Apple", "Banana", "Mango"];
console.log(fruitsd.toString()); // "Apple,Banana,Mango"

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.length); // Output: 3

let school = ["Math", "Science", "History", "Geography"];
console.log(school.length); // Output: 4

// Step 1: Create array of students
let students = [
  {
    name: "Vikas",
    age: 24,
    skills: ["HTML", "CSS", "JavaScript"],
    id: 101,
    // method 1: show details
    getDetails() {
      return `${this.name} is ${
        this.age
      } years old and knows ${this.skills.join(", ")}.`;
    },

    // method 2: add new skill
    addSkill(newSkill) {
      this.skills.push(newSkill);
      return `${newSkill} added successfully to ${this.name}!`;
    },
  },

  {
    name: "Amit",
    age: 22,
    skills: ["Python", "Django"],
    id: 102,

    getDetails() {
      return `${this.name} is ${
        this.age
      } years old and knows ${this.skills.join(", ")}.`;
    },

    addSkill(newSkill) {
      this.skills.push(newSkill);
      return `${newSkill} added successfully to ${this.name}!`;
    },
  },

  {
    name: "Neha",
    age: 25,
    skills: ["C++", "Java"],
    id: 103,

    getDetails() {
      return `${this.name} is ${
        this.age
      } years old and knows ${this.skills.join(", ")}.`;
    },

    addSkill(newSkill) {
      this.skills.push(newSkill);
      return `${newSkill} added successfully to ${this.name}!`;
    },
  },
];

// Step 2: Loop through all students and show details
students.forEach((student) => {
  console.log(student.getDetails());
});

// Step 3 (Bonus 🌟): Add a new skill to Vikas
console.log(students[0].addSkill("React"));

// Step 4: Show updated details of Vikas
console.log(students[0].getDetails());
// end

// task2

let vikas3 = {
  age: 24,
  id: 101,
  name: "Vikas",
};

console.log(vikas3.name);
let vikas2 = {
  a: 10,
  b: 23,
  c: 40,
  vikas() {
    let sum = this.a + this.b + this.c;
    let Results = sum * this.c;
    let Results2 = Results / this.b;
    if (Results2 > 50) {
      return Results2;
    }
  },
};

console.log(vikas2.vikas());
const cars = {
  brand: "Ford",
  model: "Mustang",
  year: 1969,
  info() {
    return `${this.brand} ${this.model} (${this.year})`;
  },
};

delete cars.model;
delete cars.year;
console.log(cars.info());

const company = {
  name: "Tech Solutions",
  location: "New York",
  yearFounded: 2010,
  getDetails() {
    return `${this.name}, located in ${this.location}, was founded in ${this.yearFounded}.`;
  },
};

console.log(company.location); // ✅ Access the property (not a function)
console.log(company.getDetails()); // ✅ Call the method (function)

let student = {
  name: "Vikas",
  age: 24,
  id: 101,
  getDetails() {
    return {
      name: this.name,
      age: this.age,
      id: this.id,
    };
  },
};

console.log(student.name); // Output: Vikas
console.log(student.getDetails()); // Output: { name: 'Vikas', age: 24, id: 101 }

// 🔹 Object function
function Data() {
  return {
    name: "Vikas",
    age: 24,
    id: 101,
  };
}

// 🔹 Object with method
const carss = {
  brand: "Ford",
  model: "Mustang",
  year: 1969,
  info() {
    return `${this.brand} ${this.model} (${this.year})`;
  },
};

console.log(carss.info()); // ✅ सही तरीका

// 🔹 Class
class Car {
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
}

// 🔹 Simple functions
function SumResult() {
  return 10 + 20 + 40;
}
function MultiResult() {
  return 10 * 20 * 25;
}
function DivisionResult() {
  return 100 / 20;
}

// 🔹 Global helpers
function bye() {
  return "Thanks for visiting " + appName;
}
const Header = () => <h1>{appName}</h1>;
const Footer = () => <footer>{appName}</footer>;

const About = () => {
  const mam = Data();
  const sum = SumResult();
  const multi = MultiResult();
  const divi = DivisionResult();
  const myCar = new Car("Rahul", 20, 25);

  return (
    <>
      <div className="container"></div>
      <div className="container py-5 text-center">
        {/* 🔸 Student Section */}
        <section className="mb-5">
          <h2>Student Info</h2>
          <p>
            <b>Name:</b> {mam.name}
          </p>
          <p>
            <b>Age:</b> {mam.age}
          </p>
          <p>
            <b>ID:</b> {mam.id}
          </p>
        </section>

        {/* 🔸 Class Object Section */}
        <section className="mb-5">
          <h2>Car (Class Object)</h2>
          <p>
            <b>Name:</b> {myCar.name}
          </p>
          <p>
            <b>Age:</b> {myCar.age}
          </p>
          <p>
            <b>ID:</b> {myCar.id}
          </p>
        </section>

        {/* 🔸 Math Results */}
        <section className="mb-5">
          <h2>Results</h2>
          <p>Sum: {sum}</p>
          <p>Multiplication: {multi}</p>
          <p>Division: {divi}</p>
        </section>

        {/* 🔸 Global info */}
        <section className="mb-5">
          <h2>{appName}</h2>
          <h4>Version: {version}</h4>
          <h5>{greet()}</h5>
          <h5>{bye()}</h5>
        </section>

        <Header />
        {/* <Footer /> */}
        <Product />
      </div>
    </>
  );
};

export default About;
