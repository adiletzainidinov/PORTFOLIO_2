import React from 'react';
import { LeftBox, SubTitle, Title } from './styleWhoIAm';

const Left = () => {
  return (
    <LeftBox>
      <Title>
        Узнайте,<span> кто я</span>
      </Title>
      <SubTitle>
        <p>
          Привет всем! Я — <span>Зайнидинов Адилет</span> из{' '}
          <span>Бишкека, Кыргызстан</span>. <br />
          На данный момент я ищу работу разработчиком веб-приложений и готов
          применить свои знания, полученные на курсе программирования в
          Peactsoft, в реальных проектах.
        </p>
        <h3>Помимо программирования, я увлекаюсь следующими вещами:</h3>
        <ul>
          <li>
            <span><ion-icon name="pin-outline"></ion-icon></span>Искусственный интеллект
          </li>
          <li>
            <span><ion-icon name="pin-outline"></ion-icon></span>Религия
          </li>
          <li>
            <span><ion-icon name="pin-outline"></ion-icon></span>Настольный теннис
          </li>
        </ul>
        <h4>
          Мой девиз: <br /> <span>«Не бойся мечтать и воплощать мечты в реальность!»</span> <br /> С
          уважением, Адилет
        </h4>
      </SubTitle>
    </LeftBox>
  );
};

export default Left;
