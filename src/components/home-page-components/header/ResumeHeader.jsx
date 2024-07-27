import { IconResumeContainer, ResumeContainer } from "./StyledHeader"

const ResumeHeader = () => {
  return (
    <>
    <ResumeContainer>
              <IconResumeContainer>
                <p>
                  <ion-icon name="newspaper-outline"></ion-icon>
                  <span>Resume</span>
                </p>
              </IconResumeContainer>
            </ResumeContainer>
    </>
  )
}

export default ResumeHeader