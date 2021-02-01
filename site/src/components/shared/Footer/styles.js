import styled from "styled-components"
import { DEVICES } from "assets/constants/DEVICES"

export const FooterWrapper = styled.footer`
  background-color: var(--color-l-grey);
  color: var(--color-acc-grey);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  overflow-x: hidden;
  position: relative;
  text-transform: uppercase;
  a {
    color: var(--color-black);
  }
`

export const FooterMobileCurveWrapper = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
  @media ${DEVICES.tablet} {
    display: none;
  }
`

export const FooterDesktopCurveWrapper = styled.img`
  display: none;
  position: absolute;
  width: 80%;
  z-index: 0;
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
