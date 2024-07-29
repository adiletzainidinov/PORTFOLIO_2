import React from 'react';
import { Container, ContentBox, ImgSnake, StyledBox, Title } from './StyledDaysCode';

const DaysCode = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <ContentBox>
            <Title>Код | <span>GitHub</span></Title>
            <picture>
              <source
                media="(prefers-color-scheme: dark)"
                srcset="
      https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake-dark.svg
    "
                style={{ width: 900 }}
              />
              <source
                media="(prefers-color-scheme: light)"
                srcset="
      https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake.svg
    "
              />
              <ImgSnake
                alt="github contribution grid snake animation"
                src="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake.svg"
              />
            </picture>
          </ContentBox>
        </StyledBox>
      </Container>
    </>
  );
};

export default DaysCode;
