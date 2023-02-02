import { ThemeProvider } from "styled-components";
import { SignIn } from "./pages/SignIn";
import { defaultTheme } from "./styles/themes/default";

import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}