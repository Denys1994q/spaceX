import styled from "styled-components";

import { ILogoLinkProps } from "../atoms/LogoLink";
import { INavbarLinks } from "../molecules/NavBarLinks";
import { IBtnsPanelProps } from "../molecules/BtnsPanel";

import LogoLink from "../atoms/LogoLink";
import NavbarLinks from "../molecules/NavBarLinks";
import BtnsPanel from "../molecules/BtnsPanel";

const StyledNavBar = styled.div<any>`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    position: ${props => props.position};
    width: 100%;
    max-width: 1440px;
    padding: 13px 80px;
    z-index: 4;
    background: rgba(30, 30, 30, 0.48);
    @media (max-width: 900px) {
        justify-content: center;
        gap: 15px;
        padding: 13px;
    }
`;

export interface INavBarProps extends ILogoLinkProps, INavbarLinks, IBtnsPanelProps {
    position?: string;
}

const NavBar = (props: INavBarProps) => {
    return (
        <StyledNavBar position={props.position}>
            <LogoLink {...props} />
            <NavbarLinks {...props} />
            <BtnsPanel {...props} imgBtnLinkTo='favourites' />
        </StyledNavBar>
    );
};

export default NavBar;
