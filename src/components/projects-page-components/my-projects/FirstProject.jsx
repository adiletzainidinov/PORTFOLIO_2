import React, { useEffect, useRef } from 'react';
import {
  BoxButton,
  FirstContainer,
  Left,
  LinkFirst,
  Right,
  SubTitleFirst,
  TitleRight,
  Video,
} from './StyledMyProjects';
import Button from '../../../shared/UI/button/Button';
import videoSrc from '../../../assets/images/Запись (28.07.2024 19-28-20)/Data/flexBox.mp4';

const FirstProject = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3;
    }
  }, []);

  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };
  
  const handleClick = () => {
    openInNewTab('https://flexbox-froggy-tan.vercel.app/');
  };
  return (
    <FirstContainer>
      <Left>
        <TitleRight>FLEXBOX FROGGY 🐸</TitleRight>
        <SubTitleFirst>
          Игра Flexbox Froggy была создана для тех, кто только начинает изучать
          IT, особенно Frontend-разработку. Это увлекательная игра, которая
          помогает легко и весело понять основы CSS Flexbox. Пользователи решают
          простые задачи, чтобы научиться создавать гибкие и адаптивные макеты
          для своих веб-сайтов.
        </SubTitleFirst>
        <BoxButton>
          <Button>Type-Script</Button>
          <Button>Uuid</Button>
          <Button>Mui</Button>
          <Button>Redux-Toolkit</Button>
          <Button>Redux-Persist</Button>
          <Button>React-HookForm</Button>
          <Button>Ion-Icons</Button>
        </BoxButton>
        <LinkFirst>
          <a href="https://github.com/adiletzainidinov/FLEXBOX_FROGGY">
            <p className='code'>
              Код
              <span>
                <ion-icon name="logo-github"></ion-icon>
              </span>
            </p>
          </a>
          <a href="https://flexbox-froggy-tan.vercel.app/" target="_blank" rel="noopener noreferrer">
            <h2>
              Демонстрация
              <span>
                <ion-icon name="desktop-outline"></ion-icon>
              </span>
            </h2>
          </a>
        </LinkFirst>
      </Left>
      <Right>
        <Video onClick={handleClick} ref={videoRef} src={videoSrc} autoPlay loop muted />
      </Right>
    </FirstContainer>
  );
};

export default FirstProject;
