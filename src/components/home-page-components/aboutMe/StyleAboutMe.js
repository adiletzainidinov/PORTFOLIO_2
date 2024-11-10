import { styled } from '@mui/material';

export const Container = styled('div')(() => ({
  width: '100%',
  marginTop: '200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media (max-width: 1200px)': {
    width: '100%',
    marginTop: '150px',
  },
  '@media (max-width: 990px)': {
    width: '100%',
    marginTop: '120px',
  },
  '@media (max-width: 766px)': {
    width: '100%',
    marginTop: '0px',
  },
  '@media (max-width: 600px)': {
    width: '100%',
  },
}));

export const StyledBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '1536px',
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
  '@media (max-width: 600px)': {
    width: '100%',
  },
}));

export const ContentBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '1300px',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '50px',
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
    flexDirection: 'column',
    alignItems: 'center',
  },
  '@media (max-width: 600px)': {
    width: '100%',
    maxWidth: '410px',
  },
  '@media (max-width: 420px)': {
    width: '100%',
    maxWidth: '330px',
  },
}));

// Left

export const BoxLeft = styled('div')(() => ({
  width: '100%',
  maxWidth: 650,
  height: '100%',
  minHeight: 500,
  display: 'flex',
  '@media (max-width: 1200px)': {
    width: '100%',
    maxWidth: '428px',
  },
  '@media (max-width: 990px)': {
    width: '100%',
    maxWidth: '365px',
    padding: '0 49px',
  },
  '@media (max-width: 766px)': {
    width: '100%',
  },
  '@media (max-width: 600px)': {
    width: '100%',
  },
}));

export const ImgBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '650px',
  height: '100%',
  maxHeight: '500px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledImage = styled('img')(() => ({
  width: 580,
  height: 330,
  borderRadius: 20,
  margin: '50px 0 0 0px',
  boxShadow: '1px 1px 10px 1px rgba(161, 8, 186, 0.5)',
  border: '1px solid rgba(161, 8, 186, 0.5)',
  '@media (max-width: 990px)': {
    width: 340,
    height: 350,
  },
  '@media (max-width: 600px)': {
    maxHeight: 250,
  },
  '@media (max-width: 420px)': {
    width: '250px',
    height: 210,
  },
}));

export const AnimatedBox = styled('div')(() => ({
  width: 200,
  height: 200,
  borderRadius: '50%',
  backgroundColor: '#211729',
  position: 'relative',
  boxShadow: '1px 1px 10px 1px rgba(161, 8, 186, 0.5)',
  top: 250,
  right: 160,
  '& .WorkingEmoji': {
    position: 'absolute',
    top: 65,
    left: 65,
  },
  '& .SpinnerPic': {
    animation: 'spin 10s linear infinite',
  },
  '@keyframes spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  '@media (max-width: 600px)': {
    width: '100%',
    top: 340,
    right: 220,
  },
  '@media (max-width: 420px)': {
    width: '100%',
    top: 320,
    right: 200,
  },
}));

// Right

export const BoxRigh = styled('div')(() => ({
  width: '100%',
  maxWidth: '650px',
  padding: '0 0 0 40px',
  '@media (max-width: 1200px)': {
    width: '100%',
    maxWidth: '428px',
  },
  '@media (max-width: 990px)': {
    width: '100%',
    maxWidth: '365px',
  },
  '@media (max-width: 766px)': {
    width: '100%',
    alignSelf: 'start',
  },
  '@media (max-width: 600px)': {
    width: '100%',
    marginTop: 100,
  },
}));

export const Title = styled('h2')(() => ({
  fontSize: 38,
  fontWeight: 900,
  color: '#ae08bc',
  marginBottom: 20,
  '@media (max-width: 1200px)': {
    width: '100%',
    fontSize: 32,
  },
  '@media (max-width: 990px)': {
    width: '100%',
    fontSize: 28,
  },
  '@media (max-width: 420px)': {
    width: '100%',
    fontSize: 26,
  },
}));

export const SubTitle = styled('h2')(() => ({
  fontSize: 30,
  fontWeight: 900,
  marginBottom: 20,
  '@media (max-width: 1200px)': {
    width: '100%',
    fontSize: 24,
  },
  '@media (max-width: 990px)': {
    width: '100%',
    fontSize: 22,
  },
  '@media (max-width: 420px)': {
    width: '100%',
    fontSize: 20,
  },
}));

export const MainText = styled('h2')(() => ({
  width: '100%',
  maxWidth: '600px',
  fontSize: 20,
  fontWeight: 900,
  marginBottom: 20,
  lineHeight: '32px',
  '@media (max-width: 1200px)': {
    width: '100%',
    fontSize: 18,
    lineHeight: '28px',
  },
  '@media (max-width: 990px)': {
    width: '100%',
    fontSize: 16,
  },
  '@media (max-width: 420px)': {
    width: '100%',
    fontWeight: 500
  },
}));
