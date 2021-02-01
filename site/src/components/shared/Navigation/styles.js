import styled from "styled-components"
import { COLORS } from "assets/constants/COLORS"
import { DEVICES } from "assets/constants/DEVICES"

export const NavWrapper = styled.header`
  background-color: ${COLORS.light_main};
  height: 80px;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
  @media ${DEVICES.laptopM} {
    padding: 0 165px;
  }
`

export const NavContentWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 25px;
  position: relative;
  @media ${DEVICES.tablet} {
    max-width: 1110px;
    padding-top: 20px;
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
