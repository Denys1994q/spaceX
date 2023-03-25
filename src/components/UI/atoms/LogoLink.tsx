import styled from "styled-components";
import { Link } from "react-router-dom";

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
        <Link to={logoLinkTo}>
            <StyledLogo src={logoLinkSrc} alt='logo-image' width={logoLinkWidth} height={logoLinkHeight} />
        </Link>
    );
};

export default LogoLink;
