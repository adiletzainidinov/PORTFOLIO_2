import { styled } from '@mui/material';
import Button from '../../shared/UI/button/Button';

export const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

export const MainBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '1440px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

export const ContentBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '1300px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ImgContainer = styled('div')(() => ({
  marginTop: 80,
  marginBottom: 100,
  display: 'flex',
  flexDirection: 'column',
  '& a': {
    textDecoration: 'none',
  },
}));

export const ResumeImg = styled('img')(() => ({
  width: '100%',
  maxWidth: '1000px',
  height: '100%',
  margin: '0 auto',
  '@media (max-width: 1200px)': {
    width: '100%',
    maxWidth: 736,
  },
  '@media (max-width: 990px)': {
    width: '100%',
    maxWidth: 600,
  },
  '@media (max-width: 766px)': {
    width: '100%',
    maxWidth: 400,
  },
  '@media (max-width: 450px)': {
    width: '100%',
    maxWidth: 350,
  },
  '@media (max-width: 400px)': {
    width: '100%',
    maxWidth: 300,
  },
  '@media (max-width: 350px)': {
    width: '100%',
    maxWidth: 250,
  },
}));

export const ButtonContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  '@media (max-width: 450px)': {
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));

export const ButtonPdf = styled(Button)(({ isAnimating }) => ({
  width: '100%',
  maxWidth: 300,
  fontSize: 24,
  padding: '15px 35px',
  borderRadius: 10,
  textAlign: 'center',
  marginTop: 50,
  transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
  transform: isAnimating ? 'scale(1.1)' : 'scale(1)',
  opacity: isAnimating ? 0.8 : 0.9,
  '&:hover': {
    opacity: 1,
  },
  '@media (max-width: 766px)': {
    width: '100%',
    maxWidth: 200,
    fontSize: 18,
    padding: '10px 15px',
  },
  '@media (max-width: 500px)': {
    width: '100%',
    maxWidth: 200,
    fontSize: 18,
    padding: '10px 15px',
  },
}));
