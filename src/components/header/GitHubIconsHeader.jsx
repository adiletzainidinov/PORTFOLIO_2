import React from 'react';
import { IconsContainer } from './StyledHeader';

const GitHubIconsHeader = () => {
  return (
    <>
      <IconsContainer>
        <p>
          <a href="#">
            <ion-icon name="git-branch"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="star"></ion-icon>
          </a>
        </p>
      </IconsContainer>
    </>
  );
};

export default GitHubIconsHeader;
