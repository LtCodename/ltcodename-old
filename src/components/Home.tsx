import React, {useState} from 'react';
import styled from "styled-components";
import { Col, Row } from "./Layout";
import TabGeneral from "./TabGeneral";
import TabAbout from "./TabAbout";
import TabExperience from "./TabExperience";
import TabSkills from "./TabSkills";
import TabProjects from "./TabProjects";

const LinksGrid = styled(Col)`
    display: flex;
`;

const Link = styled.div`
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
    color: #a5040a;
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
    text-decoration: none;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    height: 100%;
    height: 20vh;
    transition: all .5s;
    :hover {
	    text-decoration: none;
	    height: calc(20vh + 20px);
	    margin-top: -10px;
        margin-bottom: -10px;
        button {
            font-size: 50px;
        }
	}
	
	div:last-child > &:hover {
	    height: calc(20vh + 10px);
	    margin-bottom: 0;
	}
`;

const ToggleButton = styled.button`
    text-transform: uppercase;
    font-weight: 800;
    font-size: 45px;
    transition: all .5s;
    width: 100%;
    height: 20vh;
    background: none;
    border: none;
    outline: none;
    color: inherit;
    cursor: pointer;
    &:hover,
    &:focus {
        outline: none;
    }
`;

const ContentWrapper = styled.div<{ opened: boolean }>`
    height: ${props =>  (props.opened ? 'auto' : 0) };
    overflow: hidden;
`;

const Home = () => {

    const [selectedSection, setSelectedSection] = useState('');

    const onToggle = (event:React.MouseEvent) => {
        //@ts-ignore
        const { id } = event.target;
        if (selectedSection !== id) {
            setSelectedSection(id);
        } else {
            setSelectedSection('');
        }
    };

    return (
        <LinksGrid>
            <GeneralLink>
                <TitleWrapper>
                    <ToggleButton
                        type={'button'}
                        id={'general'}
                        onClick={onToggle}>
                        General
                    </ToggleButton>
                </TitleWrapper>
                <ContentWrapper opened={selectedSection === 'general'}>
                    <TabGeneral/>
                </ContentWrapper>
            </GeneralLink>
            <AboutLink>
                <TitleWrapper>
                    <ToggleButton
                        type={'button'}
                        id={'about'}
                        onClick={onToggle}>
                        About
                    </ToggleButton>
                </TitleWrapper>
                <ContentWrapper opened={selectedSection === 'about'}>
                    <TabAbout/>
                </ContentWrapper>
            </AboutLink>
            <ExperienceLink>
                <TitleWrapper>
                    <ToggleButton
                        type={'button'}
                        id={'experience'}
                        onClick={onToggle}>
                        Experience
                    </ToggleButton>
                </TitleWrapper>
                <ContentWrapper opened={selectedSection === 'experience'}>
                    <TabExperience/>
                </ContentWrapper>
            </ExperienceLink>
            <SkillsLink>
                <TitleWrapper>
                    <ToggleButton
                        type={'button'}
                        id={'skills'}
                        onClick={onToggle}>
                        Skills
                    </ToggleButton>
                </TitleWrapper>
                <ContentWrapper opened={selectedSection === 'skills'}>
                    <TabSkills/>
                </ContentWrapper>
            </SkillsLink>
            <ProjectsLink>
                <TitleWrapper>
                    <ToggleButton
                        type={'button'}
                        id={'projects'}
                        onClick={onToggle}>
                        Projects
                    </ToggleButton>
                </TitleWrapper>
                <ContentWrapper opened={selectedSection === 'projects'}>
                    <TabProjects/>
                </ContentWrapper>
            </ProjectsLink>
        </LinksGrid>
    )
};

export default Home;