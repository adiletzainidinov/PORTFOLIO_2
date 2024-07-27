import React from 'react';
import {
  BoxFlex,
  LeftCardContainer,
  SocialMedia,
  StaticText,
  SubTitle,
  TitleContainer,
  TypingText,
  Github
} from './StyleIntroductionCard';
import LinkedinComponent from './Linkedin';

const LeftCard = () => {
  return (
    <>
      <LeftCardContainer>
        <TitleContainer>
          <StaticText variant="h1">Hi, I'm Adilet (Adi)</StaticText>
          <BoxFlex>
            <StaticText variant="h1" spaced>
              I AM A
            </StaticText>
            <TypingText variant="h1">Frontend Developer</TypingText>
          </BoxFlex>
        </TitleContainer>

        <SubTitle>
          As an experienced <span style={{color: '#ae08bc',animation: 'none'}}>Front-End Stack Developer </span>, I am dedicated to
          translating ideas into innovative web applications. Check out my
          recent  <span style={{color: '#ae08bc',animation: 'none'}}>projects</span> and <span style={{color: '#ae08bc',animation: 'none'}}>articles</span> showcasing my Front-End development
          skills. <span>📍</span>
        </SubTitle>
        <SocialMedia>
         <LinkedinComponent/>
          <Github>
            <p>
              <ion-icon name="logo-github"></ion-icon>
            </p>
          </Github>
        </SocialMedia>
      </LeftCardContainer>
    </>
  );
};

export default LeftCard;
