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

const BtnsPanel = (props: IBtnsPanelProps): JSX.Element => {
    return (
        <>
            {props.secondary ? (
                <StyledBtnsPanel>
                    <TextBtn {...props} padding={"12px 112px"} />
                    <ImgBtn {...props} />
                </StyledBtnsPanel>
            ) : (
                <StyledBtnsPanel>
                    <ImgBtn {...props} />
                    <TextBtn {...props} padding={"12px 20px"} />
                </StyledBtnsPanel>
            )}
        </>
    );
};

export default BtnsPanel;
