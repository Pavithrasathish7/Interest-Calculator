import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const resultdata = calculateInvestmentResults(input);
  const initalinvestment =
    resultdata[0].valueEndOfYear -
    resultdata[0].interest -
    resultdata[0].annualInvestment;
  //console.log(initalinvestment);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest Year</th>
          <th>Total Year</th>
          <th>Invested Captial</th>
        </tr>
      </thead>
      <tbody>
        {resultdata.map((yearData) => {
          const totalinterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initalinvestment;
          //console.log(totalinterest);
          const totalinvestmentamount = yearData.valueEndOfYear - totalinterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalinterest)}</td>
              <td>{formatter.format(totalinvestmentamount)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
