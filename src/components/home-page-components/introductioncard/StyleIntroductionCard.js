import { Box, Typography, keyframes, styled } from '@mui/material';
import {
  blinkEffect,
  colorChange,
  opasityIcon,
  typing,
  typingFive,
  typingFour,
  typingSecond,
  typingSix,
  typingThird,
} from './animationInproductionCard';
import Button from '../../../shared/UI/button/Button';

export const CardContainder = styled('div')(() => ({
  marginTop: '70px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

export const CardBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '96rem',
  display: 'flex',
  justifyContent: 'center',
  '@media (max-width: 1200px)': {
    width: '100%',
    maxWidth: '1200px',
  },
  '@media (max-width: 990px)': {
    width: '100%',
    maxWidth: '990px',
  },
  '@media (max-width: 766px)': {
    width: '100%',
    maxWidth: '766px',
  },
}));

export const ContentBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '81.25rem',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '6.875rem',
  '@media (max-width: 1200px)': {
    width: '100%',
    maxWidth: '936px',
    marginTop: '8.125rem',
  },
  '@media (max-width: 990px)': {
    width: '100%',
    maxWidth: '736px',
  },
  '@media (max-width: 766px)': {
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    marginTop: '70px',
  },
}));

// Left Card

export const LeftCardContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '700px',
  marginBottom: '30px',
  marginTop: '70px',
  '@media (max-width: 1200px)': {
    width: '100%',
    maxWidth: '450px',
    marginRight: 100,
    marginTop: '0px',
  },
  '@media (max-width: 990px)': {
    width: '100%',
    maxWidth: '300px',
    marginRight: 80,
  },
  '@media (max-width: 766px)': {
    width: '100%',
    maxWidth: '400px',
  },
  '@media (max-width: 600px)': {
    width: '100%',
    maxWidth: '250px',
  },
  '@media (max-width: 420px)': {
    width: '100%',
    margin: '0 20px',
  },
}));

// Left Card => Title
export const TitleContainer = styled('div')`
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 990px) {
    width: 100%;
  }
`;

export const StaticText = styled(Typography)(({ isAuth }) => ({
  fontSize: '42px',
  fontWeight: 900,
  marginBottom: '16px',
  cursor: isAuth ? 'pointer' : 'auto',
  '@media (max-width: 990px)': {
    width: '100%',
    fontSize: '34px',
  },
  '@media (max-width: 766px)': {
    width: '100%',
  },
  '@media (max-width: 420px)': {
    width: '100%',
    fontSize: '24px',
  },
}));

export const BoxFlex = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  '@media (max-width: 1200px)': {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'start',
  },
}));

export const TypingText = styled(Typography)`
  font-size: 42px;
  font-weight: 700;
  color: #333;
  border-right: 2px solid;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  margin-bottom: 15px;
  margin-left: 10px;
  display: inline;
  animation: ${typing} 4s steps(60, end) infinite,
    ${blinkEffect} 1s step-end infinite, ${colorChange} 6s linear infinite;

  @media (max-width: 1200px) {
    animation: ${typingSecond} 4s steps(60, end) infinite,
      ${blinkEffect} 1s step-end infinite, ${colorChange} 6s linear infinite;
    width: 100%;
    max-width: 1200px;
    margin-left: 0;
  }
  @media (max-width: 990px) {
    width: 100%;
    font-size: 34px;
    animation: ${typingThird} 4s steps(60, end) infinite,
      ${blinkEffect} 1s step-end infinite, ${colorChange} 6s linear infinite;
  }
  @media (max-width: 766px) {
    width: 100%;
    font-size: 34px;
    animation: ${typingFour} 4s steps(60, end) infinite,
      ${blinkEffect} 1s step-end infinite, ${colorChange} 6s linear infinite;
  }
  @media (max-width: 600px) {
    width: 100%;
    font-size: 34px;
    animation: ${typingFive} 4s steps(60, end) infinite,
      ${blinkEffect} 1s step-end infinite, ${colorChange} 6s linear infinite;
  }
  @media (max-width: 420px) {
    width: 100%;
    font-size: 24px;
    animation: ${typingSix} 4s steps(60, end) infinite,
      ${blinkEffect} 1s step-end infinite, ${colorChange} 6s linear infinite;
  }
`;

// Left Card => SubTitle

export const SubTitle = styled('h2')(() => ({
  fontSize: '18px',
  fontWeight: '400',
  lineHeight: '24px',
  marginBottom: '30px',
  '& span': {
    animation: `${opasityIcon} 2s ease-in-out infinite`,
  },
  '@media (max-width: 990px)': {
    width: '100%',
    fontSize: '14px',
  },
  '@media (max-width: 420px)': {
    width: '100%',
    fontSize: '12px',
  },
}));

export const TitleText = styled('h2')(() => ({
  marginBottom: 10,
  fontSize: 20,
  fontWeight: 600,
  color: '#333',
  textAlign: 'center',
  lineHeight: 1.2,
  letterSpacing: '0.05rem',
  padding: '10px 0',
  borderBottom: '2px solid #ae08bc',
}));

export const ButtonParents = styled('div')(() => ({
  marginTop: 30,
  display: 'flex',
  justifyContent: 'space-between',
}));

export const ButtonBack = styled(Button)(() => ({}));

export const ButtonAdd = styled(Button)(() => ({}));

// Left Card => SocialMedia

export const SocialMedia = styled(Box)({
  display: 'flex',
  fontSize: '42px',
  gap: '10px',
});

const scaleAndColorChange = keyframes`
  0% {
    transform: scale(1);
    color: #a108ba; 
    text-shadow: 0 0 8px rgba(161, 8, 186, 0.6); 
  }
  50% {
    transform: scale(1.2);
    color: #a108ba; 
    text-shadow: 0 0 12px rgba(161, 8, 186, 0.8); 
  }
  100% {
    transform: scale(1);
    color: #a108ba; 
    text-shadow: 0 0 8px rgba(161, 8, 186, 0.6); 
  }
`;

const pulseAndShadow = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
  }
`;

const idleAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
    color: #fff; 
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  50% {
    transform: scale(1.05);
    color: #ddd; 
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

// Стили для компонента Linkedin
export const Linkedin = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '42px',
  transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
  cursor: 'pointer',
  animation: `${idleAnimation} 4s ease-in-out infinite`, // Анимация в спокойном состоянии

  '& p': {
    margin: 0,
    transition: 'color 0.3s ease-in-out',
  },

  '&:hover': {
    animation: `${scaleAndColorChange} 5s ease-in-out, ${pulseAndShadow} 1.5s ease-in-out infinite`,
  },
});

// Стили для компонента Github
export const Github = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '42px',
  transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
  cursor: 'pointer',
  animation: `${idleAnimation} 4s ease-in-out infinite`, // Анимация в спокойном состоянии

  '& p': {
    margin: 0,
    transition: 'color 0.3s ease-in-out',
  },

  '&:hover': {
    animation: `${scaleAndColorChange} 5s ease-in-out, ${pulseAndShadow} 1.5s ease-in-out infinite`,
  },
});

//
