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
  '@media (max-width: 600px)': {
    width: '100%',
    maxWidth: '350px',
  },
  '@media (max-width: 420px)': {
    width: '100%',
    maxWidth: '250px',
  },
}));

export const Title = styled('h2')(() => ({
  fontSize: 42,
  color: '#c770f0',
  fontWeight: 500,
  textAlign: 'center',
  marginBottom: 10,
  '@media (max-width: 766px)': {
    fontSize: 32,
  },
  '@media (max-width: 766px)': {
    fontSize: 26,
  },
}));

export const SubTitle = styled('div')(() => ({
  fontSize: 22,
  fontWeight: 500,
  textAlign: 'center',
  marginBottom: 60,
  '@media (max-width: 766px)': {
    fontSize: 18,
  },
  '@media (max-width: 766px)': {
    fontSize: 16,
  },
}));

// First

export const FirstContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1300px',
  height: '100%',
  border: '1px solid #9a08af',
  borderRadius: '20px',
  boxShadow: '1px 1px 15px 1px #9a08af',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#221635',
  marginBottom: 50,
  '@media (max-width: 1200px)': {
    width: '100%',
    maxWidth: '936px',
    margin: '0 auto',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
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

// First lert

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
  '@media (max-width: 766px)': {
    fontSize: 24,
  },
  '@media (max-width: 420px)': {
    fontSize: 20,
    marginBottom: 10,
  },
}));

export const SubTitleFirst = styled('div')(() => ({
  fontSize: 22,
  fontWeight: 500,
  textAlign: 'center',
  marginLeft: 40,
  lineHeight: '28px',
  '@media (max-width: 766px)': {
    fontSize: 18,
    marginLeft: 20,
    marginRight: 20,
  },
  '@media (max-width: 766px)': {
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
  },
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
  '@media (max-width: 766px)': {
    width: '100%',
    maxWidth: '350px',
  },
  '@media (max-width: 600px)': {
    width: '100%',
    maxWidth: '330px',
    marginLeft: 10,
    marginRight: 10,
  },
  '@media (max-width: 420px)': {
    width: '100%',
    maxWidth: '230px',
    marginLeft: 10,
    marginRight: 10,
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
  '@media (max-width: 1200px)': {
    width: '100%',
    maxWidth: '250px',
  },
  '@media (max-width: 420px)': {
    width: '100%',
    maxWidth: '150px',
    flexWrap: 'wrap',
    textAlign: 'center',
    marginBottom: 20,
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
  '@media (max-width: 766px)': {
    width: '100%',
    maxWidth: '450px',
  },
  '@media (max-width: 600px)': {
    width: '100%',
    maxWidth: '320px',
  },
  '@media (max-width: 420px)': {
    width: '100%',
    maxWidth: '240px',
  },
}));

export const Video = styled('video')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
}));

// Second 

export const SecondContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1300px',
  height: '100%',
  border: '1px solid #9a08af',
  borderRadius: '20px',
  boxShadow: '1px 1px 15px 1px #9a08af',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#221635',
  marginBottom: 50,
  '@media (max-width: 1200px)': {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '650px',
    marginTop: 50,
  },
  '@media (max-width: 600px)': {
    height: '100%',
    minHeight: 890
  },
  '@media (max-width: 420px)': {
    height: '100%',
    minHeight: 990
  },
}));

// Second Left

export const SecondLeft = styled('div')(() => ({
  width: '100%',
  maxWidth: '650px',
}));

export const SecondLeftImg = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '550px',
  height: '100%',
  maxHeight: '248px',
  border: '1px solid #9a08af',
  borderRadius: '20px',
  boxShadow: '1px 1px 15px 1px #9a08af',
  margin: '80px auto 0',
  zIndex: 10,
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  '&:hover img': {
    transform: 'translateY(-2400px)',
  },
  '@media (max-width: 1200px)': {
    width: '100%',
    marginTop: 50,
  },
  '@media (max-width: 766px)': {
    width: '100%',
    maxWidth: '450px',
    '&:hover img': {
      transform: 'translateY(-2015px)',
    },
  },
  '@media (max-width: 600px)': {
    width: '100%',
    maxWidth: '300px',
    height: '100%',
    maxHeight: '150px',
    '&:hover img': {
      transform: 'translateY(-1355px)',
    },
  },
  '@media (max-width: 420px)': {
    width: '100%',
    maxWidth: '240px',
    height: '100%',
    maxHeight: '150px',
    '&:hover img': {
      transform: 'translateY(-1055px)',
    },
  },
}));

export const Bilingual = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: 550,
  height: 'auto',
  minHeight: '1000px',
  transition: 'transform 5s ease-in-out',
  transform: 'translateY(0)',
}));

// Second right

export const SecondRight = styled('div')(() => ({
  width: '100%',
  maxWidth: '650px',
  marginRight: 40,
}));

export const TitleSecond = styled('div')(() => ({
  fontSize: 34,
  color: '#c770f0',
  fontWeight: 700,
  textAlign: 'center',
  marginBottom: 40,
  marginTop: 30,
  '@media (max-width: 766px)': {
    fontSize: 24,
  },
  '@media (max-width: 420px)': {
    fontSize: 20,
  },
}));

