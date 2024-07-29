import { styled } from '@mui/material';

export const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: 150,
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
}));

export const Title = styled('div')(() => ({
  fontSize: 42,
  color: '#c770f0',
  fontWeight: 500,
  textAlign: 'center',
  marginBottom: 10,
}));

export const SubTitle = styled('div')(() => ({
  fontSize: 22,
  fontWeight: 500,
  textAlign: 'center',
  marginBottom: 60,
}));

// First lert

export const FirstContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1300px',
  height: '100%',
  minHeight: 500,
  border: '1px solid #9a08af',
  borderRadius: '20px',
  boxShadow: '1px 1px 15px 1px #9a08af',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#221635',
}));

export const Left = styled('div')(() => ({
  width: '100%',
  maxWidth: '650px',
}));

export const TitleRight = styled('div')(() => ({
  fontSize: 34,
  color: '#c770f0',
  fontWeight: 700,
  textAlign: 'center',
  marginBottom: 40,
  marginTop: 30,
}));

export const SubTitleFirst = styled('div')(() => ({
  fontSize: 22,
  fontWeight: 500,
  textAlign: 'center',
  marginLeft: 40,
  lineHeight: '28px',
}));

export const BoxButton = styled('div')(() => ({
  width: '100%',
  maxWidth: '550px',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: 20,
  alignItems: 'center',
  marginTop: 30,
  marginLeft: 80,
  '& button': {
    zIndex: 0,
  },
}));

export const LinkFirst = styled('div')(() => ({
  width: '100%',
  maxWidth: '350px',
  display: 'flex',
  margin: '0 auto',
  marginTop: 30,
  marginBottom: 50,
  '& a': {
    zIndex: 10,
    textDecoration: 'none',
  },
  '& p': {
    fontSize: 20,
    fontWeight: 600,
    marginRight: 40,
    display: 'flex',
    alignItems: 'center',
    zIndex: 10,
    cursor: 'pointer',
    color: 'white',
    transition: 'transform 0.3s ease, color 0.3s ease',
    '& span': {
      marginLeft: 10,
      marginTop: 7,
      zIndex: 10,
    },
    '&:hover': {
      color: '#a45cc6',
      transform: 'scale(1.2)',
    },
  },
  '&  h2': {
    fontSize: 20,
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    cursor: 'pointer',
    color: 'white',
    transition: 'transform 0.3s ease, color 0.3s ease',
    '& span': {
      marginLeft: 10,
      marginTop: 7,
      zIndex: 10,
    },
    '&:hover': {
      color: '#a45cc6',
      transform: 'scale(1.2)',
    },
  },
}));

// first right

export const Right = styled('div')(() => ({
  width: '100%',
  maxWidth: '550px',
  height: '100%',
  maxHeight: '248.5px',
  border: '1px solid #9a08af',
  boxShadow: '1px 1px 15px 1px #9a08af',
  margin: 'auto',
  zIndex: 10,
  borderRadius: 20,
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Video = styled('video')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
}));
