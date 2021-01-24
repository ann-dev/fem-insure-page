import React from "react"

import DropdownCurve from "assets/images/bg-pattern-mobile-nav.svg"
import NavigationLinks from "../NavigationLinks"
import Button from "components/common/Button"
import { DropdownWrapper, DropdownCurveWrapper } from "./styles"

const DropdownMenu = ({ dropdownToggled }) => (
  <DropdownWrapper dropdownToggled={dropdownToggled}>
    <NavigationLinks dropdownVariant />
    <DropdownCurveWrapper src={DropdownCurve} alt="abstract curved lines" />
    <Button darkMode>View plans</Button>
  </DropdownWrapper>
)

export default DropdownMenu
