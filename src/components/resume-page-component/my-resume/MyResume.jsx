import {
  ButtonContainer,
  ButtonPdf,
  Container,
  ContentBox,
  ImgContainer,
  MainBox,
  ResumeImg,
} from '../Resume';
import resumeImg from '../../../assets/images/resumeAdilet.png';
import resumePdf from '../../../assets/document/Resume(AdiletZainidinov).pdf';
import { useState } from 'react';

const MyResume = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDownload = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      const link = document.createElement('a');
      link.href = resumePdf;
      link.setAttribute('download', 'Resume(AdiletZainidinov).pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };

  const handleOpenPdf = () => {
    window.open(resumePdf, '_blank');
  }

  return (
    <Container>
      <MainBox>
        <ContentBox>
          <ImgContainer>
            <ResumeImg src={resumeImg} alt="resumePdf" />
            <ButtonContainer>
              <a href={resumePdf} download={resumePdf}>
                <ButtonPdf isAnimating={isAnimating} onClick={handleDownload}>
                  <span style={{ marginRight: 10, marginTop: 3 }}>
                    <ion-icon name="download-outline"></ion-icon>
                  </span>
                  Скачать pdf
                </ButtonPdf>
              </a>
              <ButtonPdf isAnimating={isAnimating} onClick={handleOpenPdf}>
                <span style={{ marginRight: 10, marginTop: 3 }}>
                  <ion-icon name="open-outline"></ion-icon>
                </span>
                Открыть pdf
              </ButtonPdf>
            </ButtonContainer>
          </ImgContainer>
        </ContentBox>
      </MainBox>
    </Container>
  );
};

export default MyResume;
