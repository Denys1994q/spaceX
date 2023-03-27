import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { favouritesToursState } from "../../../state";

import CardsSliderTitle from "./CardsSliderTitle";
import SliderDots from "../molecules/SliderDots";
import Card from "./Card";

const earthImg = require("../../../images/earth.png");
const girlImg = require("../../../images/girl.png");
const astronautImg = require("../../../images/astronaut.png");

const CardBox = styled.ul`
    display: flex;
    flex-wrap: wrap;
    column-gap: 15px;
    row-gap: 15px;
`;

const StyledLi = styled.li`
    display: flex;
`;

const SliderDotsWrapper = styled.div`
    position: relative;
    margin-top: 40px;
`;

const favBtn = require("../../../images/heart.png");
const favBtnWhite = require("../../../images/heart-white.png");

export interface ISlider {
    sliderTitle: string;
    data: any[];
    offset: number;
}

const CardsSlider = (props: ISlider): JSX.Element => {
    const [start, setStart] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);

    const favouriteTours = useRecoilValue<any>(favouritesToursState);
    const setFavoutitesTours = useSetRecoilState(favouritesToursState);
    const [_favouritesToursState, setFavouritesToursState] = useRecoilState(favouritesToursState);

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

    const staticSlidesImgs = [earthImg, girlImg, astronautImg, earthImg];

    const imgBtnOnClickFunc = (newItem: any, index: any) => {
        // якщо є списку, видаляємо
        if (favouriteTours.find((it: any) => it.id === newItem.id)) {
            const newList = _favouritesToursState.filter((_item: any) => _item.id !== newItem.id);
            setFavouritesToursState(newList);
        } else {
            // якщо немає, додаємо
            setFavoutitesTours((old: any) => {
                return [...old, { img: staticSlidesImgs[index], ...newItem }];
            });
        }
    };

    useEffect(() => {
        window.localStorage.setItem("favourites", JSON.stringify(favouriteTours));
    }, [favouriteTours]);

    const content = props.data.slice(start, start + props.offset).map((item: any, index: number) => {
        return (
            <StyledLi>
                <Card
                    key={item.id}
                    pictureSrc={staticSlidesImgs[index]}
                    titleText={item.name}
                    paragraphValue={
                        item.description.length > 65 ? item.description.slice(0, 65) + "..." : item.description
                    }
                    imgBtnSrc={favouriteTours.find((it: any) => it.id === item.id) ? favBtnWhite : favBtn}
                    imgBtnBackground={favouriteTours.find((it: any) => it.id === item.id) ? "#dd377d" : ""}
                    imgBtnOnClick={() => imgBtnOnClickFunc(item, index)}
                    textBtnValue='buy'
                />
            </StyledLi>
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
