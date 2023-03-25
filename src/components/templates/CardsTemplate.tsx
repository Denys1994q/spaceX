import styled from "styled-components";

import { ISlider } from "../UI/organisms/CardsSlider";

import { ICardsPanel } from "../UI/organisms/CardsPanel";

import CardsSlider from "../UI/organisms/CardsSlider";
import CardsPanel from "../UI/organisms/CardsPanel";

const CardsWrapper = styled.div`
    max-width: 1440px;
    padding: 0 80px;
    margin: 80px auto;
`;

interface ICardsTemplateSliderProps extends ISlider {
    type: "slider";
}

interface ICardsTemplatePanelProps extends ICardsPanel {
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
