import styled from "styled-components";
import { ICardProps } from "../organisms/Card";

import Card from "../organisms/Card";

const Wrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    column-gap: 15px;
    row-gap: 15px;
`;

export interface ICardsBox extends ICardProps {
    cardsBoxData: any[];
}

const CardsBox = (props: ICardsBox) => {
    const content = props.cardsBoxData.map((item: any, index: number) => {
        return (
            <li>
                <Card key={index} {...props} />
            </li>
        );
    });
    return <Wrapper>{content}</Wrapper>;
};

export default CardsBox;
