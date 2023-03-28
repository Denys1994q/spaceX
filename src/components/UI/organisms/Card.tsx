import styled from "styled-components";

import { IPictureProps } from "../atoms/Picture";
import { IBtnsPanelProps } from "../molecules/BtnsPanel";

import Picture from "../atoms/Picture";
import TitleWithDesc from "../molecules/TitleWithDesc";
import BtnsPanel from "../molecules/BtnsPanel";

const CardWrapper = styled.div`
    width: 411px;
    border: 1px solid #d3eaff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1400px) {
        width: 380px;
    }
    @media (max-width: 1300px) {
        width: 300px;
    }
    @media (max-width: 400px) {
        width: 100%;
    }
`;

const CardInfoWrapper = styled.div`
    padding: 0 32px;
    text-align: center;
    margin-bottom: 22px;
    @media (max-width: 1400px) {
        padding: 0 12px;
    }
    @media (max-width: 400px) {
        padding: 0 7px;
    }
`;

const CardTitleWrapper = styled.div`
    margin-bottom: 64px;
    @media (max-width: 400px) {
        margin-bottom: 22px;
    }
`;

export interface ICardProps extends IPictureProps, IBtnsPanelProps {
    titleText: string;
    paragraphValue: string;
    imgBtnSrc: string;
}

const Card = (props: ICardProps): JSX.Element => {
    return (
        <CardWrapper>
            <Picture {...props} />
            <CardInfoWrapper>
                <CardTitleWrapper>
                    <TitleWithDesc {...props} />
                </CardTitleWrapper>
            </CardInfoWrapper>
            <CardInfoWrapper>
                <BtnsPanel {...props} secondary />
            </CardInfoWrapper>
        </CardWrapper>
    );
};

export default Card;
