import styled from "styled-components"
import { COLORS } from "assets/constants/COLORS"

export const FooterWrapper = styled.footer`
  background-color: ${COLORS.light_grey};
  color: ${COLORS.accent_gray};
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

export const FooterCurveWrapper = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
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
`
