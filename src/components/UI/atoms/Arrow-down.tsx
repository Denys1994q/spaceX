import styled from "styled-components";

import { Link } from "react-scroll";

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
    return (
        <Link to='tours' spy={true} smooth={true} offset={-80} duration={300}>
            <StyledArrowDown src={arrowDownSrc} onClick={onArrowClick} alt={"arrow-down"} />
        </Link>
    );
};

export default ArrowDown;
