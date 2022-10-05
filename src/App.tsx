import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./nav";
import { Main } from "./main";
import { count } from "console";
import { Basket } from "./basket";
import styled from "styled-components";
import { BasketEmpty } from "./basketEmpty";
import { BasketFull } from "./basketFull";
import thumbnail1 from "./image-product-1-thumbnail.jpg";

function App() {
  const [counter, setCounter] = useState(0);
  const [cartCounter, setCartCounter] = useState(0);
  const [productImage, setProductImage] = useState();
  const [cartInformation, setCartInformation] = useState({});

  console.log("cartInformation:", cartInformation);
  return (
    <>
      <Nav cartCounter={cartCounter} />
      <BasketFull cartInformation={cartInformation}></BasketFull>
      <Main
        setCartInformation={setCartInformation}
        cartCounter={cartCounter}
        count={counter}
        smallHeading="SNEAKER COMPANY"
        bigHeading={"Fall Limited Edition\n Sneakers"}
        infoText=" These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
        productValue={`${125}`}
        reducedByValue={`${50}%`}
        originalValue={`$${250}`}
        adjustCount={setCounter}
        setProductImage={setProductImage}
        setCartCounter={setCartCounter}
      ></Main>
    </>
  );
}

export default App;
