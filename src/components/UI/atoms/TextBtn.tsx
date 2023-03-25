import styled from "styled-components";

const StyledTextBtn = styled.button<any>`
    padding: ${props => props.padding};
    font-family: "Syne";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    background: #d3eaff;
    text-transform: uppercase;
    &:hover {
        transform: translateY(-4px);
        background: rgb(103 174 239);
        transition: all 0.4s ease;
    }
`;

interface ITextBtnProps {
    onClick?: () => void;
    textBtnValue: string;
    padding?: string;
}

const TextBtn = ({ onClick, textBtnValue, padding }: ITextBtnProps): JSX.Element => {
    return <StyledTextBtn onClick={onClick} padding={padding}>{textBtnValue}</StyledTextBtn>;
};

export default TextBtn;
