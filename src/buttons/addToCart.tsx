import * as React from "react";
import styled from "styled-components";
import { ReactComponent as Cart } from "./img/cart.svg";

export const AddToCart = () => {
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

  //need to add cart logo
  return (
    <>
      <Button>Add to cart</Button>
    </>
  );
};
