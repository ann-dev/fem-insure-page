import { createGlobalStyle } from "styled-components"
import { COLORS } from "assets/constants/COLORS"

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    body {
        background-color: ${COLORS.background_main};
        color: ${COLORS.font_main};
        font-family: 'Karla', sans-serif;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
    }
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul {
        margin: 0;
        padding: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'DM Serif Display', serif;
        -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
    }
    a{
        color: inherit;
    }
    ol,
    ul {
        list-style: none;
    }
    img {
        max-width: 100%;
        height: auto;
    }
`

export default GlobalStyle
