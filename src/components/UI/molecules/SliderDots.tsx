import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import SliderDot from "../atoms/SliderDot";

const StyledSliderDots = styled.ul<any>`
    display: flex;
    flex-wrap: wrap;
    position: ${props => props.position || "absolute"};
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    padding-right: 120px;
    li {
        width: 24px;
    }
    li:not(:last-child) {
        margin-right: 8px;
    }
    @media (max-width: 1200px) {
        padding-right: 0px;
        top: 100%;
        left: 50%;
        transform: translate(-50%, 0);
    }
`;

interface ISliderDotsProps {
    slidesImgs: string[];
    dotColor?: string;
    onDotClick: any;
    activeSlideIndex: number;
    position?: string;
}

const SliderDots = ({
    slidesImgs,
    dotColor,
    activeSlideIndex,
    onDotClick,
    position,
}: ISliderDotsProps): JSX.Element => {
    const content = slidesImgs.map((item: any, index: number) => {
        return (
            <li key={uuidv4()} onClick={() => onDotClick(index)}>
                <SliderDot key={index} dotColor={dotColor} className={activeSlideIndex === index ? "active" : ""} />
            </li>
        );
    });

    return (
        <>
            <StyledSliderDots position={position}>{content}</StyledSliderDots>
        </>
    );
};

export default SliderDots;
