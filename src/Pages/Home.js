import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
function tahu() {
  let a = 20;
  let b = 10;
  return {
    addition: a + b, // ➕ जोड़
    subtraction: a - b, // ➖ घटाना
    multiplication: a * b, // ✖️ गुणा
    division: a / b, // ➗ भाग
  };
}

const result = tahu();
console.log(result.division);

function contactnumber() {
  const rahul = 8952995446;
  const aman = 8952995440;
  const vikas = 8952995450;
  const ajay = 8952995430;
  const sapna = 8952995460;
  const sanjay = 8952995470;
  const rohit = 8952995480;
  const yogesh = 8952995490;

  function compareNumbers() {
    return rahul + aman; // ✅ dono defined variables ka use
  }

  return compareNumbers(); // ✅ inner function ko call kar rahe ho
}

console.log(contactnumber()); // ✅ Output: 17905990886

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "", // ✅ result को state में रखा ताकि UI पर दिख सके
    };
  }
  // ✅ marks checking function
  teachermarks() {
    let a = 20;
    let b = 20;
    let c = 20;
    let d = 20;
    let e = 20;

    if (a > b) {
      return "data successful";
    } else if (b > c) {
      return "data successful";
    } else if (c > d) {
      return "data ok";
    } else if (d > e) {
      return "data ok";
    } else {
      return "no condition matched";
    }
  }

  // ✅ Button click event
  showResult = () => {
    const result = this.teachermarks();
    this.setState({ result }); // state update → UI refresh
  };

  // ✅ student info function
  student5(age) {
    let name4 = "ajay";
    let name5 = "vikas";
    let is_voter = "";

    if (age >= 18) {
      is_voter = "YES";
    } else {
      is_voter = "NO";
    }

    return { name4, name5, age, is_voter };
  }

  render() {
    const dataName = this.student5(14);
    const dataName2 = this.student5(18);

    const products = [
      { name: "AGARWOOD", discount: "Up to 80% OFF" },
      { name: "SANDALWOOD", discount: "Up to 70% OFF" },
      { name: "JASMINE", discount: "Up to 60% OFF" },
      { name: "ROSE", discount: "Up to 50% OFF" },
      { name: "LAVENDER", discount: "Up to 40% OFF" },
    ];

    return (
      <>
        <div></div>
        {/* ✅ Teacher Marks Section */}
        <Container>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Teacher Marks Result</h2>
            <button
              onClick={this.showResult}
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#ffcc00",
                color: "#333",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Check Result
            </button>

            <p style={{ fontSize: "20px", color: "blue", marginTop: "20px" }}>
              {this.state.result}
            </p>
          </div>
        </Container>
        <div className="container">
          <h2>Student Info</h2>
          <p>Name 1: {dataName.name4}</p>
          <p>Name 2: {dataName.name5}</p>
          <p>Age: {dataName.age}</p>
          <p>Voting: {dataName.is_voter}</p>
        </div>
        <div className="container">
          <h2>Student Info</h2>
          <p>Name 1: {dataName2.name4}</p>
          <p>Name 2: {dataName2.name5}</p>
          <p>Age: {dataName2.age}</p>
          <p>Voting: {dataName2.is_voter}</p>
        </div>
        {/* ✅ Product List */}
        <div className="container py-2 bgcolor">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-2 mb-md-0">
              <h6 className="text-start">Welcome to Our E-Commerce Store</h6>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-12 text-center">
              <h6>Product Category</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div
              style={{ backgroundColor: "hsla(15, 100%, 87%, 1.00)" }}
              className="row-custom"
            >
              {products.map((product, i) => (
                <div key={i} className="pd-5 col-5-custom text-center">
                  <h5>{product.name}</h5>
                  <p>{product.discount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
