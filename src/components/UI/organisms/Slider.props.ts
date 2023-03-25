import { ICardProps } from "./Card";

export interface ISlider {
 // prev btn image
 prevBtnSrc: string;
 // next btn image
 nextBtnSrc: string;
 // data for slides
 slidesImgs: string[];
 // offset
 offset: number
}

export interface ISliderProps {
   slider: ISlider,
   card: ICardProps;
}