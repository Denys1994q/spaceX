import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

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
    return (
        <ScrollLink to='start' spy={true} smooth={true} offset={-80} duration={300}>
            <Link to={logoLinkTo}>
                <StyledLogo src={logoLinkSrc} alt='logo-image' width={logoLinkWidth} height={logoLinkHeight} />
            </Link>
        </ScrollLink>
    );
};

export default LogoLink;
