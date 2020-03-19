import React from 'react';
import styled from "styled-components";
import { Col } from "./Layout";

const GeneralColumn = styled(Col)`
    align-items: center;
    padding: 0 0 30px 0;
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

const SmallNavLink = styled.span`
    font-weight: 800;
    color: #990b35;
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
        <GeneralColumn>
            <TextWrapper>
                <ParagraphTitle>Introduction</ParagraphTitle>
                <Paragraph>Open for Front End Developer and/or Project Manager positions.</Paragraph>
                <Paragraph>I've been working in game development for almost 5 years as a Community Manager, UI Programmer
                    and then Project Manager. Now I'm making my first steps as a Front-End Developer. Check out my <SmallNavLink>Projects</SmallNavLink> section
                    and my <TextLink target="_blank" href="https://github.com/LtCodename">GitHub</TextLink> profile to take a look at the stuff I’ve created. Programming now is an integral part
                    of my life, I enjoy watching how things on a screen evolve from a first line of simple code to a vast
                    and complex projects with a ton of secret ingredients under the hood.</Paragraph>
                <Paragraph>As much as I love making software I fond of managing the process of making as well. I love keeping things in order. During my time in game development I've enjoyed so much taking care of my team, extinguishing conflicts, making sure everybody doing exactly what they need to do, that they have all the material resources they need. There is something in it watching your team working like a clockwork. I'm proficient with writing documentation, working in bug trackers and planning software.</Paragraph>
                <Paragraph>If you have a job for me - contact me anytime in the most suitable for you way. All my contact info is in <SmallNavLink>General</SmallNavLink> section.</Paragraph>
                <ParagraphTitle>Education</ParagraphTitle>
                <Paragraph>I have Master Of Science Degree in Management Information Systems that I've obtained in Kyiv National Economic University in 2010-2015.</Paragraph>
            </TextWrapper>
        </GeneralColumn>
    )
};

export default TabAbout;