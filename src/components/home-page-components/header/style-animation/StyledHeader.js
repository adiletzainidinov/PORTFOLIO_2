import { TextField, keyframes, styled } from '@mui/material';
import {
  advanced3DRotation,
  backgroundFadeIn,
  bounce,
  continuousTwistRotation,
  flipAndPulse1,
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
import Button from '../../../../shared/UI/button/Button';

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
  maxWidth: '96rem',
  height: '100%',
  minHeight: '70px',
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
  '@media (max-width: 320px)': {
    width: '100%',
    maxWidth: '200px',
  },
}));

export const HeaderNav = styled('div')(({ isSticky }) => ({
  width: '100%',
  maxWidth: '81.25rem',
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
  '@media (max-width: 320px)': {
    margin: '0px',
  },
}));

export const HeaderNavMain = styled('div')(() => ({
  width: '100%',
  maxWidth: '48.25rem',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  '@media (max-width: 990px)': {
    width: '100%',
    maxWidth: '766px',
    display: 'none',
  },
}));

// Butger-Meny

export const BurgerContainer = styled('div')(() => ({
  position: 'relative',
}));

export const BurgerHeaderMeny = styled('div')(() => ({
  display: 'none',
  '@media (max-width: 990px)': {
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
    '&:active': {
      animation: `${hoverBounceSpin} 1.2s ease-in-out`,
    },
  },
}));

export const BurgerNav = styled('div')(
  ({ isVisibility, adminIsVisibility }) => ({
    width: '100%',
    minWidth: 300,
    height: '100%',
    minHeight: 510,
    borderRadius: 10,
    border: '2px solid white',
    backgroundColor: '#0a0910',
    color: 'white',
    position: 'absolute',
    top: 60,
    right: 30,
    display: 'flex',
    padding: 20,
    gap: 20,
    display: isVisibility ? 'block' : 'none',
    '& button': {
      width: '100%',
      marginTop: 30,
    },
    '& .homeHeader': {
      backgroundColor: 'red',
    },
    '@media (max-width: 420px)': {
      width: '100%',
      minWidth: 200,
    },
    '@media (min-width: 990px)': {
      display: 'none',
    },
  })
);

export const HeaderBox = styled('div')(() => ({
  paddingRight: 220,
  borderBottom: '2px solid white',
  marginBottom: 10,
  '@media (max-width: 420px)': {
    width: '100%',
    paddingRight: 120,
  },
}));

export const AboutHeaderBox = styled('div')(() => ({
  paddingRight: 180,
  borderBottom: '2px solid white',
  marginBottom: 10,
  '@media (max-width: 420px)': {
    width: '100%',
    paddingRight: 80,
  },
}));

export const ProjectsHeaderBox = styled('div')(() => ({
  paddingRight: 160,
  borderBottom: '2px solid white',
  marginBottom: 10,
  '@media (max-width: 420px)': {
    width: '100%',
    paddingRight: 60,
  },
}));

export const ResumeHeaderBox = styled('div')(() => ({
  paddingRight: 160,
  borderBottom: '2px solid white',
  marginBottom: 10,
  '@media (max-width: 420px)': {
    width: '100%',
    paddingRight: 60,
  },
}));

export const BlogsHeaderBox = styled('div')(() => ({
  paddingRight: 180,
  borderBottom: '2px solid white',
  marginBottom: 10,
  '@media (max-width: 420px)': {
    width: '100%',
    paddingRight: 80,
  },
}));

export const GitHubIconsHeaderBox = styled('div')(() => ({
  paddingRight: 195,
  borderBottom: '2px solid white',
  marginBottom: 10,
  '@media (max-width: 420px)': {
    width: '100%',
    paddingRight: 95,
  },
}));

export const AdminHeaderBox = styled('div')(() => ({
  paddingRight: 180,
  borderBottom: '2px solid white',
  marginBottom: 10,
  '@media (max-width: 420px)': {
    width: '100%',
    paddingRight: 80,
  },
}));

// Burger modal

export const ModalContainerBurger = styled('div')(() => ({
  '& h2': {
    textAlign: 'center',
    marginBottom: 40,
  },
}));

export const TextFieldNameBurger = styled(TextField)(() => ({
  width: '100%',
  marginBottom: 20,
}));

export const TextFieldPasswordBurger = styled(TextField)(() => ({
  width: '100%',
  marginBottom: 20,
}));

