import styled from "styled-components";

const StyledTitleSpan = styled.span`
    font-family: "Syne";
    font-style: normal;
    font-weight: 800;
    font-size: 310px;
    line-height: 255px;
    color: #ffffff;
    text-transform: uppercase;
`;

interface TitleSpanProps {
    spanText: string;
}

const TitleSpan = ({ spanText }: TitleSpanProps) => {
    return <StyledTitleSpan>{spanText}</StyledTitleSpan>;
};

export default TitleSpan;
