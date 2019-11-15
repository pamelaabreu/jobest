import React from "react";
import "./App.css";

import Tips from "./assets/notes";

function App() {
  const cardRender = Tips.map((value, index) => {
    const { title, tip, date } = value;
    const oddOrEven = index % 2 === 0 ? "card-date0" : "card-date1";

    return (
      <div className="m-2 p-5 box" key={index}>
        <h2 className="font-weight-bolder">
          {index}. {title}
        </h2>
        <p className={"font-weight-bolder " + oddOrEven}>{date}</p>
        <p>{tip}</p>
      </div>
    );
  });

  return (
    <div className="app min-vh-100 p-5">
      <div className="container d-flex justify-content-center">
        <header className="jobest-container">
          <h1 className="jobest-logo h1">JOBEST!</h1>
        </header>

        <section className="card-container p-0 mt-5">{cardRender}</section>

        <h2 className="made-by font-weight-bolder h6">Made By Pam w love</h2>
      </div>
    </div>
  );
}

export default App;
