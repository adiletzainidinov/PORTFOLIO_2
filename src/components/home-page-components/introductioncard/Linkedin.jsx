import {Linkedin} from './StyleIntroductionCard'

const LinkedinComponent = () => {

  const handleLinkedin = () => {
    window.open(
      'https://www.linkedin.com/in/%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D1%82-%D0%B7%D0%B0%D0%B9%D0%BD%D0%B8%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2-8ba279319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      '_blank'
    );
  };
  
  return (
    <>
     <Linkedin onClick={handleLinkedin}>
            <p>
              <ion-icon name="logo-linkedin"></ion-icon>
            </p>
          </Linkedin>
    </>
  )
}

export default LinkedinComponent