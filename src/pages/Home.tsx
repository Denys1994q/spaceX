import { useState, CSSProperties } from "react";
import { useQuery } from "@apollo/client";
import { TOURS_QUERY } from "../queries";
import ClipLoader from "react-spinners/ClipLoader";

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

    const loaderStyles: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "black",
    };

    // кількість карток (слайдів) на сторінці залежно від розміру екрану
    let offset = 3;
    if (window.innerWidth < 1000 && window.innerWidth > 700) {
        offset = 2;
    } else if (window.innerWidth < 700) {
        offset = 1;
    }

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
            {loading && (
                <ClipLoader loading={loading} cssOverride={loaderStyles} size={50} aria-label='Loading Spinner' />
            )}
            {error && <p>Sorry, something is wrong...</p>}
            {data && (
                <div id='tours'>
                    <CardsTemplate type='slider' sliderTitle='popular tours' data={data.rockets} offset={offset} />
                </div>
            )}
        </section>
    );
};

export default Home;
