import styled from "styled-components";

import { IBannerSliderProps } from "../UI/organisms/BannerSlider";
import { IBannerStaticProps } from "../UI/organisms/BannerStatic";

import BannerStatic from "../UI/organisms/BannerStatic";
import BannerSlider from "../UI/organisms/BannerSlider";

type WrapperProps = {
    activeSlide: string;
};

const BannerWrapper = styled.div<WrapperProps>`
    background: url(${props => props.activeSlide}) no-repeat;
    max-width: 1440px;
    margin: 0px auto;
    background-size: cover;
    margin-bottom: 80px;
    position: relative;
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 2;
    }
    @media (max-width: 600px) {
        margin-bottom: 20px;
    }
`;

const Inner = styled.div`
    position: relative;
    z-index: 3;
`;

interface IBannerTemplateSliderProps extends IBannerSliderProps {
    type: "slider";
    bannerImg: string;
}

interface IBannerTemplateStaticProps extends IBannerStaticProps {
    type: "static";
    bannerImg: string;
}

const BannerTemplate = (props: IBannerTemplateSliderProps | IBannerTemplateStaticProps): JSX.Element => {
    return (
        <>
            <BannerWrapper activeSlide={props.bannerImg}>
                <Inner>
                    {props.type === "slider" && <BannerSlider {...props} />}
                    {props.type === "static" && <BannerStatic {...props} />}
                </Inner>
            </BannerWrapper>
        </>
    );
};

export default BannerTemplate;
