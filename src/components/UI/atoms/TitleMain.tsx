import styled from "styled-components";

const StyledTitle = styled.h1`
    font-family: "Syne";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 58px;
    text-transform: uppercase;
    color: #ffffff;
`;

interface ITitleProps {
    text: string;
}

const TitleMain = ({ text }: ITitleProps): JSX.Element => {
    return <StyledTitle>{text}</StyledTitle>;
};

export default TitleMain;
