import { styled, keyframes } from '@mui/system';
import { ListItem, Typography } from '@mui/material';
import Button from '../../shared/UI/button/Button';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleUp = keyframes`
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
`;

const slideBackground = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

export const PageContainer = styled('div')(() => ({
  height: '100%',
  minHeight: '695px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #db00e68a, #9b00ba, #680096, #4e0084)',
  backgroundSize: '400% 400%',
  color: 'white',
  padding: '0 20px',
  overflow: 'hidden',
  animation: `${slideBackground} 10s ease-in-out infinite`,
}));

export const ContentContainer = styled('div')(() => ({
  textAlign: 'center',
  borderRadius: '16px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: '30px',
  boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.3)',
  maxWidth: '70%',
  animation: `${scaleUp} 1s ease-out`,
  backdropFilter: 'blur(10px)',
  '@media (max-width: 1200px)': {
    maxWidth: '80%',
  },
  '@media (max-width: 960px)': {
    maxWidth: '90%',
  },
  '@media (max-width: 600px)': {
    maxWidth: '100%',
  },
}));

export const StyledTypography = styled(Typography)(() => ({
  fontWeight: 'bold',
  letterSpacing: '1.5px',
  marginBottom: '30px',
  fontSize: '40px',
  animation: `${fadeIn} 1.5s ease-out`,
  '@media (max-width: 960px)': {
    fontSize: '34px',
  },
  '@media (max-width: 600px)': {
    fontSize: '28px',
  },
  '@media (max-width: 350px)': {
    fontSize: '24px',
  },
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  opacity: 0,
  animation: `${fadeIn} 1s ease-out`,
  animationFillMode: 'forwards',
  marginBottom: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  borderRadius: '12px',
  padding: '15px',
  fontSize: '20px',
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));

export const ButtonStyle = styled(Button)(() => ({
  width: '100%',
  fontSize: 22,
  borderRadius: 12,
  '@media (max-width: 960px)': {
    fontSize: '20px',
  },
  '@media (max-width: 600px)': {
    fontSize: '18px',
  },
  '@media (max-width: 420px)': {
    fontSize: '16px',
  },
}));
