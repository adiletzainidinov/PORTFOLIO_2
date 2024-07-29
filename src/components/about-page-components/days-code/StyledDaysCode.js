import { styled } from '@mui/material';

export const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
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
  alignItems: 'center'
}));

export const Title = styled('h2')(() => ({
  fontSize: 42,
  fontWeight: 500,
  marginBottom: 10,
  textAlign: 'center',
  '& span': {
    color: '#c770f0',
  },
}));

export const ImgSnake = styled('img')(() => ({
  width: '100%',
  maxWidth: '1300px',
  marginBottom: 40,
  cursor: 'pointer',
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
    maxWidth: '536px',
  },
  '@media (max-width: 600px)': {
    width: '100%',
    maxWidth: '380px',
  },
  '@media (max-width: 420px)': {
    width: '100%',
    maxWidth: '280px',
  },
}));
