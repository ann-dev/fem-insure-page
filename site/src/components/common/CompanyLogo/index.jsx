import React from "react"
import { Link } from "gatsby"

import Logo from "assets/images/logo.svg"
import styled from "styled-components"

const LogoWrapper = styled.img`
  height: 18px;
  width: 112px;
  &:hover {
    cursor: pointer;
  }
`

const CompanyLogo = () => (
  <Link to="/">
    <LogoWrapper src={Logo} alt="Insure logotype" />
  </Link>
)


export default CompanyLogo
