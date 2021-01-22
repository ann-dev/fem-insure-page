import styled from "styled-components"
import { COLORS } from "assets/constants/COLORS"

export const HeroWrapper = styled.article`
  background-color: ${COLORS.background_hero};
  color: ${COLORS.background_main};
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
  z-index: 1;
`

export const CurveLeftMobileWrapper = styled.img`
  left: 0;
  position: absolute;
  top: -4px;
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
`

export const HeroParagraph = styled.p`
  letter-spacing: 0;
  line-height: 26px;
  margin-bottom: 32px;
  width: 100%;
`

export const HeroImageWrapper = styled.div`
  background-size: cover;
  height: auto;
  margin: 0;
  overflow-y: hidden;
  img {
    width: 100%;
  }
`
