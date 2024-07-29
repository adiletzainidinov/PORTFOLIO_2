import { styled } from '@mui/material';

export const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: 140,
  marginBottom: 100,
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
  justifyContent: 'space-between',
  '@media (max-width: 1200px)': {
    width: '100%',
    maxWidth: 936,
    gap: 100,
  },
  '@media (max-width: 990px)': {
    width: '100%',
    maxWidth: 736,
  },
  '@media (max-width: 766px)': {
    width: '100%',
    maxWidth: 500,
    flexWrap: 'wrap',
  },
  '@media (max-width: 600px)': {
    width: '100%',
    maxWidth: 350,
    flexWrap: 'wrap',
  },
  '@media (max-width: 420px)': {
    width: '100%',
    maxWidth: 250,
    flexWrap: 'wrap',
  },
}));

// Left

export const LeftBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '706px',
  display: 'flex',
  flexDirection: 'column',
}));

export const Title = styled('div')(() => ({
  fontSize: 42,
  fontWeight: '500',
  margin: '0 auto',
  marginBottom: '60px',
  '& span': {
    color: '#c56fee',
  },
  '@media (max-width: 420px)': {
    width: '100%',
    fontSize: 32,
  },
}));

export const SubTitle = styled('div')(() => ({
  fontSize: 18,
  fontWeight: 500,
  lineHeight: '26px',
  '& p': {
    width: '100%',
    maxWidth: '710px',
    '& span': {
      width: '100%',
      maxWidth: '510px',
      color: '#c56fee',
    },
  },
  '& h3': {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 40,
    marginBottom: 30,
  },
  '& ul': {
    listStyle: 'none',
    marginLeft: 30,
  },
  '& ul li span': {
    marginRight: 10,
  },
  '& h4': {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 20,
    marginLeft: 140,
    color: '#8f749f',
  },
  '@media (max-width: 420px)': {
    width: '100%',
    fontSize: 14,
    '& h3': {
      fontSize: 14,
    },
    '& h4': {
      fontSize: 14,
      marginLeft: 50,
    },
  },
}));

// Right

export const RightBox = styled('div')(() => ({
  width: '100%',
  maxWidth: 500,

  '& video': {
    width: '100%    ',
    maxWidth: 450,
    height: '100%',
    maxHeight: '400px',
    marginTop: 100,
    cursor: 'pointer',
    borderRadius: '20%',
  },
  '@media (max-width: 990px)': {
    width: '100%',
    '& video': {
      width: '100%    ',
      maxWidth: 300,
    },
  },
  '@media (max-width: 990px)': {
    width: '100%',
    '& video': {
      width: '100%    ',
      maxWidth: 450,
      marginTop: 0,
    },
  },
  '@media (max-width: 420px)': {
    width: '100%',
    '& video': {
      width: '100%    ',
      maxWidth: 250,
      marginTop: 0,
    },
  },
}));
