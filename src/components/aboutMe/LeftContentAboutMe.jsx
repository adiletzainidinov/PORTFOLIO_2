import React from 'react';
import aboutMe from '../../assets/images/about-me.png';
import { AnimatedBox, BoxLeft, ImgBox, StyledImage } from './StyleAboutMe';
import SpinnerPic from '../../assets/images/spiner-pic.png';
import WorkingEmoji from '../../assets/images/working-emoji.png';

const LeftContentAboutMe = () => {
  return (
    <>
      <BoxLeft>
        <ImgBox>
          <StyledImage
            src={aboutMe}
            alt="aboutMe"
          />
        </ImgBox>
        <AnimatedBox>
          <img src={SpinnerPic} alt="SpinnerPic" className="SpinnerPic" />
          <img
            src={WorkingEmoji}
            alt="WorkingEmoji"
            className="WorkingEmoji"
            style={{ width: 70, height: 70 }}
          />
        </AnimatedBox>
      </BoxLeft>
    </>
  );
};

export default LeftContentAboutMe;
