import { styled } from '@mui/material';

export const Container = styled('div')(() => ({
  width: '100%',
  height: '100%',
  minHeight: 60,
  backgroundColor: 'red',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(24, 23, 39, 0.4)',
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
  height: '100%',
  minHeight: '60px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const Title = styled('h2')(() => ({
  fontSize: 18,
  fontWeight: 500,
}));

export const SubTitle = styled('h2')(() => ({
  fontSize: 18,
  fontWeight: 500,
}));

export const IconsFooter = styled('div')(() => ({
  display: 'flex',
  gap: 20,
}));

export const IconBox = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  z-index: 10;

  & p {
    margin: 0;
  }

  & ion-icon {
    width: 25px;
    height: 25px;
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  &:hover {
    background-color: none; 
    transform: scale(1.2);

    & ion-icon {
      transform: rotate(360deg);
    }
  }

  &:active {
    transform: scale(1.1);
    transition: transform 0.1s ease-in-out;

    & ion-icon {
      transform: rotate(180deg);
    }
  }
`;


export const IconImg = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px; 
  height: 25px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  z-index: 10;
  & img {
    border-radius: 50%;
    width: 100%; 
    height: 100%;
    transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.2); 
    transform: rotate(720deg);

    & img {
      transform: scale(1.1); 
      filter: brightness(1.2); 
    }
  }

  &:active {
    transform: scale(1.1); 
    transition: transform 0.1s ease-in-out;

    & img {
      transform: scale(1); 
    }
  }
`;
