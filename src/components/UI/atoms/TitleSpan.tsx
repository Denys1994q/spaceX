import styled from "styled-components";

const StyledTitleSpan = styled.span`
    font-family: "Syne";
    font-style: normal;
    font-weight: 800;
    font-size: 310px;
    line-height: 255px;
    color: #ffffff;
    text-transform: uppercase;
    @media (max-width: 1200px) {
        font-size: 168px;
        line-height: 160px;
    }
    @media (max-width: 700px) {
        font-size: 82px;
        line-height: 110px;
    }
`;

interface TitleSpanProps {
    spanText: string;
}

const TitleSpan = ({ spanText }: TitleSpanProps) => {
    return <StyledTitleSpan>{spanText}</StyledTitleSpan>;
};

export default TitleSpan;