export const TextFieldContainerLoginBurger = styled('div')(() => ({
  position: 'relative',
  '& p': {
    position: 'absolute',
    top: 15,
    right: 20,
    fontSize: 28,
    zIndex: 20,
    cursor: 'pointer',
  },
}));

export const TextFieldContainerPasswordBurger = styled('div')(() => ({
  position: 'relative',
  '& p': {
    position: 'absolute',
    top: 15,
    right: 20,
    fontSize: 28,
    zIndex: 20,
    cursor: 'pointer',
  },
}));

export const TextFieldContainerPasswordLineBurger = styled('div')(({showPasswordLine}) => ({
  position: 'absolute',
  width: 35,
  height: 2,
  color: 'black',
  top: 28,
  right: 18,
  backgroundColor: 'black',
  transform: 'rotate(-45deg)',
  transformOrigin: 'center',
  display: showPasswordLine ? 'none' : 'block',
}));

export const ButtonStyleBurger = styled(Button)(() => ({
  width: '100%',
  marginBottom: 10,
  marginTop: 20,
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
    animation: `${flipAndPulse1} 1s ease-in-out infinite, ${shadowPulse} 1s ease-in-out `,
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

// Admin

export const AdminContainer = styled('div')(() => ({
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
    borderBottom: '4px solid #00ffff',
    borderBottomRightRadius: '4px',
    borderBottomLeftRadius: '4px',
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(0, 255, 255, 0.1)',
  },
  '@media (max-width: 990px)': {
    // marginTop: 200
  },
}));

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const IconAdminContainer = styled('div')(() => ({
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
    animation: `${rotate} 1s ease-in-out infinite`,
    color: '#00ffff',
  },
  '&:hover p span': {
    color: '#00ffff',
  },
}));

// AdminMeny

export const AdminMeny = styled('div')(() => ({
  width: '100%',
  maxWidth: 300,
  height: '100%',
  minHeight: 200,
  borderRadius: 10,
  boxShadow: '1px 1px 5px 1px rgba(0.1,0.1,0.1,0.1)',
  backgroundColor: 'white',
  position: 'absolute',
  top: 40,
  right: 20,
  padding: 20,
}));

export const AdminMenyBurger = styled(AdminMeny)(() => ({
  zIndex: 100,
  maxHeight: 200,
  marginTop: 360,
  marginRight: 210,
  '@media (max-width: 766px)': {
    marginRight: 0,
  },
  '@media (max-width: 420px)': {
    maxHeight: 220,
  },
}));

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const EditAccount = styled('div')`
  color: black;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  animation: ${fadeIn} 0.5s ease-out;

  .accaunt {
    margin-bottom: 10px;
    margin-top: 20px;
    border-bottom: 2px solid black;
    padding-bottom: 10px;
    transition: color 0.3s ease;

    &:hover {
      color: #333399;
    }
  }

  .tema {
    margin-bottom: 30px;
    border-bottom: 2px solid black;
    padding-bottom: 10px;
    transition: color 0.3s ease;

    &:hover {
      color: #333399;
    }
  }
`;

export const StyledButton = styled(Button)(() => ({
  width: '100%',
}));

// admin

export const ModalContainer = styled('div')(() => ({
  '& h2': {
    textAlign: 'center',
    marginBottom: 40,
  },
}));

export const TextFieldName = styled(TextField)(() => ({
  width: '100%',
  marginBottom: 20,
}));

export const TextFieldPassword = styled(TextField)(() => ({
  width: '100%',
  marginBottom: 20,
}));

export const TextFieldContainerLogin = styled('div')(() => ({
  position: 'relative',
  '& p': {
    position: 'absolute',
    top: 15,
    right: 20,
    fontSize: 28,
    zIndex: 20,
    cursor: 'pointer',
  },
}));

export const TextFieldContainerPassword = styled('div')(() => ({
  position: 'relative',
  '& p': {
    position: 'absolute',
    top: 15,
    right: 20,
    fontSize: 28,
    zIndex: 20,
    cursor: 'pointer',
  },
}));

export const TextFieldContainerPasswordLine = styled('div')(({showPasswordLine}) => ({
  position: 'absolute',
  width: 35,
  height: 2,
  color: 'black',
  top: 28,
  right: 18,
  backgroundColor: 'black',
  transform: 'rotate(-45deg)',
  transformOrigin: 'center',
  display: showPasswordLine ? 'none' : 'block',
}));

export const ButtonStyle = styled(Button)(() => ({
  width: '100%',
  marginBottom: 10,
  marginTop: 20,
}));
