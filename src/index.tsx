import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Lato';
  font-size: 14px;
  font-weight: 300;
  color: #000000;
}
img {
  max-width: 100%;
}
a {
  text-decoration: none;
  border: none;
  color: inherit;
  outline: none;
}
a:hover {
  text-decoration: none;
  color: inherit;
}
h1 {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
button,input,optgroup,select,textarea {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  border: none;
  outline: none;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const client = new ApolloClient({
    uri: "https://spacex-production.up.railway.app/",
    cache: new InMemoryCache(),
});

root.render(
    <React.StrictMode>
        <Global />
        <ApolloProvider client={client as any}>
            <BrowserRouter>
                <RecoilRoot>
                    <App />
                </RecoilRoot>
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>
);
