import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from "./components/Home";
import TabGeneral from "./components/TabGeneral";
import TabAbout from "./components/TabAbout";
import TabExperience from "./components/TabExperience";
import TabSkills from "./components/TabSkills";
import TabProjects from "./components/TabProjects";

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
                <Route exact path="/experience" component={TabExperience}/>
                <Route exact path="/skills" component={TabSkills}/>
                <Route exact path="/projects" component={TabProjects}/>
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
