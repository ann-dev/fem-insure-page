import styled from "styled-components"
import { COLORS } from "assets/constants/COLORS"

export const NavWrapper = styled.header`
  align-items: center;
  background-color: ${COLORS.light_main};
  display: flex;
  height: 80px;
  padding: 0 24px;
  button {
    display: none;
  }
`

export const NavLinksList = styled.ul`
  display: none;
`
