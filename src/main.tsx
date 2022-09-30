import React, { Children } from "react";
import styled from "styled-components";
import { AddToCart } from "./buttons/addToCart";
import { QuantityButton } from "./buttons/quantityButton";

interface MainContent {
  smallHeading: string;
  bigHeading: string;
  infoText: string | number;
  productValue: number | string;
  reducedByValue: number | string;
  originalValue: number | string;
}

export const Main = ({
  smallHeading,
  bigHeading,
  infoText,
  productValue,
  reducedByValue,
  originalValue,
}: MainContent) => {
  const MainContainer = styled.main`
    display: grid;
    grid-template-columns: 45% auto;
    grid-template-rows: 1fr;
    margin: 3% 12% 7% 12%;
    grid-gap: 10em;
  `;

  const ProductImgContainer = styled.section`
    & .large {
      overflow: hidden;
      height: auto;
      width: 100%;
    }
    grid-column: 1/2;
    grid-row: 1/2;
  `;

  const TextContainer = styled.section`
    grid-column: 2/3;
    grid-row: 1/2;
  `;

  const ProductImgSmallContainer = styled.section`
    & .small {
      overflow: hidden;
    }
    display: flex;
    gap: 2em;
    margin-top: 2em;
    grid-column: 1/2;
    grid-row: 1/2;
  `;

  const ProductImg = styled.img`
    border-radius: 15px;
  `;

  const SmallHeading = styled.h4`
    color: #ff8400;
    margin-top: 13%;
    font-size: 18px;
    margin-bottom: 0;
  `;

  const BigHeading = styled.h1`
    font-weight: 700;
    font-size: 32px;
    margin-top: 5%;
  `;

  const InfoText = styled.p`
    line-height: 1.6;
    color: grey;
    margin-bottom: 0;
    font-size: 17px;
  `;

  const ReducedByValue = styled.p`
    display: inline-block;
    margin-bottom: 0.5em;
    padding: 0.4% 1.2% 0.4% 1.2%;
    background-color: #ffedce;
    color: #ff8400;
    border-radius: 5px;
    font-weight: 650;
    font-size: 15px;
  `;

  const ProductValue = styled.p`
    display: inline-block;
    margin-right: 1em;
    margin-bottom: 0.5em;
    &::after {
      content: ".00";
    }
    font-weight: 700;
    font-size: 25px;
  `;

  const OriginalValue = styled.p`
    text-decoration: line-through;
    color: grey;
    margin-top: 0;
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 20%;
    &::after {
      content: ".00";
    }
  `;

  const ButtonsContainer = styled.section`
    display: flex;
    flex-direction: row;
    gap: 1em;
  `;

  return (
    <>
      <MainContainer>
        <ProductImgContainer>
          <ProductImg className="large" src="/image-product-1.jpg" />
          <ProductImgSmallContainer>
            <ProductImg
              className="small"
              src="/image-product-1-thumbnail.jpg"
            />
            <ProductImg
              className="small"
              src="/image-product-2-thumbnail.jpg"
            />
            <ProductImg
              className="small"
              src="/image-product-3-thumbnail.jpg"
            />
            <ProductImg
              className="small"
              src="/image-product-4-thumbnail.jpg"
            />
          </ProductImgSmallContainer>
        </ProductImgContainer>

        <TextContainer>
          <>
            <SmallHeading>{smallHeading}</SmallHeading>
            <BigHeading style={{ whiteSpace: "pre-line" }}>
              {bigHeading}
            </BigHeading>
            <InfoText>{infoText}</InfoText>

            <ProductValue>{productValue}</ProductValue>
            <ReducedByValue>{reducedByValue}</ReducedByValue>

            <OriginalValue>{originalValue}</OriginalValue>

            <ButtonsContainer>
              <QuantityButton count={0} />
              <AddToCart />
            </ButtonsContainer>
          </>
        </TextContainer>
      </MainContainer>
    </>
  );
};
