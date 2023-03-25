import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledImgBtn = styled.button<any>`
    width: ${props => props.width || "53px"};
    height: ${props => props.height || "53px"};
    background: ${props => props.background || "#ececec"};
    &:hover {
        background: #dd377d;
        transition: all 0.4s ease;
    }
`;

const StyledImg = styled.img`
    width: 20px;
    height: 20px;
`;

export interface IImgBtnProps {
    onClick?: () => void;
    imgBtnSrc: string;
    imgBtnLinkTo?: string;
    imgBtnWidth?: string;
    imgBtnHeight?: string;
    imgBtnBackground?: string;
}

const ImgBtn = ({
    onClick,
    imgBtnSrc,
    imgBtnLinkTo,
    imgBtnWidth,
    imgBtnHeight,
    imgBtnBackground,
}: IImgBtnProps): JSX.Element => {
    return (
        <>
            {imgBtnLinkTo ? (
                <Link to={imgBtnLinkTo}>
                    <StyledImgBtn
                        onClick={onClick}
                        width={imgBtnWidth}
                        height={imgBtnHeight}
                        background={imgBtnBackground}>
                        <StyledImg src={imgBtnSrc} />
                    </StyledImgBtn>
                </Link>
            ) : (
                <StyledImgBtn onClick={onClick} width={imgBtnWidth} height={imgBtnHeight} background={imgBtnBackground}>
                    <StyledImg src={imgBtnSrc} />
                </StyledImgBtn>
            )}
        </>
    );
};

export default ImgBtn;
