import React, { useState } from "react";
import { ReactComponent as Logo } from "./img/logo.svg";
import { ReactComponent as Cart } from "./img/cart.svg";
import styled from "styled-components";
import { BasketEmpty } from "./basketEmpty";
import { BasketFull } from "./basketFull";
import { Basket } from "./basket";

const NavContainer = styled.section`
  height: 5em;
  display: grid;
  grid-template-columns: auto 45% 1fr;
  grid-template-rows: 30px;
  margin: 2% 10% 0% 10%;

  border-bottom: 1px solid black;
`;

const AvatarCartContainer = styled.section`
  position: relative;
  grid-column: 3/4;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 3rem;
`;

const Avatar = styled.img`
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    border: solid 2px orange;
    border-radius: 25px;
  }
`;

const LogoContainer = styled.section`
  grid-column: 1/2;
`;

const HeadingsContainer = styled.section`
  height: 5em;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  grid-column: 2/3;
  width: 100%;
  text-align: center;
`;
const Headings = styled.a`
  height: 5em;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  width: 17%;
  box-sizing: border-box;
  &:hover {
    border-bottom: 3px solid orange;
  }
  &:visited {
    color: black;
  }
  &:link {
    color: black;
  }
`;

const CartQuantity = styled.p<Value>`
  position: absolute;
  right: 6.7em;
  bottom: 0.3em;
  font-size: 13px;
  font-weight: 500;
  background-color: orange;
  border-radius: 50%;
  padding: 0.3em;
  z-index: 1;
  color: white;
  height: 10px;
  line-height: 10px;
  text-align: center;
  display: ${(props) => (props.value === 0 ? "none" : "block")};
`;

interface Quantity {
  cartCounter: number;
  cartInformation: any;
  setBasket: Function;
  setBasketOpen: Function;
  basketOpen: boolean;
}

interface Value {
  value: number;
}

export interface BasketItems {
  empty: boolean;
  full: boolean;
}

export const Nav = ({
  cartCounter,
  cartInformation,
  setBasket,
  setBasketOpen,
  basketOpen,
}: Quantity) => {
  const updateBasket = (items: any) => {
    let newState: BasketItems = {
      empty: false,
      full: false,
    };
    newState[items as keyof BasketItems] = true;
    setBasket(newState);
  };

  const checkBasketQuantity = () => {
    console.log("counter", cartCounter);
    if (cartCounter === 0) {
      updateBasket("empty");
      setBasketOpen(!basketOpen);
    } else {
      updateBasket("full");
      setBasketOpen(!basketOpen);
    }
  };

  return (
    <>
      <NavContainer>
        <LogoContainer>
          <Logo></Logo>
        </LogoContainer>
        <HeadingsContainer>
          <Headings href="#">Collections</Headings>
          <Headings href="#">Men</Headings>
          <Headings href="#">Women</Headings>
          <Headings href="#">About</Headings>
          <Headings href="#">Contact</Headings>
        </HeadingsContainer>
        <AvatarCartContainer>
          <Avatar alt="avatar" width="40px" src="/avatar.png"></Avatar>
          <CartQuantity value={cartCounter}>{cartCounter}</CartQuantity>
          <Cart
            onClick={checkBasketQuantity}
            style={{ cursor: "pointer" }}
          ></Cart>
        </AvatarCartContainer>
      </NavContainer>
    </>
  );
};
