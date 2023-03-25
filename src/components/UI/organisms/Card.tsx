import styled from "styled-components";

import { IPictureProps } from "../atoms/Picture";
import { IBtnsPanelProps } from "../molecules/BtnsPanel";

import Picture from "../atoms/Picture";
import TitleWithDesc from "../molecules/TitleWithDesc";
import BtnsPanel from "../molecules/BtnsPanel";

const CardWrapper = styled.div`
    width: 411px;
    border: 1px solid #d3eaff;
`;

const CardInfoWrapper = styled.div`
    padding: 0 32px;
    text-align: center;
    margin-bottom: 22px;
`;

const CardTitleWrapper = styled.div`
    margin-bottom: 64px;
`;

export interface ICardProps extends IPictureProps, IBtnsPanelProps {
    // card title
    titleText: string;
    // card description
    paragraphValue: string;
    // card btn
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
                <BtnsPanel {...props} secondary />
            </CardInfoWrapper>
        </CardWrapper>
    );
};

export default Card;
