import React from 'react';
import styled from "styled-components";
import { Col, Row } from "./Layout";
import { NavLink } from "react-router-dom";

const UltimateWrapper = styled(Col)`
    color: #990b35;
`;

const Link = styled(NavLink)`
    text-decoration: none;
    transition: border-width .5s;
    height: 20vh;
    transition: all .5s;
    font-size: 45px;
    cursor: pointer;
    color: #990b35;
    background: #FFF8E8;
    margin-bottom: 10px;
	:hover {
	    text-decoration: none;
        font-size: 50px;
	}
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

const GeneralColumn = styled(Col)`
    align-items: center;
`;

const TextWrapper = styled(Col)`
    align-items: center;
    max-width: 500px;
    text-align: center;
`;

const ParagraphTitle = styled.span`
    font-weight: 800;
    font-size: 25px;
    margin-bottom: 10px;
`;

const Paragraph = styled.span`
    margin-bottom: 10px;
`;

const SmallNavLink = styled(NavLink)`
    font-weight: 800;
    color: #990b35;
    text-decoration: none;
	:hover {
	    color: #990b35;
	    text-decoration: underline;
	}
`;

const TextLink = styled.a`
    font-weight: 800;
    color: #990b35;
    text-decoration: none;
	:hover {
	    color: #990b35;
	    text-decoration: underline;
	}
`;

const TabAbout = () => {
    return (
        <UltimateWrapper>
            <Link to={`/home`}>
                <TitleWrapper>
                    <Title>About</Title>
                </TitleWrapper>
            </Link>
            <GeneralColumn>
                <TextWrapper>
                    <ParagraphTitle>Introduction</ParagraphTitle>
                    <Paragraph>Open for Front End Developer and/or Project Manager positions.</Paragraph>
                    <Paragraph>I've been working in game development for almost 5 years as a Community Manager, UI Programmer
                        and then Project Manager. Now I'm making my first steps as a Front-End Developer. Check out my <SmallNavLink to={'/projects'}>Projects</SmallNavLink> section
                        and my <TextLink target="_blank" href="https://github.com/LtCodename">GitHub</TextLink> profile to take a look at the stuff I’ve created. Programming now is an integral part
                        of my life, I enjoy watching how things on a screen evolve from a first line of simple code to a vast
                        and complex projects with a ton of secret ingredients under the hood.</Paragraph>
                    <Paragraph>As much as I love making software I fond of managing the process of making as well. I love keeping things in order. During my time in game development I've enjoyed so much taking care of my team, extinguishing conflicts, making sure everybody doing exactly what they need to do, that they have all the material resources they need. There is something in it watching your team working like a clockwork. I'm proficient with writing documentation, working in bug trackers and planning software.</Paragraph>
                    <Paragraph>If you have a job for me - contact me anytime in the most suitable for you way. All my contact info is in <SmallNavLink to={'/general'}>General</SmallNavLink> section.</Paragraph>
                    <ParagraphTitle>Education</ParagraphTitle>
                    <Paragraph>I have Master Of Science Degree in Management Information Systems that I've obtained in Kyiv National Economic University in 2010-2015.</Paragraph>
                </TextWrapper>
            </GeneralColumn>
        </UltimateWrapper>
    )
};

export default TabAbout;