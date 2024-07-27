import React from 'react'
import { AboutContainer, IconAboutContainer } from './StyledHeader'

const AboutHeader = () => {
  return (
    <>
      <AboutContainer>
              <IconAboutContainer>
                <p style={{ display: 'flex' }}>
                  <ion-icon name="person-outline"></ion-icon>
                  <span>About</span>{' '}
                </p>
              </IconAboutContainer>
            </AboutContainer>
    </>
  )
}

export default AboutHeader