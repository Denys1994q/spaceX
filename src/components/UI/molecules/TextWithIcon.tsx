import styled from "styled-components";

import TextItem from "../atoms/TextItem";
import ArrowDown from "../atoms/Arrow-down";


const StyledTextWithIcon = styled.div<any>`
    display: ${props => props.display};
    gap: 8px;
    justify-content: center;
`;

interface TextWithIconProps {
    textItemValue: string;
    arrowDownSrc: string;
    display?: string;
    onArrowClick?: any;
}

const TextWithIcon = ({ textItemValue, arrowDownSrc, display, onArrowClick }: TextWithIconProps) => {
    return (
        <StyledTextWithIcon display={display}>
            <TextItem textItemValue={textItemValue} />
            <ArrowDown arrowDownSrc={arrowDownSrc} onArrowClick={onArrowClick} />
        </StyledTextWithIcon>
    );
};

export default TextWithIcon;
