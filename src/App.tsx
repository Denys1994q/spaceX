import styled from "styled-components";

import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/UI/organisms/NavBar";
import HomePage from "./pages/Home";
import FavouritesPage from "./pages/Favourites";

const spaceLogo = require("./images/spaceX-logo.svg").default;

const Wrapper = styled.div`
    z-index: 5;
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
`;

const Inner = styled.div`
    position: relative;
    z-index: 3;
`;

function App(): JSX.Element {
    const location = useLocation();
    const isFavourite = location.pathname === "/favourites";

    return (
        <>
            <Wrapper>
                <Inner>
                    <header>
                        <NavBar
                            position='fixed'
                            logoLinkTo={"/"}
                            logoLinkSrc={spaceLogo}
                            imgBtnSrc={
                                isFavourite ? require("./images/heart-white.png") : require("./images/heart.png")
                            }
                            imgBtnBackground={isFavourite ? "#DD377D" : ""}
                            textBtnValue={"sign in"}
                            links={[
                                { to: "/", text: "home" },
                                { to: "#", text: "tours" },
                                { to: "#", text: "about" },
                                { to: "#", text: "help" },
                            ]}
                        />
                    </header>
                </Inner>
            </Wrapper>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/favourites' element={<FavouritesPage />} />
            </Routes>
        </>
    );
}

export default App;
