import { useState } from "react";
import { useQuery } from "@apollo/client";
import { TOURS_QUERY } from "../queries";

import BannerTemplate from "../components/templates/BannerTemplate";
import CardsTemplate from "../components/templates/CardsTemplate";

const arrowDown = require("../images/arrow-down.svg").default;
const earthImg = require("../images/earth.png");
const girlImg = require("../images/girl.png");
const astronautImg = require("../images/astronaut.png");

const Home = (): JSX.Element => {
    const bannerSlidesImgs = [earthImg, girlImg, astronautImg];
    const [bannerActiveSlide, setBannerActiveSlide] = useState<number>(0);
    const setBannerActiveSlideIndex = (index: number) => {
        setBannerActiveSlide(index);
    };

    const { loading, error, data } = useQuery(TOURS_QUERY);

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
            {loading && "Loading"}
            {error && "Sorry, something is wrong..."}
            {data && (
                <div id='tours'>
                    <CardsTemplate type='slider' sliderTitle='popular tours' data={data.rockets} offset={3} />
                </div>
            )}
        </section>
    );
};

export default Home;
