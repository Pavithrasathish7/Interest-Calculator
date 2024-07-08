import React from "react";
import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="logo investment" />
      <h1>Investment Calculation</h1>
    </header>
  );
}
