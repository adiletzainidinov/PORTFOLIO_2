import { IconProjectsContainer, ProjectsContainer } from "./StyledHeader"

const ProjectsHeader = () => {
  return (
    <>
       <ProjectsContainer>
              <IconProjectsContainer>
                <p>
                  <ion-icon name="desktop-outline"></ion-icon>
                  <span>Projects</span>
                </p>
              </IconProjectsContainer>
            </ProjectsContainer>
    </>
  )
}

export default ProjectsHeader