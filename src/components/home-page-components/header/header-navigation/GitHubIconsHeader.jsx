import React from 'react';
import { IconsContainer } from '../style-animation/StyledHeader';

const GitHubIconsHeader = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  const goToGitHub = () => {
    openInNewTab('https://github.com/adiletzainidinov/PORTFOLIO_2');
  };
  return (
    <>
      <IconsContainer onClick={goToGitHub}>
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
