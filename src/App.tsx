import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Home from "./components/Home";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #FFFFFF;
  }
`;

const App: React.FC = () => {

    return (
        <>
            <Home/>
            <GlobalStyles/>
        </>
    );
};

export default App;
