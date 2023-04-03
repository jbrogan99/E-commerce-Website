import styled from "styled-components";
import { Basket } from "../basket";

export const Button = styled.button`
  color: white;
  padding: 1em;
  background-color: #ff8400;
  border-radius: 10px;
  border: none;
  flex-grow: 1;
  font-size: 15px;
  font-weight: bold;
`;
interface Counter {
  adjustCount: Function;
  count: number;
  setCartCounter: Function;
  cartCounter: number;
  setCartInformation: Function;
  src: any;
  title: string;
  value: number | string;
  buttonText: string | number;
  basket: any;
  setBasket: Function;
  setBasketOpen: Function;
  basketOpen: any;
}

export const AddToCart = ({
  count,
  setCartCounter,
  adjustCount,
  setCartInformation,
  src,
  title,
  value,
  cartCounter,
  buttonText,
  basket,
  setBasket,
  setBasketOpen,
  basketOpen,
}: Counter) => {
  //need to add cart logo

  const addToCart = () => {
    setCartCounter(count + cartCounter);
    adjustCount(0);
    setCartInformation({
      src: src,
      title: title,
      quantity: cartCounter + count,
      value: value,
    });
    if (count > 0) {
      setBasket({
        full: true,
        empty: false,
      });
      console.log("basketOpen", basketOpen);
      console.log("full", basket.full);
    }
  };

  return (
    <>
      <Button onClick={addToCart}>{buttonText}</Button>
    </>
  );
};
