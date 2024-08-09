import { useNavigate } from 'react-router';
import {
  IconProjectsContainer,
  ProjectsContainer,
} from '../style-animation/StyledHeader';

const ProjectsHeader = () => {
  const navigate = useNavigate();

  const handleRouter = () => {
    navigate('projects');
  };
  return (
    <>
      <ProjectsContainer onClick={handleRouter}>
        <IconProjectsContainer>
          <p>
            <ion-icon name="desktop-outline"></ion-icon>
            <span>Projects</span>
          </p>
        </IconProjectsContainer>
      </ProjectsContainer>
    </>
  );
};

export default ProjectsHeader;
