import styled from "styled-components";

const StyledTitle = styled.h2`
    font-family: "Syne";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 38px;
    text-transform: uppercase;
    color: #1e1e1e;
`;

interface ITitleProps {
    text: string;
}

const TitleSecondary = ({ text }: ITitleProps): JSX.Element => {
    return <StyledTitle>{text}</StyledTitle>;
};

export default TitleSecondary;
