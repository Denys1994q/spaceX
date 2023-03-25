import { useState } from "react";

import BannerTemplate from "../components/templates/BannerTemplate";
import CardsTemplate from "../components/templates/CardsTemplate";

const arrowDown = require("../images/arrow-down.svg").default;
const earthImg = require("../images/earth.png");
const girlImg = require("../images/girl.png");
const astronautImg = require("../images/astronaut.png");

const Home = (): JSX.Element => {
    const bannerSlidesImgs = [earthImg, girlImg, astronautImg];
    const cardsSlidesImgs = [
        earthImg,
        earthImg,
        earthImg,
        girlImg,
        girlImg,
        girlImg,
        astronautImg,
        astronautImg,
        astronautImg,
    ];
    const [bannerActiveSlide, setBannerActiveSlide] = useState<number>(0);
    const setBannerActiveSlideIndex = (index: number) => {
        setBannerActiveSlide(index);
    };
    return (
        <section>
            <BannerTemplate
                type='slider'
                text='the space is waiting for'
                spanText='you'
                activeSlideIndex={bannerActiveSlide}
                slidesImgs={bannerSlidesImgs}
                onDotClick={setBannerActiveSlideIndex}
                textItemValue='Explore Tours'
                arrowDownSrc={arrowDown}
                bannerImg={bannerSlidesImgs[bannerActiveSlide]}
            />
            <CardsTemplate type='slider' sliderTitle='popular tours' data={cardsSlidesImgs} offset={3} />
        </section>
    );
};

export default Home;
