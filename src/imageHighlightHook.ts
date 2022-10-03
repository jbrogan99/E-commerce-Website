import { useState } from "react";

interface ImageObject {
    img1: boolean;
    img2: boolean;
    img3: boolean;
    img4: boolean;
    [key: string]: boolean;
  }

export const useHighlightImage = () => {
    const [imageHighlight, setImageHighlight] = useState<ImageObject>({
        img1: true,
        img2: false,
        img3: false,
        img4: false,
      });
    
    return {
        imagesState: imageHighlight,
        updateHighlightedImage: returnHighlightedImageFunction(setImageHighlight)
    }
}

const returnHighlightedImageFunction = (setImageHighlight: Function) => {
    const updateHighlightedImage = (image: string) => {
        let newState: ImageObject = {
            img1: false,
            img2: false,
            img3: false,
            img4: false,
        };
        newState[image] = true;
        setImageHighlight(newState);
    };
    
    return updateHighlightedImage
}