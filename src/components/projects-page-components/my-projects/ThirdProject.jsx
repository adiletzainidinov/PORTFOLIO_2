import Button from '../../../shared/UI/button/Button';
import {
  ButtonsThird,
  LeftImgThird,
  LinkThird,
  NasyikatMedia,
  SubTitleThird,
  ThirdContainer,
  ThirdLeft,
  ThirdRight,
  TitleThird,
} from './StyledMyProjects';
import { Verified } from '@mui/icons-material';
import NasyikatMediaImg from '../../../assets/images/NasyikatMedia.png';

const ThirdProject = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  const handleClick = () => {
    openInNewTab('https://nasyikat-media-g129.vercel.app/');
  };
  return (
    <>
      <ThirdContainer>
        <ThirdLeft>
          <TitleThird>
            Nasyikat.media <Verified />
          </TitleThird>
          <SubTitleThird>
            Nasyikat.media — это платформа, созданная для того, чтобы помочь
            людям лучше понять ислам и развивать свои духовные навыки в
            доступной форме.
          </SubTitleThird>
          <ButtonsThird>
            <Button>REACT</Button>
            <Button>REACT-ROUTER</Button>
            <Button>MUI-MATERIAL</Button>
          </ButtonsThird>
          <LinkThird>
            <a href="https://github.com/Matraim/nasyikat-media.git">
              <p>
                Код
                <span>
                  <ion-icon name="logo-github"></ion-icon>
                </span>
              </p>
            </a>
            <a
              href="https://nasyikat-media-g129.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Демонстрация
                <span>
                  <ion-icon name="desktop-outline"></ion-icon>
                </span>
              </h2>
            </a>
          </LinkThird>
        </ThirdLeft>
        <ThirdRight>
          <LeftImgThird onClick={handleClick}>
            <NasyikatMedia src={NasyikatMediaImg} />
          </LeftImgThird>
        </ThirdRight>
      </ThirdContainer>
    </>
  );
};

export default ThirdProject;
