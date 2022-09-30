import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./nav";
import { Main } from "./main";

function App() {
  return (
    <>
      <Nav />
      <Main
        smallHeading="SNEAKER COMPANY"
        bigHeading={"Fall Limited Edition\n Sneakers"}
        infoText=" These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
        productValue={`$${125}`}
        reducedByValue={`${50}%`}
        originalValue={`$${250}`}
      ></Main>
    </>
  );
}

export default App;
