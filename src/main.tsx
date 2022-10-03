import React, { Children, useEffect, useState } from "react";
import styled from "styled-components";
import { AddToCart } from "./buttons/addToCart";
import { QuantityButton } from "./buttons/quantityButton";
import largeImage1 from "./image-product-1.jpg";
import thumbnail1 from "./image-product-1-thumbnail.jpg";
import largeImage2 from "./image-product-2.jpg";
import thumbnail2 from "./image-product-2-thumbnail.jpg";
import largeImage3 from "./image-product-3.jpg";
import thumbnail3 from "./image-product-3-thumbnail.jpg";
import largeImage4 from "./image-product-4.jpg";
import thumbnail4 from "./image-product-4-thumbnail.jpg";
import { useHighlightImage } from "./imageHighlightHook";

interface MainContent {
  smallHeading: string;
  bigHeading: string;
  infoText: string | number;
  productValue: number | string;
  reducedByValue: number | string;
  originalValue: number | string;
  adjustCount: Function;
  count: number;
  cartCounter: number;
  setCartCounter: Function;
}

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 45% auto;
  grid-template-rows: 1fr;
  margin: 3% 12% 7% 12%;
  grid-gap: 10em;
`;

const ProductImgLarge = styled.img`
  overflow: hidden;
  height: auto;
  width: 100%;
  border-radius: 15px;
`;

const ProductImgContainer = styled.section`
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

const ProductImg = styled.img<ProductImgInterface>`
  border: ${(props) => (props.highlight ? "4px solid orange" : "")};
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

interface ProductImgInterface {
  highlight: boolean;
}

export const Main = ({
  adjustCount,
  count,
  smallHeading,
  bigHeading,
  infoText,
  productValue,
  reducedByValue,
  originalValue,
  cartCounter,
  setCartCounter,
}: MainContent) => {
  const [mainImg, setMainImg] = useState(largeImage1);

  const changeImg = (img: any) => {
    switch (img) {
      case "img-one":
        setMainImg(largeImage1);
        updateHighlightedImage("img1");
        break;
      case "img-two":
        setMainImg(largeImage2);
        updateHighlightedImage("img2");
        break;
      case "img-three":
        setMainImg(largeImage3);
        updateHighlightedImage("img3");
        break;
      case "img-four":
        setMainImg(largeImage4);
        updateHighlightedImage("img4");
        break;
      default:
        setMainImg(largeImage1);
    }
  };

  // const [hightlightImgOne, setHighlightImgOne] = useState(false);
  // const [hightlightImgTwo, setHighlightImgTwo] = useState(false);
  // const [hightlightImgThree, setHighlightImgThree] = useState(false);
  // const [hightlightImgFour, setHighlightImgFour] = useState(false);

  // const [imageHighlight, setImageHighlight] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);

  // const updateHighlightedImage = (imagePositionActive: number) => {
  //   const newState = imageHighlight.map((imgValue, index) =>
  //     index === imagePositionActive ? true : false
  //   );
  //   setImageHighlight(newState);
  // };

  // const [imageHighlight, setImageHighlight] = useState<ImageObject>({
  //   img1: true,
  //   img2: false,
  //   img3: false,
  //   img4: false,
  // });

  // const updateHighlightedImage = (image: string) => {
  //   let newState: ImageObject = {
  //     img1: false,
  //     img2: false,
  //     img3: false,
  //     img4: false,
  //   };
  //   newState[image] = true;
  //   setImageHighlight(newState);
  // };

  const { imagesState, updateHighlightedImage } = useHighlightImage();

  return (
    <>
      <MainContainer>
        <ProductImgContainer>
          <ProductImgLarge className="large" src={mainImg} />
          <ProductImgSmallContainer>
            <ProductImg
              // highlight={hightlightImgOne}
              // highlight={imageHighlight[0]}
              highlight={imagesState.img1}
              className="small"
              onClick={() => changeImg("img-one")}
              src={thumbnail1}
            />
            <ProductImg
              // highlight={hightlightImgTwo}
              // highlight={imageHighlight[1]}
              highlight={imagesState.img2}
              className="small"
              onClick={() => changeImg("img-two")}
              src={thumbnail2}
            />
            <ProductImg
              // highlight={imageHighlight[2]}
              highlight={imagesState.img3}
              // highlight={hightlightImgThree}
              className="small"
              onClick={() => changeImg("img-three")}
              src={thumbnail3}
            />
            <ProductImg
              // highlight={imageHighlight[3]}
              highlight={imagesState.img4}
              // highlight={hightlightImgFour}
              className="small"
              onClick={() => changeImg("img-four")}
              src={thumbnail4}
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
              <QuantityButton count={count} adjustCount={adjustCount} />
              <AddToCart
                cartCounter={cartCounter}
                setCartCounter={setCartCounter}
                count={count}
                adjustCount={adjustCount}
              />
            </ButtonsContainer>
          </>
        </TextContainer>
      </MainContainer>
    </>
  );
};
