import BannerTemplate from "../components/templates/BannerTemplate";
import CardsTemplate from "../components/templates/CardsTemplate";

import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { favouritesToursState } from "../state";

const astronautImg = require("../images/astronaut.png");

const Favourites = () => {
    const favouriteTours = useRecoilValue(favouritesToursState);
    const setFavoutitesTours = useSetRecoilState(favouritesToursState);
    const [_favouritesToursState, setFavouritesToursState] = useRecoilState(favouritesToursState);

    const removeFromFavourites = (id: string) => {
        const newList = _favouritesToursState.filter((_item: any) => _item.id !== id);
        setFavouritesToursState(newList);
    };

    const removeAll = () => {
        setFavoutitesTours([]);
    };

    return (
        <section>
            <BannerTemplate type='static' text='favourites' bannerImg={astronautImg} />
            <CardsTemplate
                type='primary'
                textItemValue='Clear all'
                textItemOnClick={() => removeAll()}
                cardsBoxData={favouriteTours}
                textBtnValue='buy'
                imgBtnSrc={require("../images/delete.png")}
                imgBtnOnClick={(id: string) => removeFromFavourites(id)}
            />
        </section>
    );
};

export default Favourites;
