import styled from "styled-components";

import Card from "../organisms/Card";

const Wrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    column-gap: 15px;
    row-gap: 15px;
`;

const StyledLi = styled.li`
    display: flex;
`;

export type CardItem = {
    img: string;
    id: string;
    name: string;
    description: string;
};

export interface ICardsBox {
    cardsBoxData: CardItem[];
    imgBtnSrc: string;
    textBtnValue: string;
    imgBtnOnClick?: any;
}

const CardsBox = (props: ICardsBox) => {
    const content = props.cardsBoxData.map((item: CardItem) => {
        return (
            <StyledLi key={item.id}>
                <Card
                    {...props}
                    pictureSrc={item.img}
                    titleText={item.name}
                    paragraphValue={
                        item.description.length > 65 ? item.description.slice(0, 65) + "..." : item.description
                    }
                    imgBtnSrc={props.imgBtnSrc}
                    textBtnValue={props.textBtnValue}
                    imgBtnOnClick={() => props.imgBtnOnClick(item.id)}
                />
            </StyledLi>
        );
    });
    return <Wrapper>{props.cardsBoxData.length > 0 ? content : <h2>Nothing found</h2>}</Wrapper>;
};

export default CardsBox;
