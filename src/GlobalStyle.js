import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'SUIT-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'LeferiPoint-BlackObliqueA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-BlackObliqueA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

:root{
    --dark-1: #94a1b2;
    --dark-2: #303134;
    --dark-3: #16161a;
    --dark-4: #010101;
    --shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
    --point-color: #0acb8a;
    --point-color-hover: #29f8b2;
    --font-color-1: #94a1b2;
    --font-color-2: #fff;
    --font-color-3: #94a1b280;
    --line: #94a1b21e;
}

*{font-family: 'SUIT-Medium';}


`;

export default GlobalStyle;