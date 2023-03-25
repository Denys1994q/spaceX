import styled from "styled-components";

const StyledParagraph = styled.p`
    font-size: 24px;
    line-height: 29px;
    color: #556b84;
`;

interface IParagraphProps {
    paragraphValue: string;
}

const Paragraph = ({ paragraphValue }: IParagraphProps): JSX.Element => {
    return <StyledParagraph>{paragraphValue}</StyledParagraph>;
};

export default Paragraph;
