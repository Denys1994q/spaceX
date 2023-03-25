import styled from "styled-components";

const StyledTitleH3 = styled.h3`
    font-family: "Syne";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    color: #1e1e1e;
`;

interface ITitleH3Props {
    titleText: string;
}

const TitleH3 = ({ titleText }: ITitleH3Props): JSX.Element => {
    return <StyledTitleH3>{titleText}</StyledTitleH3>;
};

export default TitleH3;
