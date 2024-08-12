import React from 'react';
import { Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import Logo from '../../components/home-page-components/header/burger-logo/Logo';

const eyeMove = keyframes`
  0%, 10% { background-position: 0px 0px; }
  13%, 40% { background-position: -15px 0px; }
  43%, 70% { background-position: 15px 0px; }
  73%, 90% { background-position: 0px 15px; }
  93%, 100% { background-position: 0px 0px; }
`;

const blink = keyframes`
  0%, 10%, 12%, 20%, 22%, 40%, 42%, 60%, 62%, 70%, 72%, 90%, 92%, 98%, 100% {
    height: 48px;
  }
  11%, 21%, 41%, 61%, 71%, 91%, 99% {
    height: 18px;
  }
`;

const animloader = keyframes`
  0% {
    transform: translate(0px, 0px) scaleX(1);
  }
  14% {
    transform: translate(-12px, -16px) scaleX(1.05);
  }
  28% {
    transform: translate(-27px, -28px) scaleX(1.07);
  }
  42% {
    transform: translate(-46px, -35px) scaleX(1.1);
  }
  57% {
    transform: translate(-70px, -37px) scaleX(1.1);
  }
  71% {
    transform: translate(-94px, -32px) scaleX(1.07);
  }
  85% {
    transform: translate(-111px, -22px) scaleX(1.05);
  }
  100% {
    transform: translate(-125px, -9px) scaleX(1);
  }
`;

const animloader1 = keyframes`
  0% {
    box-shadow: 0 -6px, -122.9px -8px;
  }
  25%, 75% {
    box-shadow: 0 0px, -122.9px -8px;
  }
  100% {
    box-shadow: 0 0px, -122.9px -16px;
  }
`;

const rotate = keyframes`
  to { transform: rotate(360deg); }
`;

const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

const StyledBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '1440px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const ContentBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '1300px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 100,
}));

const MainBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '400px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 100,
  margin: '0 auto',
  position: 'relative',
  '@media (max-width: 480px)': {
    width: 200,
  },
}));

const LoadingEyeContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: 200,
  margin: '0 auto',
  position: 'absolute',
  top: 210,
  left: 110,
  '@media (max-width: 480px)': {
    left: 0,
  },
}));

const LoaderWrapperEye = styled(Box)({
  position: 'absolute',
  width: '108px',
  display: 'flex',
  justifyContent: 'space-between',
  top: 0,
  left: 40,
});

const LoaderCircle = styled(Box)({
  width: '48px',
  height: '48px',
  backgroundColor: '#FFF',
  backgroundImage: 'radial-gradient(circle 14px, #0d161b 100%, transparent 0)',
  backgroundRepeat: 'no-repeat',
  borderRadius: '50%',
  animation: `${eyeMove} 10s infinite, ${blink} 10s infinite`,
});

const LoaderWrapper = styled(Box)({
  position: 'relative',
  width: '108px',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 80,
});

const LoaderText = styled(Box)({
  color: '#FFF',
  position: 'relative',
  display: 'inline-block',
  marginTop: '40px',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '48px',
  letterSpacing: '4px',
  boxSizing: 'border-box',
  '&::before': {
    content: '""',
    position: 'absolute',
    right: '70px',
    bottom: '10px',
    height: '28px',
    width: '5.15px',
    background: 'currentColor',
    boxSizing: 'border-box',
    animation: `${animloader1} 1s linear infinite alternate`,
  },
  '&::after': {
    content: '""',
    width: '10px',
    height: '10px',
    position: 'absolute',
    left: '125px',
    top: '2px',
    borderRadius: '50%',
    background: 'red',
    boxSizing: 'border-box',
    animation: `${animloader} 1s linear infinite alternate`,
  },
});

const RotatingLoader = styled('div')({
  position: 'realative',
  width: '400px',
  height: '264px',
  borderRadius: '50%',
  animation: `${rotate} 1.75s linear infinite`,
  margin: '0 auto',
  marginTop: 170,
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '20px',
    height: '40px',
    border: '1px solid #FF3D00',
    borderWidth: '12px 2px 7px',
    borderRadius: '2px 2px 1px 1px',
    boxSizing: 'border-box',
    transform: 'rotate(45deg) translate(24px, -10px)',
    backgroundImage:
      'linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 30px, transparent 0), linear-gradient(#FF3D00 30px, transparent 0)',
    backgroundSize: '10px 12px , 1px 30px, 1px 30px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center , 12px 0px , 3px 0px',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    height: '4px',
    width: '4px',
    left: '20px',
    top: '47px',
    borderRadius: '50%',
    color: '#FFF',
    boxShadow:
      '-4px 7px 2px, -7px 16px 3px 1px, -11px 24px 4px 1px, -6px 24px 4px 1px, -14px 35px 6px 2px, -5px 36px 8px 2px, -5px 45px 8px 2px, -14px 49px 8px 2px, 6px 60px 11px 1px, -11px 66px 11px 1px, 11px 75px 13px, -1px 82px 15px',
  },
  '@media (max-width: 480px)': {
    display: 'none',
  },
});

const Loader = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <ContentBox>
            <MainBox>
              <LoadingEyeContainer>
                <LoaderWrapperEye>
                  <LoaderCircle />
                  <LoaderCircle />
                </LoaderWrapperEye>
                <LoaderWrapper>
                  <LoaderCircle />
                  <LoaderCircle />
                  <LoaderText>Load&nbsp;ng</LoaderText>
                </LoaderWrapper>
              </LoadingEyeContainer>
              <RotatingLoader />
            </MainBox>
          </ContentBox>
        </StyledBox>
      </Container>
    </>
  );
};

export default Loader;
