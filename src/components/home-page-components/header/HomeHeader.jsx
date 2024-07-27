import { HomeContainer, IconHomeContainer } from "./StyledHeader"

const HomeHeader = () => {
  return (
    <>
        <HomeContainer>
              <IconHomeContainer>
                <p>
                  <ion-icon name="home-outline"></ion-icon>
                  <span>Home</span>
                </p>
              </IconHomeContainer>
            </HomeContainer>
    </>
  )
}

export default HomeHeader