import styled from "styled-components";

import { IImgBtnProps } from "../atoms/ImgBtn";

import ImgBtn from "../atoms/ImgBtn";
import TextBtn from "../atoms/TextBtn";

const StyledBtnsPanel = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

export interface IBtnsPanelProps extends IImgBtnProps {
    imgBtnSrc: string;
    imgBtnBackground?: string;
    secondary?: boolean;
    textBtnValue: string;
    padding?: string;
}

const BtnsPanel = ({ imgBtnSrc, secondary, textBtnValue, imgBtnBackground }: IBtnsPanelProps): JSX.Element => {
    return (
        <>
            {secondary ? (
                <StyledBtnsPanel>
                    <TextBtn textBtnValue={textBtnValue} padding={"12px 112px"} />
                    <ImgBtn imgBtnSrc={imgBtnSrc} imgBtnLinkTo='favourites' imgBtnBackground={imgBtnBackground} />
                </StyledBtnsPanel>
            ) : (
                <StyledBtnsPanel>
                    <ImgBtn imgBtnSrc={imgBtnSrc} imgBtnLinkTo='favourites' imgBtnBackground={imgBtnBackground} />
                    <TextBtn textBtnValue={textBtnValue} padding={"12px 20px"} />
                </StyledBtnsPanel>
            )}
        </>
    );
};

export default BtnsPanel;
