import React from "react";
 
import "./App.css";
import { theme } from "./components/constants/theme";
import RouterComponent from "./components/constants/router";
import Provider from "./components/api/context";
import {ThemeProvider} from "@mui/material"
function App() {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <div className="App">
            <RouterComponent />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
