import React from "react";
import styled from "styled-components";
import { Basket } from "./basket";
import { ReactComponent as Delete } from "./img/delete.svg";
import { Button } from "./buttons/addToCart";

const ProductImg = styled.img`
  width: 100%;
  align-self: center;
  grid-column: 1/2;
  grid-row: 1/3;
  object-fit: cover;
  border-radius: 10px;
`;
let ProductHeading = styled.p`
  grid-column: 2/3;
  grid-row: 1/2;
  margin-bottom: 8px;
  margin-left: 15px;
  color: grey;
  font-size: 20px;
`;

let ProductValue = styled.p`
  grid-column: 2/3;
  grid-row: 2/3;
  word-spacing: 3px;
  margin-top: 0;
  margin-left: 15px;
  color: grey;
  font-size: 20px;
`;

const Container = styled.section`
  padding: 2% 5% 8% 5%;
  display: grid;
  grid-template-columns: 20% auto auto;
  grid-template-rows: auto auto auto;
`;
const CheckoutButton = styled(Button)`
  grid-column: 1/4;
  grid-row: 3/4;
  height: 100%;
  margin-top: 10px;
`;

const ProductValueContainer = styled.section``;
const Span = styled.span`
  color: black !important;
  padding-left: 10px;
  font-weight: bold;
`;
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
      <Container>
        <ProductImg src={cartInformation.src}></ProductImg>
        <ProductHeading>{cartInformation.title}</ProductHeading>
        <ProductValueContainer>
          <ProductValue>
            ${cartInformation.value} x {cartInformation.quantity}
            <Span>
              $
              {calculateTotalCost(
                cartInformation.quantity,
                cartInformation.value
              )}
            </Span>
          </ProductValue>
        </ProductValueContainer>
        <Delete
          style={{ gridColumn: "3/4", gridRow: "1/3", alignSelf: "center" }}
        ></Delete>
        <CheckoutButton>Checkout</CheckoutButton>
      </Container>
    </Basket>
  );
};
