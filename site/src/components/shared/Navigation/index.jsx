import React from "react"
import { Link } from "gatsby"

import NavigationLinks from "./NavigationLinks"
import Button from "components/common/Button"

import DropdownMenu from "./DropdownMenu"
import CompanyLogo from "components/common/CompanyLogo"
import Burger from "assets/images/icon-hamburger.svg"
import CloseMenu from "assets/images/icon-close.svg"
import { NavWrapper, NavContentWrapper, BurgerWrapper } from "./styles"

const Navigation = ({ isOpen, dropdownToggled, onClick }) => (
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
              src={dropdownToggled ? CloseMenu : Burger}
              alt="horizontal lines in a box"
              onClick={onClick}
              isOpen={isOpen}
            />
          </nav>
        </NavContentWrapper>
      </NavWrapper>
      <DropdownMenu dropdownToggled={dropdownToggled} />
    </>
)

export default Navigation
