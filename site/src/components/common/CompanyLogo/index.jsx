import React from "react"
import { Link } from "gatsby"

import Logo from "assets/images/logo.svg"
import styled from "styled-components"

const LogoWrapper = styled.div`
  height: 18px;
  width: 112px;
  &:hover {
    cursor: pointer;
  }
`

const CompanyLogo = () => (
  <LogoWrapper>
    <Link to="/">
      <img src={Logo} alt="Insure logotype" />
    </Link>
  </LogoWrapper>
)

export default CompanyLogo
