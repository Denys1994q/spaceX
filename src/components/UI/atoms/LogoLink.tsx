import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";

const StyledLogo = styled.img`
    width: ${props => props.width || "230px"}};
    height: ${props => props.height || "42px"};
`;

export interface ILogoLinkProps {
    logoLinkWidth?: string;
    logoLinkHeight?: string;
    logoLinkSrc: string;
    logoLinkTo: string;
}

const LogoLink = ({ logoLinkSrc, logoLinkWidth, logoLinkHeight, logoLinkTo }: ILogoLinkProps): JSX.Element => {
    const scroller = Scroll.scroller;
    const scrollToTop = () => {
        scroller.scrollTo("start", {
            duration: 500,
            delay: 100,
            smooth: true,
            offset: -80,
        });
    };
    return (
        <Link to={logoLinkTo} onClick={scrollToTop}>
            <StyledLogo src={logoLinkSrc} alt='logo-image' width={logoLinkWidth} height={logoLinkHeight} />
        </Link>
    );
};

export default LogoLink;
