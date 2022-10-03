import * as React from "react";
import styled from "styled-components";
import { ReactComponent as Cart } from "./img/cart.svg";

const Button = styled.button`
  color: white;
  padding: 1em;
  background-color: #ff8400;
  border-radius: 10px;
  border: none;
  flex-grow: 1;
  font-size: 15px;
  font-weight: bold;
`;
interface Counter {
  adjustCount: Function;
  count: number;
  setCartCounter: Function;
  cartCounter: number;
}

export const AddToCart = ({ count, cartCounter, setCartCounter }: Counter) => {
  //need to add cart logo

  const addToCart = () => {
    setCartCounter(count + cartCounter);
  };

  return (
    <>
      <Button onClick={addToCart}>Add to cart</Button>
    </>
  );
};
