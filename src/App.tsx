import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from "./components/Home";
import TabGeneral from "./components/TabGeneral";
import TabAbout from "./components/TabAbout";

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
    const allContent = (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/general" component={TabGeneral}/>
                <Route exact path="/about" component={TabAbout}/>
                <Redirect to="/home"/>
            </Switch>
        </BrowserRouter>
    );

    return (
        <>
            {allContent}
            <GlobalStyles/>
        </>
    );
};

export default App;
