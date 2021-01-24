import styled from "styled-components"
import { COLORS } from "assets/constants/COLORS"

export const CTAWrapper = styled.section`
  align-items: center;
  background-color: ${COLORS.background_hero};
  display: flex;
  flex-direction: column;
  color: ${COLORS.light_main};
  height: 344px;
  justify-content: center;
  position: relative;
  button {
    width: 160px;
  }
`

export const CTACurveWrapper = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`

export const CTAHeader = styled.span`
  display: block;
  font-family: "DM Serif Display", serif;
  font-size: 40px;
  letter-spacing: -0.56px;
  line-height: 40px;
  margin-bottom: 40px;
  z-index: 2;
`
