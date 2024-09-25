import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "JetBrains Mono", monospace;
}

body {
    background: #212033;
    color: ${props => props.theme.colors.foreground};

    button {
        cursor: pointer;
    }
}
`