import "../css/bootstrap.min.css";
import "../css/main.css";
import React from "react";
import ReactDOM from "react-dom";

// Import an entire module for side effects only, without importing any bindings.
import "./todo/main";

const root = document.getElementById("root");

  // The simplest thing we could do
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   root);


// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     root
//   );
// }
//
// setInterval(tick, 1000)