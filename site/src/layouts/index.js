import React, { useState } from "react"
import styled from "styled-components"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"

import GlobalStyle from "assets/styles/globalStyles"
import Navigation from "components/shared/Navigation"
import Footer from "components/shared/Footer"

const GlobalWrapper = styled.main``

const MainLayout = ({ children }) => {
  const [isNavActive, setINavsActive] = useState(false)
  const CheckIfOpen = isNavActive

  isNavActive
    ? disableBodyScroll(GlobalWrapper)
    : enableBodyScroll(GlobalWrapper)

  const toggleDropdown = () => {
    setINavsActive(!isNavActive)
  }

  return (
    <>
      <GlobalStyle />
      <Navigation
        isOpen={CheckIfOpen}
        dropdownToggled={isNavActive}
        onClick={toggleDropdown}
      />
      <GlobalWrapper>
        {children}
        <Footer />
      </GlobalWrapper>
    </>
  )
}

export default MainLayout
