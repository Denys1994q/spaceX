import styled from "styled-components";

import SliderController from "../molecules/SliderController";
import TitleSecondary from "../atoms/TitleSecondary";

const CardsSliderTitleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 43px;
`;

interface ICardsSliderTitleProps {
    prevSrc?: string;
    nextSrc?: string;
    sliderTitle: string;
    onPrevBtn: any;
    onNextBtn: any;
}

const prev = require("../../../images/prev-icon.svg").default;
const next = require("../../../images/next-icon.svg").default;

const CardsSliderTitle = ({ sliderTitle, onPrevBtn, onNextBtn }: ICardsSliderTitleProps): JSX.Element => {
    return (
        <CardsSliderTitleWrapper>
            <TitleSecondary text={sliderTitle} />
            <SliderController prevSrc={prev} nextSrc={next} onPrevBtn={onPrevBtn} onNextBtn={onNextBtn} />
        </CardsSliderTitleWrapper>
    );
};

export default CardsSliderTitle;
