import styled from "styled-components";

import Title from "../molecules/Title";

const StyledBanner = styled.div`
    padding: 160px 0px 90px 0px;
`;

const StyledTitleWrapper = styled.div`
    padding: 60px;
    text-align: center;
    position: relative;
`;

export interface IBannerStaticProps {
    text: string;
    spanText?: string;
}

const BannerStatic = ({ text, spanText }: IBannerStaticProps) => {
    return (
        <StyledBanner>
            <StyledTitleWrapper>
                <Title text={text} spanText={spanText} mt={"40px"} />
            </StyledTitleWrapper>
        </StyledBanner>
    );
};

export default BannerStatic;
