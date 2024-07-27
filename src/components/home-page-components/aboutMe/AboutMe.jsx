import { styled } from '@mui/material';
import LeftContentAboutMe from './LeftContentAboutMe';
import RightContentAboutMe from './RightContentAboutMe';
import { Container, ContentBox, StyledBox } from './StyleAboutMe';

const AboutMe = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <ContentBox>
            <LeftContentAboutMe />
            <RightContentAboutMe />
          </ContentBox>
        </StyledBox>
      </Container>
    </>
  );
};

export default AboutMe;
