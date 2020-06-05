import React from 'react';
import styled from "styled-components";
import { Col, Row } from "./Layout";

const DataGrid = styled.div`
    margin-bottom: 20px;
`;

const SVG = styled.svg`
    fill: #a5040a;
    height: 30px;
    margin-right: 10px;
`;

const IconAndText = styled(Row)`
    margin-bottom: 10px;
    align-items: center;
    position: relative;
`;

const Text = styled.span`
`;

const GeneralColumn = styled(Col)`
    align-items: center;
    padding: 0 0 30px 0;
`;

const TextLink = styled.a`
    color: #a5040a;
    text-decoration: none;
    :hover {
        text-decoration: underline;
    }
`;

const TextWrapper = styled.div`
    max-width: 500px;
`;

const ExperienceText = styled.span`
`;

const ExperiencePiece = styled(Col)`
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 10px solid #a5040a;
`;

const UL = styled.ul`
    list-style: none;
`;

const TabExperienceOld = () => {
    return (
        <GeneralColumn>
            <ExperiencePiece>
                {/*<Period>October 2019 - January 2020</Period>*/}
                <DataGrid>
                    <IconAndText>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar"
                             role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"/>
                        </SVG>
                        <Text>October 2019 - January 2020</Text>
                    </IconAndText>
                    <IconAndText>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
                             role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
                        </SVG>
                        <Text>Junior Front-End Developer</Text>
                    </IconAndText>
                    <IconAndText>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="building"
                             role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"/>
                        </SVG>
                        <TextLink target="_blank"
                                  href="https://lambda.direct/">Lambda Team
                        </TextLink>
                    </IconAndText>
                </DataGrid>
                <TextWrapper>
                    <ExperienceText>Working in close cooperation with backend developers on a brand new React based project.
                        Markup tasks and setting up server communication were my main responsibilities during my work time here.</ExperienceText>
                </TextWrapper>
            </ExperiencePiece>
            <ExperiencePiece>
                {/*<Period>November 2018 - June 2019</Period>*/}
                <DataGrid>
                    <IconAndText>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar"
                             role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"/>
                        </SVG>
                        <Text>November 2018 - June 2019</Text>
                    </IconAndText>
                    <IconAndText>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
                             role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
                        </SVG>
                        <Text>Project Manager</Text>
                    </IconAndText>
                    <IconAndText>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="building"
                             role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"/>
                        </SVG>
                        <TextLink target="_blank"
                                  href="https://enixan.com/">Enixan Entertainment
                        </TextLink>
                    </IconAndText>
                </DataGrid>
                <TextWrapper>
                    <ExperienceText>I was in charge of four live projects with a team of 12-15 people. I was responsible for:</ExperienceText>
                    <UL>
                        <li>- Facilitating internal processes using Scrum methodology (daily scrums, sprint planning, sprint reviews).</li>
                        <li>- Tracking, monitoring and ensuring that collaboration and communication within a team is efficient and functional.</li>
                        <li>- Projects schedules and team members working conditions.</li>
                        <li>- Hiring/firing people within my team.</li>
                    </UL>
                </TextWrapper>
            </ExperiencePiece>
            <ExperiencePiece>
                {/*<Period>August 2018 - June 2019</Period>*/}
                <DataGrid>
                    <IconAndText>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar"
                             role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"/>
                        </SVG>
                        <Text>August 2018 - June 2019</Text>
                    </IconAndText>
                    <IconAndText>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
                             role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
                        </SVG>
                        <Text>Senior UI Developer (ActionScript 3)</Text>
                    </IconAndText>
                    <IconAndText>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="building"
                             role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"/>
                        </SVG>
                        <TextLink target="_blank"
                                  href="https://enixan.com/">Enixan Entertainment
                        </TextLink>
                    </IconAndText>
                </DataGrid>
                <TextWrapper>
                    <ExperienceText>I was responsible for:</ExperienceText>
                    <UL>
                        <li>- Developing and implementing new mechanics and features in multiple live games on a daily basis.</li>
                        <li>- Managing a team of programmers, providing damage control and consultations on new engine features.</li>
                        <li>- Scrum Master activities (conducting meetings, planning etc.)</li>
                        <li>- Mentoring newcomers, one of the company's programming school speakers.</li>
                        <li>- Close cooperation with all possible game development pipeline departments.</li>
                    </UL>
                </TextWrapper>
            </ExperiencePiece>
            <ExperiencePiece>
                {/*<Period>September 2015 - August 2018</Period>*/}
                <DataGrid>
                    <IconAndText>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar"
                             role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"/>
                        </SVG>
                        <Text>September 2015 - August 2018</Text>
                    </IconAndText>
                    <IconAndText>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
                             role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
                        </SVG>
                        <Text>UI Developer (ActionScript 3)</Text>
                    </IconAndText>
                    <IconAndText>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="building"
                             role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"/>
                        </SVG>
                        <TextLink target="_blank"
                                  href="https://enixan.com/">Enixan Entertainment
                        </TextLink>
                    </IconAndText>
                </DataGrid>
                <TextWrapper>
                    <ExperienceText>I was responsible for:</ExperienceText>
                    <UL>
                        <li>- Implementing new mechanics and features.</li>
                        <li>- Fixing bugs.</li>
                        <li>- Close cooperation with team (PM, QA, game designers, community managers, programmers, artists, localization dept. and others).</li>
                    </UL>
                </TextWrapper>
            </ExperiencePiece>
            <ExperiencePiece>
                {/*<Period>June 2015 - September 2015</Period>*/}
                <DataGrid>
                    <IconAndText>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar"
                             role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"/>
                        </SVG>
                        <Text>June 2015 - September 2015</Text>
                    </IconAndText>
                    <IconAndText>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
                             role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
                        </SVG>
                        <Text>Community Manager</Text>
                    </IconAndText>
                    <IconAndText>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="building"
                             role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"/>
                        </SVG>
                        <TextLink target="_blank"
                                  href="https://enixan.com/">Enixan Entertainment
                        </TextLink>
                    </IconAndText>
                </DataGrid>
                <TextWrapper>
                    <ExperienceText>Responsible for managing a huge community of an online browser game including:</ExperienceText>
                    <UL>
                        <li>- 24/7 support - Writing news and features for social networks.</li>
                        <li>- Close cooperation with team (PM, QA, game designers, programmers, artists, localization dept. and others).</li>
                    </UL>
                </TextWrapper>
            </ExperiencePiece>
            <ExperiencePiece>
                {/*<Period>September 2010 - July 2013</Period>*/}
                <DataGrid>
                    <IconAndText>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar"
                             role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"/>
                        </SVG>
                        <Text>September 2010 - July 2013</Text>
                    </IconAndText>
                    <IconAndText>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
                             role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
                        </SVG>
                        <Text>Videogames Journalist</Text>
                    </IconAndText>
                    <IconAndText>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="building"
                             role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"/>
                        </SVG>
                        <TextLink>Multiple Publications
                        </TextLink>
                    </IconAndText>
                </DataGrid>
                <TextWrapper>
                    <ExperienceText>Responsible for various writing, editing and interviewing activities including:</ExperienceText>
                    <UL>
                        <li>- Writing PC games reviews/previews and features.</li>
                        <li>- Editing activities.</li>
                        <li>- Writing news pieces.</li>
                        <li>- Events coverage (remote and on site).</li>
                        <li>- Preparing and conducting interviews.</li>
                    </UL>
                </TextWrapper>
            </ExperiencePiece>
        </GeneralColumn>
    )
};

export default TabExperienceOld;