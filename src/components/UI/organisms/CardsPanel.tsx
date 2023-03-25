import { ICardsBox } from "../molecules/CardsBox";

import CardsBox from "../molecules/CardsBox";
import TextItem from "../atoms/TextItem";

export interface ICardsPanel extends ICardsBox {}

const CardsPanel = (props: ICardsPanel) => {
    return (
        <>
            <TextItem
                textItemValue='Clear all'
                fontSize={"24px"}
                lineHeight={"29px"}
                color={"#556B84"}
                textShadow={"none"}
                textAlign={"end"}
                cursor='pointer'
            />
            <CardsBox {...props} />
        </>
    );
};

export default CardsPanel;