export const SubTitleSecond = styled('div')(() => ({
  fontSize: 22,
  fontWeight: 500,
  textAlign: 'center',
  marginLeft: 40,
  lineHeight: '28px',
  '@media (max-width: 766px)': {
    fontSize: 18,
  },
  '@media (max-width: 420px)': {
    fontSize: 16,
  },
}));

export const SecondButtons = styled('div')(() => ({
  width: '100%',
  maxWidth: '550px',
  display: 'flex',
  justifyContent: 'space-around',
  gap: 20,
  alignItems: 'center',
  marginTop: 30,
  marginLeft: 80,
  '& button': {
    zIndex: 0,
  },
  '@media (max-width: 766px)': {
    width: '100%',
    maxWidth: '450px',
    marginLeft: 45,
    marginRight: 10,
  },
  '@media (max-width: 600px)': {
    width: '100%',
    maxWidth: '300px',
    flexWrap: 'wrap',
    marginLeft: 45,
    marginRight: 10,
  },
  '@media (max-width: 420px)': {
    width: '100%',
    maxWidth: '300px',
    flexWrap: 'wrap',
    marginLeft: 25,
    marginRight: 10,
  },
}));

export const LinkSecond = styled('div')(() => ({
  width: '100%',
  maxWidth: '250px',
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
  '@media (max-width: 420px)': {
    width: '100%',
    flexWrap: 'wrap',
    marginLeft: 65,
  },
}));

// Third

export const ThirdContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1300px',
  height: '100%',
  border: '1px solid #9a08af',
  borderRadius: '20px',
  boxShadow: '1px 1px 15px 1px #9a08af',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#221635',
  marginBottom: 50,
  '@media (max-width: 1200px)': {
    width: '100%',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    minHeight: '650px',
  },
}));

// Third left

export const ThirdLeft = styled('div')(() => ({
  width: '100%',
  maxWidth: '650px',
}));

export const TitleThird = styled('div')(() => ({
  fontSize: 34,
  color: '#c770f0',
  fontWeight: 700,
  textAlign: 'center',
  marginBottom: 40,
  marginTop: 30,
  '@media (max-width: 766px)': {
    fontSize: 24,
  },
  '@media (max-width: 420px)': {
    fontSize: 20,
  },
}));

export const SubTitleThird = styled('div')(() => ({
  fontSize: 22,
  fontWeight: 500,
  textAlign: 'center',
  marginLeft: 40,
  lineHeight: '28px',
  '@media (max-width: 766px)': {
    fontSize: 18,
  },
  '@media (max-width: 420px)': {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10
  },
}));

export const ButtonsThird = styled('div')(() => ({
  width: '100%',
  maxWidth: '550px',
  display: 'flex',
  justifyContent: 'space-around',
  gap: 20,
  alignItems: 'center',
  marginTop: 30,
  marginLeft: 50,
  '& button': {
    zIndex: 0,
  },
  '@media (max-width: 766px)': {
    width: '100%',
    maxWidth: '450px',
    marginLeft: 25,
    marginRight: 10,
  },
  '@media (max-width: 600px)': {
    width: '100%',
    maxWidth: '300px',
    flexWrap: 'wrap',
    marginLeft: 25,
    marginRight: 10,
  },
  '@media (max-width: 420px)': {
    width: '100%',
    maxWidth: '300px',
    flexWrap: 'wrap',
    marginLeft: 0,
  },
}));

export const LinkThird = styled('div')(() => ({
  width: '100%',
  maxWidth: '250px',
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
  '@media (max-width: 420px)': {
    width: '100%',
    flexWrap: 'wrap',
    marginLeft: 65,
  },
}));


// Third right

export const ThirdRight = styled('div')(() => ({
  width: '100%',
  maxWidth: '650px',
}));

export const LeftImgThird = styled('div')(() => ({
  width: '100%',
  maxWidth: '550px',
  height: '100%',
  maxHeight: '248px',
  border: '1px solid #9a08af',
  borderRadius: '20px',
  boxShadow: '1px 1px 15px 1px #9a08af',
  margin: '80px auto 0',
  zIndex: 10,
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  '&:hover img': {
    transform: 'translateY(-1270px)',
  },
  '@media (max-width: 1200px)': {
    width: '100%',
    marginTop: 50,
  },
  '@media (max-width: 766px)': {
    width: '100%',
    maxWidth: '450px',
    '&:hover img': {
      transform: 'translateY(-995px)',
    },
  },
  '@media (max-width: 600px)': {
    width: '100%',
    maxWidth: '300px',
    height: '100%',
    maxHeight: '150px',
    '&:hover img': {
      transform: 'translateY(-1355px)',
    },
  },
  '@media (max-width: 420px)': {
    width: '100%',
    maxWidth: '240px',
    height: '100%',
    maxHeight: '150px',
    '&:hover img': {
      transform: 'translateY(-1055px)',
    },
  },
}));

export const NasyikatMedia = styled('img')(() => ({
  width: '100%',
  maxWidth: 550,
  height: 'auto',
  minHeight: '1000px',
  transition: 'transform 5s ease-in-out',
  transform: 'translateY(0)',
  
}));