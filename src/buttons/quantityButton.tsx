import React from "react";
import { ReactComponent as Plus } from "../img/plus.svg";
import { ReactComponent as Minus } from "../img/minus.svg";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #f7f7f7;
  width: 35%;
  border-radius: 10px;
  padding: 5px 2px 5px 2px;
`;

const Count = styled.p`
  font-weight: bold;
`;

interface Counter {
  count: number;
  adjustCount: Function;
}

export const QuantityButton = ({ count, adjustCount }: Counter) => {
  console.log(count);

  const increase = () => {
    if (count >= 0) {
      adjustCount((counter: number) => counter + 1);
    }
    return;
  };

  const decrease = () => {
    if (count > 0) {
      adjustCount((counter: number) => counter - 1);
    }
    return;
  };

  return (
    <>
      <Container>
        <Minus onClick={decrease}></Minus>
        <Count>{count}</Count>
        <Plus onClick={increase}></Plus>
      </Container>
    </>
  );
};
