import styled from "styled-components";

const StyledTextItem = styled.div<any>`
    font-size: ${props => props.fontSize || "32px"};
    line-height: ${props => props.lineHeight || "38px"};
    color: ${props => props.color || "#ffffff"};
    text-shadow: ${props => props.textShadow || "0px 4px 4px rgba(0, 0, 0, 0.25)"};
    text-align: ${props => props.textAlign};
    cursor: ${props => props.cursor};
`;

export interface ITextItemProps {
    textItemOnClick?: any;
    textItemValue: string;
    fontSize?: string;
    lineHeight?: string;
    color?: string;
    textShadow?: string;
    textAlign?: string;
    cursor?: string;
}

const TextItem = (props: ITextItemProps): JSX.Element => {
    return (
        <StyledTextItem onClick={() => props.textItemOnClick()} {...props}>
            {props.textItemValue}
        </StyledTextItem>
    );
};

export default TextItem;
