import { styled } from '@mui/material';

export const Container = styled('div')(() => ({
  width: '100%',
}));

export const StyledBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '1536px',
  marginBottom: '80px',
}));

export const ContentBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '1300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const FindStyle = styled('h2')(() => ({
  fontSize: '42px',
  fontWeight: 500,
  marginBottom: 20,
  '@media (max-width: 990px)': {
    fontSize: '36px',
  },
  '@media (max-width: 600px)': {
    fontSize: '32px',
  },
  '@media (max-width: 420px)': {
    fontSize: '28px',
  },
}));

export const ConnectStyle = styled('p')(() => ({
  fontSize: '16px',
  fontWeight: 500,
  marginBottom: 30,
}));

export const IconsStyle = styled('h2')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 20,
  zIndex: '10',
}));

export const IconsLogo = styled('h2')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: white;
  color: black;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  & p ion-icon {
    width: 25px;
    height: 25px;
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.2) rotate(360deg);
    border: 1px solid #a008b7;

    & p ion-icon {
    }
  }

  &:active {
    transform: scale(1.1) rotate(180deg);
    transition: transform 0.1s ease-in-out;
  }
`;

export const IconTelegram = styled('h2')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.2) rotate(1080deg);
    & img {
      transform: scale(1.1);
      border: 1px solid #a008b7;
    }
  }

  &:active {
    transform: scale(1.1) rotate(180deg);
    transition: transform 0.1s ease-in-out;

    & img {
      transform: scale(1);
    }
  }
`;
