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
  @media ${DEVICES.tablet} {
    height: calc(50vh - 80px);
    padding-top: calc((50vh - 80px) / 6);
  }
  @media ${DEVICES.laptop} {
    height: 500px;
    position: relative;
    text-align: left;
  }
  button {
    width: 146px;
  }
`

export const CurveLeftMobileWrapper = styled.img`
  left: 0;
  position: absolute;
  top: 0;
  z-index: -1;
  @media ${DEVICES.laptop} {
    display: none;
  }
`

export const CurveRightMobileWrapper = styled.img`
  bottom: -175px;
  position: absolute;
  right: 0;
  @media ${DEVICES.laptop} {
    display: none;
  }
`

export const CurveLeftDesktopWrapper = styled.img`
  display: none;
  left: 0;
  position: absolute;
  top: 450px;
  width: 150px;
  @media ${DEVICES.laptop} {
    display: block;
  }
`

export const CurveRightDesktopWrapper = styled.img`
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 250px;
  @media ${DEVICES.laptop} {
    display: block;
  }
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
  @media ${DEVICES.laptop} {
    margin: 0;
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
  @media ${DEVICES.laptop} {
    margin: 30px 0;
  }
`

export const HeroImageWrapper = styled.div`
  background-size: cover;
  height: auto;
  margin: 0;
  overflow-y: hidden;
  @media ${DEVICES.tablet} {
    height: 50vh;
  }
  @media ${DEVICES.laptop} {
    height: calc(650px * 0.8);
    position: absolute;
    right: 26px;
    top: 132.5px;
    width: calc(540px * 0.8);
  }
`

export const HeroImage = styled(Image)`
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  height: 100%;
`
