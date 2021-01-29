import styled from "styled-components"
import { COLORS } from "assets/constants/COLORS"

export const DropdownWrapper = styled.div`
  background-color: ${COLORS.black};
  color: white;
  height: ${props => props.dropdownToggled ? `calc(100vh - 80px)` : "0px"};
  opacity: ${props => props.dropdownToggled ? 1 : 0};
  padding-top: 55px;
  position: absolute;
  text-align: center;
  visibility: ${props => props.dropdownToggled ? "visible" : "hidden"};
  width: 100%;
  z-index: 5;
  > * {
    display: ${props => props.dropdownToggled ? "block" : "none"};
  }
  button {
    border: 2px solid ${COLORS.light_main};
    font-size: 20px;
    height: 56px;
    margin: 0 auto;
    width: 327px;
  }
`

export const DropdownCurveWrapper = styled.img`
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
`


