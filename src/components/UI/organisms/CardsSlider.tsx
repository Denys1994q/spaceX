import styled from "styled-components";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import CardsSliderTitle from "./CardsSliderTitle";
import SliderDots from "../molecules/SliderDots";
import Card from "./Card";

const CardBox = styled.ul`
    display: flex;
    flex-wrap: wrap;
    column-gap: 15px;
    row-gap: 15px;
`;

const SliderDotsWrapper = styled.div`
    position: relative;
    margin-top: 40px;
`;

export interface ISlider {
    sliderTitle: string;
    data: any[];
    offset: number;
}

const CardsSlider = (props: ISlider): JSX.Element => {
    const [start, setStart] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);

    const showNextSlides = () => {
        if (start < props.data.length - props.offset) {
            setStart(start => start + props.offset);
            setActiveSlide(slide => slide + 1);
        }
    };

    const showPrevSlides = () => {
        if (start > 0) {
            setStart(start => start - props.offset);
            setActiveSlide(slide => slide - 1);
        }
    };

    const setActiveSlideIndex = (index: number) => {
        setActiveSlide(index);
    };

    useEffect(() => {
        setStart(activeSlide * props.offset);
    }, [activeSlide]);

    const content = props.data.slice(start, start + props.offset).map((item: any, index: number) => {
        return (
            <li>
                <Card
                    key={uuidv4()}
                    pictureSrc={item}
                    titleText={"koko"}
                    paragraphValue={"lalala"}
                    imgBtnSrc={""}
                    textBtnValue='buy'
                />
            </li>
        );
    });

    return (
        <>
            <CardsSliderTitle sliderTitle={props.sliderTitle} onPrevBtn={showPrevSlides} onNextBtn={showNextSlides} />
            <CardBox>{content}</CardBox>
            <SliderDotsWrapper>
                <SliderDots
                    slidesImgs={props.data.slice(0, Math.ceil(props.data.length / props.offset))}
                    onDotClick={setActiveSlideIndex}
                    activeSlideIndex={activeSlide}
                    dotColor='black'
                />
            </SliderDotsWrapper>
        </>
    );
};

export default CardsSlider;
