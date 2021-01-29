import styled from "styled-components"
import Image from "gatsby-image"

import { COLORS } from "assets/constants/COLORS"
import { DEVICES } from "assets/constants/DEVICES"

export const HeroWrapper = styled.article`
  background-color: ${COLORS.purple_main};
  color: ${COLORS.light_main};
`
export const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
`

export const HeroTextWrapper = styled.div`
  align-self: center;
  height: 500px;
  padding: 93px 26px;
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 1;
  button {
    width: 146px;
  }
  @media ${DEVICES.tablet} {
    height: calc(50vh - 80px);
    padding-top: calc((50vh - 80px) / 6);
  }
`

export const CurveLeftMobileWrapper = styled.img`
  left: 0;
  position: absolute;
  top: 0;
  z-index: -1;
`

export const CurveRightMobileWrapper = styled.img`
  bottom: -175px;
  position: absolute;
  right: 0;
`

export const HeroHeader = styled.span`
  display: block;
  font-family: "DM Serif Display", serif;
  font-size: 46px;
  letter-spacing: -0.67px;
  line-height: 46px;
  margin-bottom: 16px;
  width: 100%;
  z-index: 2;
  @media ${DEVICES.tablet} {
    font-size: 72px;
    line-height: 64px;
    margin: 0 auto 26px;
    max-width: 500px;
  }
`

export const HeroParagraph = styled.p`
  letter-spacing: 0;
  line-height: 26px;
  margin-bottom: 32px;
  width: 100%;
  @media ${DEVICES.tablet} {
    margin: 0 auto 32px;
    max-width: 500px;
  }
`

export const HeroImageWrapper = styled.div`
  background-size: cover;
  height: auto;
  margin: 0;
  overflow-y: hidden;
  @media ${DEVICES.tablet} {
    position: relative;
    height: 50vh;
  }
`

export const HeroImage = styled(Image)`
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  height: 100%;
`
