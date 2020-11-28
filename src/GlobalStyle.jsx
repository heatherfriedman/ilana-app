import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
}

html, body, #app {
    height: 100%;
    overflow-y: scroll;
}

#app {
     font-family: Arial;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #63b8ee;;
    color: #071a34;
    font-size: 1em;
    font-weight: bold;
    overflow-y: scroll;
}
`;
