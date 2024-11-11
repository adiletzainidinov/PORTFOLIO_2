import { goToLinkedin } from '../../../utils/externalLinks'
import {Linkedin} from './StyleIntroductionCard'

const LinkedinComponent = () => {

 
  
  return (
    <>
     <Linkedin onClick={goToLinkedin}>
            <p>
              <ion-icon name="logo-linkedin"></ion-icon>
            </p>
          </Linkedin>
    </>
  )
}

export default LinkedinComponent