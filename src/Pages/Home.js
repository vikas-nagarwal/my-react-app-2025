import React, { Component } from "react";

class MyComponent extends Component {
  render() {
    return <h1>Hello from Component</h1>;
  }
}

// Car class
class Car {
  constructor(name) {
    this.brand = name;
  }
  present() {
    return "I have a " + this.brand;
  }
}
// Rahul class
class Rahul {
  constructor(name, age, id, roll) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.roll = roll;
  }
}

class vikas {
  constructor(name, age, idnumber) {
    this.name = name;
    this.age = age;
    this.idnumber = idnumber;
  }
}

// Home component
const Home = () => {
  const myCar = new Car("BMW"); // Car object
  const obj = new Rahul("Rahul", 28, 101, 12); // Rahul object
  const ob4 = new vikas("vikas", 20, 25);

  return (
    <div>
      <div>
        <h2>{ob4.name}</h2>
        <h2>{ob4.age}</h2>
        <h2>{ob4.idnumber}</h2>
      </div>
      <div>
        <h2>{myCar.present()}</h2>
      </div>

      <div>
        <h1>{obj.name}</h1>
        <h2>{obj.age}</h2>
        <h3>{obj.id}</h3>
        <h4>{obj.roll}</h4>
      </div>
    </div>
  );
};

export default Home;
