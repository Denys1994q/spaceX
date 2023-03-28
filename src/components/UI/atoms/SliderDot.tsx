import styled from "styled-components";

type StyledSliderDotProps = {
    dotColor?: string;
};

const StyledSliderDot = styled.div<StyledSliderDotProps>`
    width: 24px;
    height: 24px;
    border: 1px solid ${props => props.dotColor || "#1e1e1e"};
    margin: 20px;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    &.active {
        &:before {
            content: "";
            width: 12px;
            height: 12px;
            background: ${props => props.dotColor || "#1e1e1e"};
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
        }
    }
    @media (max-width: 1200px) {
        margin: 0;
    }
`;

interface ISliderDotProps {
    dotColor?: string;
    className?: string;
}

const SliderDot = ({ dotColor, className }: ISliderDotProps) => {
    return <StyledSliderDot dotColor={dotColor} className={className} />;
};

export default SliderDot;
