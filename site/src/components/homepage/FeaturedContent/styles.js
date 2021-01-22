import styled from "styled-components"
import { COLORS } from "assets/constants/COLORS"

export const FeaturedWrapper = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const FeaturedDivider = styled.div`
  height: 1px;
  background-color: ${COLORS.accent_purple};
  margin: 140px 0 40px;
  width: 140px;
`

export const ContentWrapper = styled.div`
  max-width: 327px;
  text-align: center;
`

export const HeroHeader = styled.span`
  display: block;
  font-family: "DM Serif Display", serif;
  font-size: 46px;
  letter-spacing: -0.67px;
  line-height: 46px;
  width: 100%;
`
