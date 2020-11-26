import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
}

html, body, #app {
    height: 100%;
}

#app {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: plum;
    overflow-y: scroll;
    color: black;
    font-size: 1em;
    font-weight: bold;
}


`;
