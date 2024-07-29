import { useNavigate } from "react-router"
import { IconResumeContainer, ResumeContainer } from "./StyledHeader"

const ResumeHeader = () => {
  const navigate = useNavigate()

  const handleRouter = () => {
    navigate('resume')
  }
  return (
    <>
    <ResumeContainer onClick={handleRouter}>
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