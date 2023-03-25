import styled from "styled-components";
import { useState, useEffect } from "react";

import { ISliderProps } from "./Slider.props";

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

const CardsSlider = ({ slider, card }: ISliderProps): JSX.Element => {
    const [start, setStart] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);

    const showNextSlides = () => {
        if (start < slider.slidesImgs.length - slider.offset) {
            setStart(start => start + slider.offset);
            setActiveSlide(slide => slide + 1);
            console.log(activeSlide);
        }
    };

    const showPrevSlides = () => {
        if (start > 0) {
            setStart(start => start - slider.offset);
            setActiveSlide(slide => slide - 1);
        }
    };

    const setActiveSlideIndex = (index: number) => {
        setActiveSlide(index);
    };

    useEffect(() => {
        setStart(activeSlide * slider.offset);
    }, [activeSlide]);

    const content = slider.slidesImgs.slice(start, start + slider.offset).map((item: any, index: number) => {
        return (
            <li>
                <Card
                    key={index}
                    pictureSrc={item}
                    pictureWidth={card.pictureWidth}
                    pictureHeight={card.pictureHeight}
                    titleText={card.titleText}
                    paragraphValue={card.paragraphValue}
                    imgBtnSrc={card.imgBtnSrc}
                    textBtnValue='buy'
                />
            </li>
        );
    });

    return (
        <>
            <CardsSliderTitle
                sliderTitle={"popular tours"}
                prevSrc={slider.prevBtnSrc}
                nextSrc={slider.nextBtnSrc}
                onPrevBtn={showPrevSlides}
                onNextBtn={showNextSlides}
            />
            <CardBox>{content}</CardBox>
            <SliderDotsWrapper>
                <SliderDots
                    slidesImgs={slider.slidesImgs.slice(0, Math.ceil(slider.slidesImgs.length / slider.offset))}
                    onDotClick={setActiveSlideIndex}
                    activeSlideIndex={activeSlide}
                    dotColor='black'
                />
            </SliderDotsWrapper>
        </>
    );
};

export default CardsSlider;
