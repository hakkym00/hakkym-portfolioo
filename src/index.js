import App from "./App";
import React from "react";
import ThemeContextProvider from "./context/ThemeContext";
import { createGlobalStyle } from "styled-components";
import { createRoot } from "react-dom/client";

const GlobalStyles = createGlobalStyle`

* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;

}

body {
  -webkit-font-smoothing: antialiased;
}

a{
  outline: none;
}


:root {
  --btn-color: #FF7878;
  --white: #FFf;
}

@media screen and (max-width: 767px){
	input, textarea{
		font-size:16px;		
	}
}
`;

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeContextProvider>
      <GlobalStyles />
      <App />
    </ThemeContextProvider>
  </>
);
