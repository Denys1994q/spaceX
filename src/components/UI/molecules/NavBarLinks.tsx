import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import NavbarLink from "../atoms/NavbarLink";

const StyledNavBarLinks = styled.ul`
    display: flex;
    li:not(:last-child) {
        margin-right: 32px;
    }
`;

interface ILink {
    to: string;
    text: string;
}

export interface INavbarLinks {
    links: ILink[];
}

const NavbarLinks = ({ links }: INavbarLinks): JSX.Element => {
    const content = links.map((item: any) => {
        return (
            <li key={uuidv4()}>
                <NavbarLink to={item.to} children={item.text} />
            </li>
        );
    });

    return (
        <>
            <StyledNavBarLinks>{content}</StyledNavBarLinks>
        </>
    );
};

export default NavbarLinks;
