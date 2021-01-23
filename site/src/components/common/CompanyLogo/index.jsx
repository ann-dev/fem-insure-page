import React from "react"
import Logo from "assets/images/logo.svg"
import styled from "styled-components"

const LogoWrapper = styled.img`
  height: 18px;
  width: 112px;
`

const CompanyLogo = () => <LogoWrapper src={Logo} alt="Insure logotype" />


export default CompanyLogo
