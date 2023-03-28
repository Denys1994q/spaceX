import styled from "styled-components";

type StyledTextBtnProps = {
    padding?: string;
};

const StyledTextBtn = styled.button<StyledTextBtnProps>`
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
    secondary?: boolean;
}

let secondaryBtnPadding = "12px 112px";
if (window.innerWidth < 1300) {
    secondaryBtnPadding = "12px 70px";
}

const TextBtn = ({ onClick, textBtnValue, secondary }: ITextBtnProps): JSX.Element => {
    return (
        <StyledTextBtn onClick={onClick} padding={secondary ? secondaryBtnPadding : "12px 20px"}>
            {textBtnValue}
        </StyledTextBtn>
    );
};

export default TextBtn;
