import React from "react";
import styled from "styled-components";
import { Basket } from "./basket";
import { ReactComponent as Delete } from "./img/delete.svg";
import { Button } from "./buttons/addToCart";

const ProductImg = styled.img`
  width: 20%;
`;
let ProductHeading = styled.p``;
let ProductQuantity = styled.p``;
let ProductValue = styled.p``;
let TotalCost = styled.p``;

interface items {
  cartInformation: any;
}

export const BasketFull = ({ cartInformation }: items) => {
  const calculateTotalCost = (quantity: number, amount: number) => {
    let overallPrice = quantity * amount;
    return overallPrice;
  };

  return (
    <Basket>
      <ProductImg src={cartInformation.src}></ProductImg>
      <ProductHeading>{cartInformation.title}</ProductHeading>
      <ProductQuantity>{cartInformation.quantity}</ProductQuantity>
      <ProductValue>{cartInformation.value}</ProductValue>
      <Delete></Delete>
      <Button>Checkout</Button>
      <TotalCost>
        ${calculateTotalCost(cartInformation.quantity, cartInformation.value)}
      </TotalCost>
    </Basket>
  );
};
