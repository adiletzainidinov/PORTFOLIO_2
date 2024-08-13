import React from 'react'
import { AboutHeaderBox, BlogsHeaderBox, GitHubIconsHeaderBox, HeaderBox, ProjectsHeaderBox, ResumeHeaderBox } from '../style-animation/StyledHeader'
import HomeHeader from '../header-navigation/HomeHeader'
import AboutHeader from '../header-navigation/AboutHeader'
import ProjectsHeader from '../header-navigation/ProjectsHeader'
import ResumeHeader from '../header-navigation/ResumeHeader'
import BlogsHeader from '../header-navigation/BlogsHeader'
import GitHubIconsHeader from '../header-navigation/GitHubIconsHeader'

const NavigateBurger = ({handleBurgerIsVisibilityFalse,}) => {
  return (
    <>
           <HeaderBox onClick={handleBurgerIsVisibilityFalse}>
            <HomeHeader className="homeHeader" />
          </HeaderBox>

          <AboutHeaderBox onClick={handleBurgerIsVisibilityFalse}>
            <AboutHeader />
          </AboutHeaderBox>

          <ProjectsHeaderBox onClick={handleBurgerIsVisibilityFalse}>
            <ProjectsHeader />
          </ProjectsHeaderBox>

          <ResumeHeaderBox onClick={handleBurgerIsVisibilityFalse}>
            <ResumeHeader />
          </ResumeHeaderBox>

          <BlogsHeaderBox onClick={handleBurgerIsVisibilityFalse}>
            <BlogsHeader />
          </BlogsHeaderBox>

          <GitHubIconsHeaderBox onClick={handleBurgerIsVisibilityFalse}>
            <GitHubIconsHeader />
          </GitHubIconsHeaderBox>
    </>
  )
}

export default NavigateBurger