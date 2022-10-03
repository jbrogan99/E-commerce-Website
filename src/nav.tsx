import React, { useState } from "react";
import { ReactComponent as Logo } from "./img/logo.svg";
import { ReactComponent as Cart } from "./img/cart.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.section`
  display: grid;
  grid-template-columns: auto 45% 1fr;
  grid-template-rows: 30px;
  margin: 2% 10% 0 10%;
  padding-bottom: 2%;
`;

const AvatarCartContainer = styled.section`
  grid-column: 3/4;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 3em;
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
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  grid-column: 2/3;
  width: 100%;
  text-align: center;
`;
const Headings = styled.a`
  text-decoration: none;
  border-bottom: 3px solid transparent;
  padding: 41px 0px;
  width: 17%;
  box-sizing: border-box;
  &:hover {
    border-bottom: 3px solid orange;
    box-sizing: border-box;
  }
  &:active {
    color: black;
  }
`;

interface Quantity {
  cartCounter: number;
}

export const Nav = ({ cartCounter }: Quantity) => {
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
          <p>{cartCounter}</p>
          <Cart style={{ cursor: "pointer" }}></Cart>
        </AvatarCartContainer>
      </NavContainer>
      <hr></hr>
    </>
  );
};
