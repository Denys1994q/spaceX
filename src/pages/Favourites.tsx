import BannerTemplate from "../components/templates/BannerTemplate";
import CardsTemplate from "../components/templates/CardsTemplate";

const astronautImg = require("../images/astronaut.png");

const Favourites = () => {
    return (
        <section>
            <BannerTemplate type='static' text='favourites' bannerImg={astronautImg} />
            <CardsTemplate
                type='primary'
                cardsBoxData={[1, 2]}
                pictureSrc={require("../images/earth.png")}
                titleText={"extraordinary tour"}
                paragraphValue={"Lorem ipsum dolor sit amet consectetur adipiscing elit"}
                imgBtnSrc={require("../images/delete.png")}
                textBtnValue='buy'
            />
        </section>
    );
};

export default Favourites;
