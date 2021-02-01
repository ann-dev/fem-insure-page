import React, { useState } from "react"
import { Link } from "gatsby"

import NavigationLinks from "./NavigationLinks"
import Button from "components/common/Button"

import DropdownMenu from "./DropdownMenu"
import CompanyLogo from "components/common/CompanyLogo"
import Burger from "assets/images/icon-hamburger.svg"
import CloseMenu from "assets/images/icon-close.svg"
import { NavWrapper, NavContentWrapper, BurgerWrapper } from "./styles"

const Navigation = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleScroll = () => {
    const dropdownContainer = document.getElementById("dropdown")

    if (dropdownContainer.style.display === "none") {
      document.body.style.overflow = "scroll"
    } else if (!isActive) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "scroll"
    }
  }

  const toggleDropdown = () => {
    setIsActive(!isActive)
    toggleScroll()
  }

  const CheckIfOpen = isActive ? true : false

  return (
    <>
      <NavWrapper>
        <NavContentWrapper>
          <CompanyLogo />
          <nav>
            <NavigationLinks />
            <Button>
              <Link to="/view-plans">View plans</Link>
            </Button>
            <BurgerWrapper
              src={isActive ? CloseMenu : Burger}
              alt="horizontal lines in a box"
              onClick={toggleDropdown}
              isOpen={CheckIfOpen}
            />
          </nav>
        </NavContentWrapper>
      </NavWrapper>
      <DropdownMenu dropdownToggled={isActive ? true : false} />
    </>
  )
}

export default Navigation
