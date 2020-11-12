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
    background: violet;
}


`;
