import { useRouteError, useNavigate } from "react-router-dom";
import styled from '@emotion/styled';

const ErrorPageContainer = styled('div')({
  color: 'white',
  textAlign: 'center',
  padding: '20px',
  position: 'relative',
  zIndex: 10,
});

const Title = styled('h1')({
  fontSize: '42px',
  color: '#c770f0',
  fontWeight: 500,
  marginBottom: '10px',
  position: 'relative',
  zIndex: 10,
});

const Message = styled('p')({
  fontSize: '18px',
  marginBottom: '20px',
  position: 'relative',
  zIndex: 10,
});

const ErrorMessage = styled('i')({
  fontSize: '16px',
  color: '#f07070',
  position: 'relative',
  zIndex: 10,
});

const Button = styled('button')({
  backgroundColor: '#c770f0',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  margin: '10px',
  borderRadius: '5px',
  position: 'relative',
  zIndex: 10,
  '&:hover': {
    backgroundColor: '#b060d0',
  }
});

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleMainMenuClick = () => {
    navigate('/');
  };

  console.error(error);

  return (
    <ErrorPageContainer id="error-page">
      <Title>Oops!</Title>
      <Message>Sorry, an unexpected error has occurred.</Message>
      <Message>
        <ErrorMessage>{error.statusText || error.message}</ErrorMessage>
      </Message>
      <Button onClick={handleBackClick}>Back</Button>
      <Button onClick={handleMainMenuClick}>Main Menu</Button>
    </ErrorPageContainer>
  );
}
