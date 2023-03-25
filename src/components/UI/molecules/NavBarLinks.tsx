import NavbarLink from "../atoms/NavbarLink";
import styled from "styled-components";

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
            <li>
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
