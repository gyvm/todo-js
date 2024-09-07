import {ChakraProvider} from "@chakra-ui/react";
import './App.css'
import theme from "./theme/theme.ts";
import {BrowserRouter} from "react-router-dom";
import {Router} from "./router/Router.tsx";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
