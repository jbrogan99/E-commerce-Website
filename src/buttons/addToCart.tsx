import * as React from "react";
import styled from "styled-components";
import { useHighlightImage } from "../imageHighlightHook";
import { ReactComponent as Cart } from "./img/cart.svg";

export const Button = styled.button`
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
  setProductImage: Function;
  setCartInformation: Function;
  src: any;
  title: string;
  value: number | string;
  buttonText: string | number;
}

export const AddToCart = ({
  count,
  setCartCounter,
  adjustCount,
  setCartInformation,
  src,
  title,
  value,
  cartCounter,
  buttonText,
}: Counter) => {
  //need to add cart logo

  const addToCart = () => {
    setCartCounter(count + cartCounter);
    adjustCount(0);
    setCartInformation({
      src: src,
      title: title,
      quantity: cartCounter + count,
      value: value,
    });
  };

  return (
    <>
      <Button onClick={addToCart}>{buttonText}</Button>
    </>
  );
};
