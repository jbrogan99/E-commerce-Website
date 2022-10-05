import React from "react";
import styled from "styled-components";
import { Basket } from "./basket";

const EmptyBasketText = styled.p`
  text-align: center;
  padding: 5em 0 5em 0;
  font-weight: 600;
`;

export const BasketEmpty = () => {
  return (
    <Basket>
      <EmptyBasketText>Your cart is empty.</EmptyBasketText>
    </Basket>
  );
};
