import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";

const StyledImgBtn = styled.button<any>`
    width: ${props => props.width || "53px"};
    height: ${props => props.height || "53px"};
    background: ${props => props.background || "#ececec"};
    cursor: pointer;
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
    imgBtnOnClick?: any;
    imgBtnSrc: string;
    imgBtnLinkTo?: string;
    imgBtnWidth?: string;
    imgBtnHeight?: string;
    imgBtnBackground?: string;
}

const ImgBtn = ({
    imgBtnOnClick,
    imgBtnSrc,
    imgBtnLinkTo,
    imgBtnWidth,
    imgBtnHeight,
    imgBtnBackground,
}: IImgBtnProps): JSX.Element => {
    const scroller = Scroll.scroller;
    const scrollToTop = () => {
        scroller.scrollTo("start", {
            duration: 500,
            delay: 100,
            smooth: true,
            offset: -80,
        });
    };
    return (
        <>
            {imgBtnLinkTo ? (
                <Link to={imgBtnLinkTo} onClick={scrollToTop}>
                    <StyledImgBtn
                        onClick={imgBtnOnClick}
                        width={imgBtnWidth}
                        height={imgBtnHeight}
                        background={imgBtnBackground}>
                        <StyledImg src={imgBtnSrc} />
                    </StyledImgBtn>
                </Link>
            ) : (
                <StyledImgBtn
                    onClick={imgBtnOnClick}
                    width={imgBtnWidth}
                    height={imgBtnHeight}
                    background={imgBtnBackground}>
                    <StyledImg src={imgBtnSrc} />
                </StyledImgBtn>
            )}
        </>
    );
};

export default ImgBtn;
