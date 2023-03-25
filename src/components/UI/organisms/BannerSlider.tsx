import styled from "styled-components";

import Title from "../molecules/Title";
import SliderDots from "../molecules/SliderDots";
import TextWithIcon from "../molecules/TextWithIcon";

const StyledBanner = styled.div`
    padding: 160px 0px 40px 0px;
`;

const StyledTitleWrapper = styled.div`
    margin-top: 60px;
    padding-bottom: 60px;
    text-align: center;
    position: relative;
`;

const StyledAnchorWrapper = styled.div`
    margin: 60px 0px 0px 0px;
`;

export interface IBannerSliderProps {
    text: string;
    spanText?: string;
    slidesImgs: any;
    activeSlideIndex: any;
    onDotClick: any;
    arrowDownSrc?: any;
    textItemValue?: any;
}

const BannerSlider = ({
    text,
    spanText,
    slidesImgs,
    activeSlideIndex,
    onDotClick,
    arrowDownSrc,
    textItemValue,
}: IBannerSliderProps) => {
    const onArrowClick = () => {
        console.log(1);
    };

    return (
        <StyledBanner>
            <StyledTitleWrapper>
                <Title text={text} spanText={spanText} mt={"40px"} />
                <SliderDots
                    slidesImgs={slidesImgs}
                    dotColor={"white"}
                    activeSlideIndex={activeSlideIndex}
                    onDotClick={onDotClick}
                />
            </StyledTitleWrapper>
            <StyledAnchorWrapper>
                <TextWithIcon
                    display={"flex"}
                    textItemValue={textItemValue}
                    arrowDownSrc={arrowDownSrc}
                    onArrowClick={onArrowClick}
                />
            </StyledAnchorWrapper>
        </StyledBanner>
    );
};

export default BannerSlider;
