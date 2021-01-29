import styled from "styled-components"
import { COLORS } from "assets/constants/COLORS"
import { DEVICES } from "assets/constants/DEVICES"

export const NavWrapper = styled.header`
  align-items: center;
  background-color: ${COLORS.light_main};
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
  @media ${DEVICES.laptopM} {
      padding: 0 165px;
    }
  nav {
    display: flex;
    flex-direction: row;
  }
  button {
    border: 2px solid ${COLORS.black};
    display: none;
    width: 146px;
    @media ${DEVICES.tablet} {
      display: block;
      margin-left: 33px;
    }
  }
`

export const BurgerWrapper = styled.img`
  display: block;
  flex-shrink: 0;
  &:hover {
    cursor: pointer;
  }
  @media ${DEVICES.tablet} {
    display: none;
  }
`
