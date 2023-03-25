import styled from "styled-components";

import ImgBtn from "../atoms/ImgBtn";

interface ISliderControllerProps {
    prevSrc: string;
    nextSrc: string;
    onNextBtn: any;
    onPrevBtn: any;
}

const SliderControllerWrapper = styled.div<any>`
    display: flex;
    gap: 16px;
`;

const SliderController = ({ prevSrc, nextSrc, onPrevBtn, onNextBtn }: ISliderControllerProps) => {
    return (
        <SliderControllerWrapper>
            <ImgBtn onClick={onPrevBtn} imgBtnSrc={prevSrc} imgBtnWidth='44px' imgBtnHeight='44px' />
            <ImgBtn onClick={onNextBtn} imgBtnSrc={nextSrc} imgBtnWidth='44px' imgBtnHeight='44px' />
        </SliderControllerWrapper>
    );
};

export default SliderController;
