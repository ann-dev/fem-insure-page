import { createGlobalStyle } from "styled-components"
import { COLORS } from "assets/constants/COLORS"

const GlobalStyle = createGlobalStyle`
    html{
        --color-acc-blue: ${COLORS.accent_blue};
        --color-acc-grey: ${COLORS.accent_grey};
        --color-acc-light: ${COLORS.accent_light};
        --color-black: ${COLORS.black};
        --color-l-grey: ${COLORS.light_grey};
        --color-l-main: ${COLORS.light_main};
        --color-purple: ${COLORS.purple_main}
    }
    html {
        box-sizing: border-box;
    }
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    body {
        background-color: var(--color-l-main);
        color: var(----color-black);
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
        text-decoration: none;
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
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
