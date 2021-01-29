import React, { useState } from "react"

import NavigationLinks from "./NavigationLinks"
import Button from "components/common/Button"

import DropdownMenu from "./DropdownMenu"
import CompanyLogo from "components/common/CompanyLogo"
import Burger from "assets/images/icon-hamburger.svg"
import CloseMenu from "assets/images/icon-close.svg"
import { NavWrapper, BurgerWrapper } from "./styles"

const Navigation = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleScroll = () => {
    !isActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll")
  }

  const toggleDropdown = () => {
    setIsActive(!isActive)
    toggleScroll()
  }

  const CheckIfOpen = isActive ? true : false

  return (
    <>
      <NavWrapper>
        <CompanyLogo />
        <nav>
          <NavigationLinks />
          <Button>View plans</Button>
          <BurgerWrapper
            src={isActive ? CloseMenu : Burger}
            alt="horizontal lines in a box"
            onClick={toggleDropdown}
            isOpen={CheckIfOpen}
          />
        </nav>
      </NavWrapper>
      <DropdownMenu dropdownToggled={isActive ? true : false} />
    </>
  )
}

export default Navigation
