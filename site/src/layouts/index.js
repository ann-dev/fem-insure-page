import React from "react"

import GlobalStyle from "assets/styles/globalStyles"
import Navigation from "components/shared/Navigation"
import Footer from "components/shared/Footer"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    {children}
    <Footer />
  </>
)

export default MainLayout
