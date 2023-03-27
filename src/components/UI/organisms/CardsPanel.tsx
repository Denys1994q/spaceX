import { ICardsBox } from "../molecules/CardsBox";

import CardsBox from "../molecules/CardsBox";
import TextItem, { ITextItemProps } from "../atoms/TextItem";

interface ICardsPanel extends ICardsBox, ITextItemProps {}

const CardsPanel = (props: ICardsPanel) => {
    return (
        <>
            {props.cardsBoxData.length > 0 && (
                <TextItem
                    {...props}
                    textItemValue={props.textItemValue}
                    fontSize={"24px"}
                    lineHeight={"29px"}
                    color={"#556B84"}
                    textShadow={"none"}
                    textAlign={"end"}
                    cursor='pointer'
                    textItemOnClick={() => props.textItemOnClick()}
                />
            )}
            <CardsBox {...props} />
        </>
    );
};

export default CardsPanel;
