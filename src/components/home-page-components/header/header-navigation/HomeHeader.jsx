import { useNavigate } from 'react-router';
import {
  HomeContainer,
  IconHomeContainer,
} from '../style-animation/StyledHeader';

const HomeHeader = () => {
  const navigate = useNavigate();

  const handleRouter = () => {
    navigate('/');
  };
  return (
    <>
      <HomeContainer onClick={handleRouter}>
        <IconHomeContainer>
          <p>
            <ion-icon name="home-outline"></ion-icon>
            <span>Home</span>
          </p>
        </IconHomeContainer>
      </HomeContainer>
    </>
  );
};

export default HomeHeader;
