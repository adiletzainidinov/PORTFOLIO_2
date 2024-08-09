import AboutHeader from './AboutHeader';
import Admin from './Admin';
import BlogsHeader from './BlogsHeader';
import GitHubIconsHeader from './GitHubIconsHeader';
import HomeHeader from './HomeHeader';
import ProjectsHeader from './ProjectsHeader';
import ResumeHeader from './ResumeHeader';
import { HeaderNavMain } from '../style-animation/StyledHeader';

const HeaderNavigation = ({
  handleAdminIsvisibilityFalse,
  handleAdminIsvisibilityTrue,
  adminIsVisibility,
  handleAdminIsvisibilityToggle
}) => {


  return (
    <>
      <HeaderNavMain>
        <HomeHeader />

        <AboutHeader />

        <ProjectsHeader />

        <ResumeHeader />

        <BlogsHeader />

        <GitHubIconsHeader />

        <Admin
          handleAdminIsvisibilityTrue={handleAdminIsvisibilityTrue}
          handleAdminIsvisibilityFalse={handleAdminIsvisibilityFalse}
          adminIsVisibility={adminIsVisibility}
          handleAdminIsvisibilityToggle={handleAdminIsvisibilityToggle}
        />
      </HeaderNavMain>
    </>
  );
};

export default HeaderNavigation;
