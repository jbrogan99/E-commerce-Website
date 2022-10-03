import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./nav";
import { Main } from "./main";
import { count } from "console";

function App() {
  const [counter, setCounter] = useState(0);
  const [cartCounter, setCartCounter] = useState(0);

  return (
    <>
      <Nav cartCounter={cartCounter} />
      <Main
        setCartCounter={setCartCounter}
        adjustCount={setCounter}
        cartCounter={cartCounter}
        count={counter}
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
