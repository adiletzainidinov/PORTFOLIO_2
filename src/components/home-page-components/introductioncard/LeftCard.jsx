import React from 'react';
import {
  BoxFlex,
  LeftCardContainer,
  SocialMedia,
  StaticText,
  SubTitle,
  TitleContainer,
  TypingText,
  Github,
} from './StyleIntroductionCard';
import LinkedinComponent from './Linkedin';

const LeftCard = () => {
  return (
    <>
      <LeftCardContainer>
        <TitleContainer>
          <StaticText variant="h1">Привет, я — Адилет (Ади).</StaticText>
          <BoxFlex>
            <StaticText variant="h1" spaced>
              Я
            </StaticText>
            <TypingText variant="h1">Frontend-разработчик</TypingText>
          </BoxFlex>
        </TitleContainer>

        <SubTitle>
          Как опытный{' '}
          <span style={{ color: '#ae08bc', animation: 'none' }}>
            Frontend-разработчик
          </span>
          , я посвящаю себя воплощению идей в инновационные веб-приложения.
          Ознакомьтесь с моими недавними{' '}
          <span style={{ color: '#ae08bc', animation: 'none' }}>проектами</span>{' '}
          и{' '}
          <span style={{ color: '#ae08bc', animation: 'none' }}>статьями</span>,
          которые демонстрируют мои навыки в Front-End разработке.{' '}
          <span>📍</span>
        </SubTitle>
        <SocialMedia>
          <LinkedinComponent />
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
