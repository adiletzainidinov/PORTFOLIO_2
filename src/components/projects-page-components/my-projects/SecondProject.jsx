import {
    Bilingual,
  LinkSecond,
  SecondButtons,
  SecondContainer,
  SecondLeft,
  SecondLeftImg,
  SecondRight,
  SubTitleSecond,
  TitleSecond,
} from './StyledMyProjects';
import Bilinbual from '../../../assets/images/Bilingual.png';
import Button from '../../../shared/UI/button/Button';

const SecondProject = ({handleOpen}) => {
  return (
    <SecondContainer>
      <SecondLeft>
        <SecondLeftImg onClick={handleOpen}>
          <Bilingual src={Bilinbual} />
        </SecondLeftImg>
      </SecondLeft>
      <SecondRight>
        <TitleSecond>BILINGUAL 📄</TitleSecond>
        <SubTitleSecond>
          Duolingo English Test — это удобный онлайн-тест для проверки вашего
          уровня английского. Он включает простые задания и доступен в любое
          время, что помогает легко оценить ваши навыки и подготовиться к учебе
          или работе.
        </SubTitleSecond>
        <SecondButtons>
          <Button>TYPE-SCRIPT</Button>
          <Button>REDUX-TOOLKIT</Button>
          <Button>REACT-ROUTER</Button>
          <Button>framer-motion</Button>
        </SecondButtons>
        <LinkSecond>
          <a href="https://github.com/peaksoft-school/Bilingual-js13.git">
            <p>
              Код
              <span>
                <ion-icon name="logo-github"></ion-icon>
              </span>
            </p>
          </a>
          <a  onClick={handleOpen}>
            <h2>
              Демонстрация
              <span>
                <ion-icon name="desktop-outline"></ion-icon>
              </span>
            </h2>
          </a>
        </LinkSecond>
      </SecondRight>
    </SecondContainer>
  );
};

export default SecondProject;
