import styled from "styled-components"

import { COLORS } from "assets/constants/COLORS"
import { DEVICES } from "assets/constants/DEVICES"

export const FeaturedWrapper = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 140px 0;
  width: 100%;
`

export const FeaturedDivider = styled.div`
  height: 1px;
  background-color: ${COLORS.accent_light};
  margin-bottom: 40px;
  width: 140px;
  @media ${DEVICES.tablet} {
    margin-bottom: 63px;
  }
`

export const ContentWrapper = styled.div`
  max-width: 327px;
  text-align: center;
  @media ${DEVICES.tablet} {
    max-width: 1100px;
  }
`

export const FeaturedHeader = styled.span`
  display: block;
  font-family: "DM Serif Display", serif;
  font-size: 46px;
  letter-spacing: -0.67px;
  line-height: 46px;
  width: 100%;
  @media ${DEVICES.tablet} {
    font-size: 72px;
  }
`
