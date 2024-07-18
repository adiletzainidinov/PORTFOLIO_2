import { styled,keyframes } from '@mui/material';
import {
  advanced3DRotation,
  backgroundFadeIn,
  bounce,
  continuousTwistRotation,
  glowingBorder,
  gradientColorTransition,
  gradientGlow,
  hover3DRotation,
  hoverBounceSpin,
  neonGlowFlicker,
  pulse,
  pulseColorEffect,
  pulseGlow,
  pulsingEffectWithShadow,
  rotate3D,
  shadowPulse,
  shadowShift,
  shake,
  shimmeringColor,
  spin,
  verticalElasticAnimation,
  wobble,
  zoom,
} from './AnimationsHeader';
import { flip } from '@popperjs/core';



export const MainContainer = styled('div')(({ isSticky }) => ({
  width: '100%',
  backgroundColor: isSticky ? 'rgba(24, 23, 39, 0.4)' : 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  zIndex: 1000,
  transition: 'background-color 1s ease', 
  animation: isSticky
    ? `${verticalElasticAnimation} 1.5s ease-out, ${backgroundFadeIn} 1s ease`
    : 'none', 
}));

export const HeaderContainer = styled('div')(({ isSticky }) => ({
  width: '100%',
  maxWidth: '1536px',
  height: '100%',
  minHeight: '70px',
  backgroundColor: isSticky ? ' rgba(24, 23, 39, 0.4)' : 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media (max-width: 1200px)': {
    width: '100%',
    maxWidth: '1200px',
  },
  '@media (max-width: 990px)': {
    width: '100%',
    maxWidth: '990px',
  },
}));

export const HeaderNav = styled('div')(({ isSticky }) => ({
  width: '100%',
  maxWidth: '1300px',
  backgroundColor: isSticky ? ' rgba(24, 23, 39, 0.4)' : 'none',
  height: '70px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white',
  '@media (max-width: 1200px)': {
    width: '100%',
    maxWidth: '936px',
  },
  '@media (max-width: 990px)': {
    width: '100%',
    maxWidth: '736px',
  },
  '@media (max-width: 766px)': {
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 40px',
  },
}));

export const HeaderNavMain = styled('div')(() => ({
  width: '100%',
  maxWidth: '48.25rem',
  display: 'flex',
  justifyContent: 'space-between',
  '@media (max-width: 766px)': {
    width: '100%',
    maxWidth: '766px',
    display: 'none',
  },
}));

// Butger-Meny

export const BurgerHeaderMeny = styled('div')(() => ({
  display: 'none',
  '@media (max-width: 766px)': {
    width: '100%',
    maxWidth: '60px',
    display: 'block',
    fontSize: '60px',
    color: '#333',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    animation: `${continuousTwistRotation} 8s linear infinite, ${pulseColorEffect} 3s infinite ease-in-out`,
    '&:hover': {
      animation: `${hoverBounceSpin} 1.2s ease-in-out`,
    },
  },
}));

// Logo

export const LogoContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  perspective: '1500px',
}));

export const LogoStyle = styled('h1')(() => ({
  fontSize: '46px',
  fontWeight: '900',
  color: '#ce5ff8',
  margin: 0,
  cursor: 'pointer',
  display: 'inline-block',
  animation: `
    ${advanced3DRotation} 15s infinite linear,
    ${neonGlowFlicker} 2s infinite alternate,
    ${gradientColorTransition} 12s linear infinite,
    ${pulsingEffectWithShadow} 2.5s infinite ease-in-out
  `,
  '&:hover': {
    animation: `
      ${hover3DRotation} 4s infinite alternate,
      ${shimmeringColor} 1.5s infinite alternate,
      ${glowingBorder} 2s infinite alternate,
      ${shadowShift} 3s infinite alternate
    `,
  },
}));

// Home

export const HomeContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '85px',
  padding: '10px',
  transition:
    'border-bottom 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    borderBottom: '4px solid red',
    borderBottomRightRadius: '4px',
    borderBottomLeftRadius: '4px',
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
  },
  '@media (max-width: 990px)': {
    marginLeft: '20px',
  },
}));

export const IconHomeContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
  '& p': {
    display: 'flex',
    alignItems: 'center',
    '& ion-icon': {
      fontSize: '24px',
      marginBottom: '4px',
      transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
    },
    '& span': {
      display: 'block',
      fontSize: '16px',
      marginLeft: '5px',
      transition: 'color 0.3s ease-in-out',
    },
  },
  '&:hover p ion-icon': {
    transform: 'scale(1.1)',
    color: 'red',
    animation: `${spin} 1s linear infinite, ${bounce} 1s ease-in-out infinite`, // Apply continuous rotation and bounce
  },
  '&:hover p span': {
    color: 'red',
  },
}));

