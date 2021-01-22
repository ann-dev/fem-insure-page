import styled from "styled-components"
import { COLORS } from "assets/constants/COLORS"

export const NavWrapper = styled.header`
  align-items: center;
  background-color: ${COLORS.background_main};
  display: flex;
  height: 80px;
  padding: 0 24px;
  img {
    height: 18px;
    width: 112px;
  }
  button {
    display: none;
  }
`

export const NavLinksList = styled.ul`
  display: none;
`
