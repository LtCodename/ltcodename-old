import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
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
    // const allContent = (
    //     <BrowserRouter>
    //         <Switch>
    //             <Route exact path="/home" component={Home}/>
    //             <Redirect to="/home"/>
    //         </Switch>
    //     </BrowserRouter>
    // );

    return (
        <>
            {/*{allContent}*/}
            <Home/>
            <GlobalStyles/>
        </>
    );
};

export default App;
