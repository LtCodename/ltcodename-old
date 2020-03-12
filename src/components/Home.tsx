import React from 'react';
import styled from "styled-components";
import { Col, Row } from "./Layout";
import { NavLink } from "react-router-dom";

const LinksGrid = styled(Col)`
    display: flex;
`;

const Link = styled(NavLink)`
    text-decoration: none;
    transition: border-width .5s;
    height: 20vh;
    transition: all .5s;
    font-size: 45px;
    cursor: pointer;
	:hover {
	    text-decoration: none;
	    height: calc(20vh + 20px);
	    margin-top: -10px;
        margin-bottom: -10px;
        font-size: 50px;
	}
	
	:last-child:hover {
	    height: calc(20vh + 10px);
	    margin-bottom: 0;
	}
`;

const GeneralLink = styled(Link)`
    background: #FFFFFF;
    color: #5c1010;
`;

const AboutLink = styled(Link)`
    background: #FFF8E8;
    color: #990D35;
`;

const ExperienceLink = styled(Link)`
    background: #FCD581;
    color: #D52941;
`;

const SkillsLink = styled(Link)`
    background: #D52941;
    color: #FFF8E8;
`;

const ProjectsLink = styled(Link)`
    background: #990D35;
    color: #FFFFFF;
`;

const TitleWrapper = styled(Row)`
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const Title = styled.span`
    text-transform: uppercase;
    font-weight: 800;
`;

const Home = () => {
    return (
        <LinksGrid>
            <GeneralLink to={`/general`}>
                <TitleWrapper>
                    <Title>General</Title>
                </TitleWrapper>
            </GeneralLink>
            <AboutLink to={`/about`}>
                <TitleWrapper>
                    <Title>About</Title>
                </TitleWrapper>
            </AboutLink>
            <ExperienceLink to={`/experience`}>
                <TitleWrapper>
                    <Title>Experience</Title>
                </TitleWrapper>
            </ExperienceLink>
            <SkillsLink to={`/skills`}>
                <TitleWrapper>
                    <Title>Skills</Title>
                </TitleWrapper>
            </SkillsLink>
            <ProjectsLink to={`/general`}>
                <TitleWrapper>
                    <Title>Projects</Title>
                </TitleWrapper>
            </ProjectsLink>
        </LinksGrid>
    )
};

export default Home;