import styled from "styled-components"

import { COLORS } from "assets/constants/COLORS"
import { DEVICES } from "assets/constants/DEVICES"

export const FooterWrapper = styled.footer`
  background-color: ${COLORS.light_grey};
  color: ${COLORS.accent_grey};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  overflow-x: hidden;
  position: relative;
  text-transform: uppercase;
  z-index: -1;
  a {
    color: ${COLORS.black};
  }
`

export const FooterMobileCurveWrapper = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
  @media ${DEVICES.tablet} {
    display: none;
  }
`

export const FooterDesktopCurveWrapper = styled.img`
  display: none;
  position: absolute;
  width: 80%;
  z-index: -1;
  @media ${DEVICES.tablet} {
    display: block;
    top: 0;
    width: 525px;
  }
`

export const FooterContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 88px 0;
  margin: 0 auto;
  max-width: 327px;
  text-align: center;
  z-index: 1;
  @media ${DEVICES.laptopM} {
    max-width: 1110px;
    padding-top: 67px;
    text-align: left;
  }
`
