import React, { useState } from "react";
import "./App.css";
import { Nav } from "./nav";
import { Main } from "./main";
import { BasketEmpty } from "./basketEmpty";
import { BasketFull } from "./basketFull";
import { BasketItems } from "./nav";

function App() {
  const [counter, setCounter] = useState(0);
  const [cartCounter, setCartCounter] = useState(0);
  const [productImage, setProductImage] = useState();
  const [cartInformation, setCartInformation] = useState({});
  const [basketOpen, setBasketOpen] = useState(false);
  const [basket, setBasket] = useState<BasketItems>({
    empty: false,
    full: false,
  });

  console.log("basket", basket);

  const mainProperties = {
    setBasket: setBasket,
    basketOpen: basketOpen,
    setBasketOpen: setBasketOpen,
    basket: basket,
    setCartInformation: setCartInformation,
    cartInformation: cartInformation,
    cartCounter: cartCounter,
    count: counter,
    smallHeading: "SNEAKER COMPANY",
    bigHeading: "Fall Limited Edition\n Sneakers",
    infoText:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    productValue: `${125}`,
    reducedByValue: `${50}%`,
    originalValue: `$${250}`,
    adjustCount: setCounter,
    setProductImage: setProductImage,
    setCartCounter: setCartCounter,
  };

  return (
    <>
      <Nav
        basketOpen={basketOpen}
        setBasketOpen={setBasketOpen}
        cartInformation={cartInformation}
        cartCounter={cartCounter}
        setBasket={setBasket}
      />
      {basketOpen && basket.full && (
        <BasketFull cartInformation={cartInformation}></BasketFull>
      )}
      {basketOpen && basket.empty && <BasketEmpty></BasketEmpty>}
      <Main {...mainProperties}></Main>
    </>
  );
}

export default App;
