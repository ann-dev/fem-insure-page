import styled from "styled-components"
import { DEVICES } from "assets/constants/DEVICES"

export const CTAWrapper = styled.section`
  align-items: center;
  background-color: var(--color-purple);
  display: flex;
  flex-direction: column;
  color: var(--color-l-main);
  height: 344px;
  justify-content: center;
  position: relative;
  @media ${DEVICES.laptopM} {
    flex-direction: row;
    justify-content: space-between;
    height: 250px;
    overflow-y: hidden;
    padding: 0 81px;
  }
  button {
    width: 160px;
    z-index: 2;
  }
`

export const CTAMobileCurveWrapper = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  @media ${DEVICES.laptopM} {
    display: none;
  }
`

export const CTADesktopCurveWrapper = styled.img`
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  @media ${DEVICES.laptopM} {
    display: block;
  }
`

export const CTAHeader = styled.span`
  display: block;
  font-family: "DM Serif Display", serif;
  font-size: 40px;
  letter-spacing: -0.56px;
  line-height: 40px;
  margin-bottom: 40px;
  z-index: 2;
  @media ${DEVICES.tablet} {
    font-size: 56px;
    line-height: 56px;
    max-width: 75%;
  }
  @media ${DEVICES.laptopM} {
    letter-spacing: -0.78px;
    margin-bottom: 0;
    max-width: 480px;
  }
`
