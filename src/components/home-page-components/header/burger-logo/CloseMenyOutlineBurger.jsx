import React from 'react'
import { BurgerHeaderMeny } from '../style-animation/StyledHeader'

const CloseMenyOutlineBurger = ({isVisibility,handleBurgerIsVisibilityTrue}) => {
  return (
    <>
        <BurgerHeaderMeny
          isVisibility={isVisibility}
          onClick={handleBurgerIsVisibilityTrue}
        >
          {isVisibility ? (
            <p>
              <ion-icon name="close-outline"></ion-icon>
            </p>
          ) : (
            <p>
              <ion-icon name="menu-outline"></ion-icon>
            </p>
          )}
        </BurgerHeaderMeny></>
  )
}

export default CloseMenyOutlineBurger