// About

export const AboutContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '85px',
  padding: '10px',
  transition:
    'border-bottom 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    borderBottom: '4px solid yellow',
    borderBottomRightRadius: '4px',
    borderBottomLeftRadius: '4px',
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(255, 255, 0, 0.1)',
  },
}));

export const IconAboutContainer = styled('span')(() => ({
  transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
  '& ion-icon': {
    fontSize: '24px',
    transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
  },
  '&:hover ion-icon': {
    color: 'yellow',
    animation: `${pulse} 1s infinite, ${shake} 0.5s infinite`,
  },
  '& p span': {
    marginLeft: '5px',
    marginTop: '4px',
    transition: 'color 0.3s ease-in-out',
  },
  '&:hover p span': {
    color: 'yellow',
  },
}));

// Projects

export const ProjectsContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '100px',
  padding: '10px',
  transition:
    'border-bottom 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    borderBottom: '4px solid blue',
    borderBottomRightRadius: '4px',
    borderBottomLeftRadius: '4px',
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(0, 0, 255, 0.1)',
  },
}));

export const IconProjectsContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
  '& p': {
    display: 'flex',
    alignItems: 'center',
    '& ion-icon': {
      fontSize: '24px',
      transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
    },
    '& span': {
      display: 'block',
      fontSize: '16px',
      marginLeft: '5px',
      transition: 'color 0.3s ease-in-out',
    },
  },
  '&:hover p ion-icon': {
    transform: 'scale(1.1)',
    color: 'blue',
    animation: `${wobble} 1s ease-in-out infinite`,
  },
  '&:hover p span': {
    color: 'blue',
  },
}));

// Resume

export const ResumeContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '100px',
  padding: '10px',
  cursor: 'pointer',
  transition:
    'border-bottom 0.3s ease-in-out, transform 0.3s ease-in-out , box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out',
  '&:hover': {
    borderBottom: '4px solid green',
    borderBottomRightRadius: '4px',
    borderBottomLeftRadius: '4px',
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(0, 255, 0, 0.1)',
  },
}));

export const IconResumeContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out ',
  '& p': {
    display: 'flex',
    alignItems: 'center',
    '& ion-icon': {
      fontSize: '24px',
      transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out ',
    },
    '& span': {
      display: 'block',
      fontSize: '16px',
      marginLeft: '5px',
      transition: 'color 0.3s ease-in-out ',
    },
  },
  '&:hover p ion-icon': {
    transform: 'scale(1.1)',
    color: 'green',
    animation: `${flip} 1s ease-in-out infinite, ${shadowPulse} 1s ease-in-out `,
  },
  '&:hover p span': {
    color: 'green',
  },
}));

// Blogs

export const BlogsContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '85px',
  padding: '10px',
  cursor: 'pointer',
  transition:
    'border-bottom 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out',
  '&:hover': {
    borderBottom: '4px solid purple',
    borderBottomRightRadius: '4px',
    borderBottomLeftRadius: '4px',
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(128, 0, 128, 0.1)',
  },
}));

export const IconBlogsContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
  '& p': {
    display: 'flex',
    alignItems: 'center',
    '& ion-icon': {
      fontSize: '24px',
      transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
    },
    '& span': {
      display: 'block',
      fontSize: '16px',
      marginLeft: '5px',
      transition: 'color 0.3s ease-in-out',
    },
  },
  '&:hover p ion-icon': {
    animation: `${zoom} 1s ease-in-out infinite`,
    color: 'purple',
  },
  '&:hover p span': {
    color: 'purple',
  },
}));

// Git-hub

export const IconsContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '85px',
  padding: '10px',
  perspective: '1000px',
  cursor: 'pointer',
  '& p': {
    display: 'flex',
    alignItems: 'center',
    '& a': {
      display: 'flex',
      alignItems: 'center',
      margin: '0 5px',
      transition:
        'transform 0.6s ease-in-out, color 0.6s ease-in-out, background 0.6s ease-in-out, box-shadow 0.6s ease-in-out',
    },
    '& ion-icon': {
      fontSize: '24px',
      transition:
        'transform 0.6s ease-in-out, color 0.6s ease-in-out, box-shadow 0.6s ease-in-out',
    },
  },
  '&:hover p a ion-icon': {
    animation: `${rotate3D} 1.5s ease-in-out, ${gradientGlow} 1.5s ease-in-out, ${pulseGlow} 1.5s ease-in-out`,
    color: '#fff',
  },
}));
