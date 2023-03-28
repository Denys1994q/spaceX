import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbarLink = styled(Link)`
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    color: ${props => props.color || "#FFFFFF"};
    text-transform: uppercase;
    padding-bottom: 4px;
    &:hover {
        color: rgb(221, 55, 125);
        border-bottom: 1px solid #ffffff;
        transition: all 0.4s ease;
    }
`;

interface INavbarLinkProps {
    to: string;
    children: string;
    color?: string;
}

const NavbarLink = ({ to, children, color }: INavbarLinkProps): JSX.Element => {
    return (
        <StyledNavbarLink to={to} color={color}>
            {children}
        </StyledNavbarLink>
    );
};

export default NavbarLink;
