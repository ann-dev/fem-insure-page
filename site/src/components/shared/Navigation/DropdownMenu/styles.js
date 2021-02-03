import styled from "styled-components"

import Button  from "components/common/Button"
import { SIZE } from "assets/constants/DEVICES"

export const DropdownWrapper = styled.div`
  background-color: var(--color-black);
  color: white;
  height: ${props => (props.dropdownToggled ? `calc(100vh - 80px)` : "0px")};
  opacity: ${props => (props.dropdownToggled ? 1 : 0)};
  padding-top: 55px;
  position: fixed;
  text-align: center;
  top: 80px;
  visibility: ${props => (props.dropdownToggled ? "visible" : "hidden")};
  width: 100%;
  z-index: 5;
  > * {
    display: ${props => (props.dropdownToggled ? "block" : "none")};
  }
  ${Button} {
    border: 2px solid var(--color-l-main);
    font-size: 20px;
    height: 56px;
    margin: 0 auto;
    max-width: 90vw;
    width: 327px;
  }
  @media (orientation: landscape) and (max-width: ${SIZE.tablet}) {
    align-items: center;
    display: flex;
    text-align: left;
    ${Button} {
      margin-right: 24px;
      width: 40vw;
    }
  }
`

export const DropdownCurveWrapper = styled.img`
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  @media (orientation: landscape) and (max-width: ${SIZE.tablet}) {
    display: none;
  }
`
