import React from 'react'
import { AboutContainer, IconAboutContainer } from './StyledHeader'
import { useNavigate } from 'react-router'

const AboutHeader = () => {
  const navigate = useNavigate()

  const handleRouter = () => {
    navigate('about')
  }
  return (
    <>
      <AboutContainer onClick={handleRouter}>
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