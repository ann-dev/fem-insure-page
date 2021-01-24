import styled from "styled-components"
import { COLORS } from "assets/constants/COLORS"


export const NavWrapper = styled.header`
  align-items: center;
  background-color: ${COLORS.light_main};
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  z-index: 99;
  nav {
    display: flex;
    flex-direction: row;
  }
  button {
    display: none;
  }
`

export const BurgerWrapper = styled.img`
  display: block;
  flex-shrink: 0;
  &:hover {
    cursor: pointer;
  }
`
