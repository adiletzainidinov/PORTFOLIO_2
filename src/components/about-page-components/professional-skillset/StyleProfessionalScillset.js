import { styled } from '@mui/material';
import { keyframes } from '@mui/system';

export const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 80,
}));

export const StyledBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '1536px',
  display: 'flex',
  justifyContent: 'center',
}));

export const ContentBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '1300px',
  display: 'flex',
  flexDirection: 'column',
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
  },
}));

export const Title = styled('h2')(() => ({
  fontSize: 42,
  fontWeight: 500,
  margin: '0 auto',
  marginBottom: 30,
  '& span': {
    color: '#9454b4',
  },
  '@media (max-width: 600px)': {
    width: '100%',
    maxWidth: '350px',
    fontSize: 32,
    marginLeft: 30,
  },
  '@media (max-width: 420px)': {
    width: '100%',
    fontSize: 22,
    maxWidth: '150px',
    marginLeft: 70,
    marginRight: 0,
  },
  '@media (max-width: 320px)': {
    maxWidth: '100px',
    marginLeft: 30,
  },
}));
export const TitleTools = styled('h2')(() => ({
  fontSize: 42,
  fontWeight: 500,
  margin: '0 auto',
  marginBottom: 30,
  marginTop: 80,
  '& span': {
    color: '#9454b4',
  },
  '@media (max-width: 600px)': {
    width: '100%',
    maxWidth: '350px',
    fontSize: 32,
    marginLeft: 30,
  },
  '@media (max-width: 420px)': {
    width: '100%',
    fontSize: 22,
    maxWidth: '150px',
    marginLeft: 70,
    marginRight: 0,
  },
  '@media (max-width: 320px)': {
    maxWidth: '100px',
    marginLeft: 30,
  },
}));

export const PapaScilset = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  gap: 30,
  flexWrap: 'wrap',
  '@media (max-width: 1200px)': {
    width: '100%',
    justifyContent: 'space-around',
  },
}));

const float = keyframes`
  0% {
    transform: rotateY(0deg) rotateX(0deg) translateZ(0);
  }
  25% {
    transform: rotateY(90deg) rotateX(10deg) translateZ(10px);
  }
  50% {
    transform: rotateY(180deg) rotateX(0deg) translateZ(0);
  }
  75% {
    transform: rotateY(270deg) rotateX(-10deg) translateZ(-10px);
  }
  100% {
    transform: rotateY(360deg) rotateX(0deg) translateZ(0);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1);
  }
  25% {
    transform: perspective(1000px) rotateX(20deg) rotateY(20deg) scale(1.2);
  }
  50% {
    transform: perspective(1000px) rotateX(40deg) rotateY(40deg) scale(1.4);
  }
  75% {
    transform: perspective(1000px) rotateX(20deg) rotateY(20deg) scale(1.2);
  }
  100% {
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1);
  }
`;

export const SkillsBox = styled('div')({
  width: '100%',
  maxWidth: 220,
  height: 160,
  border: '2px solid #452a64',
  borderRadius: 10,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  perspective: '1000px',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  zIndex: 10,

  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)',
  },
  '& img': {
    width: 100,
    height: 80,
    animation: `${float} 15s linear infinite`,
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      animation: `${bounce} 1s`,
    },
  },
  '@media (max-width: 1200px)': {
    width: '100%',
    maxWidth: 180,
  },
  '@media (max-width: 990px)': {
    width: '100%',
    maxWidth: 160,
  },
  '@media (max-width: 766px)': {
    width: '100%',
    maxWidth: 190,
  },
  '@media (max-width: 420px)': {
    width: '100%',
    maxWidth: 240,
  },
});
