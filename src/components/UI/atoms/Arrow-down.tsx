import styled from "styled-components";

const StyledArrowDown = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
`;

interface IArrowDownProps {
    arrowDownSrc: string;
    onArrowClick?: any;
}

const ArrowDown = ({ arrowDownSrc, onArrowClick }: IArrowDownProps): JSX.Element => {
    return <StyledArrowDown src={arrowDownSrc} onClick={onArrowClick} alt={"arrow-down"} />;
};

export default ArrowDown;
