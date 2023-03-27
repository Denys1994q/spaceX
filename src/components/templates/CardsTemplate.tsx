import styled from "styled-components";

import { ISlider } from "../UI/organisms/CardsSlider";
import { ICardsBox } from "../UI/molecules/CardsBox";

import CardsSlider from "../UI/organisms/CardsSlider";
import CardsPanel from "../UI/organisms/CardsPanel";
import { ITextItemProps } from "../UI/atoms/TextItem";

const CardsWrapper = styled.div`
    max-width: 1440px;
    padding: 0 80px;
    margin: 80px auto;
`;

interface ICardsTemplateSliderProps extends ISlider {
    type: "slider";
}

interface ICardsTemplatePanelProps extends ICardsBox, ITextItemProps {
    type: "primary";
}
const CardsTemplate = (props: ICardsTemplateSliderProps | ICardsTemplatePanelProps) => {
    return (
        <>
            <CardsWrapper>
                {props.type === "slider" && <CardsSlider {...props} />}
                {props.type === "primary" && <CardsPanel {...props} />}
            </CardsWrapper>
        </>
    );
};

export default CardsTemplate;
