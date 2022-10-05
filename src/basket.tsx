import React from "react";
import styled from "styled-components";

const BasketContainer = styled.section`
  position: absolute;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  height: fit-content;
  min-width: 25%;
  top: 4.5em;
  right: 5em;
  background-color: white;
`;

const CartHeading = styled.h3`
  margin-left: 1em;
`;

const HrLine = styled.hr``;

interface Children {
  children: React.ReactNode;
}

export const Basket = (props: Children) => {
  return (
    <BasketContainer>
      <CartHeading>Cart</CartHeading>
      <HrLine />
      {props.children}
    </BasketContainer>
  );
};
