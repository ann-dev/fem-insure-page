import styled from "styled-components"

import { COLORS } from "assets/constants/COLORS"
import { DEVICES } from "assets/constants/DEVICES"

export const FeaturedWrapper = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 140px 0;
  width: 100%;
  @media ${DEVICES.laptop} {
    margin: 205px 0 158px;
  }
  @media ${DEVICES.laptopM} {
    align-items: flex-start;
    margin: 231px 0 150px;
  }
`

export const ContentWrapper = styled.div`
  max-width: 327px;
  text-align: center;
  @media ${DEVICES.tablet} {
    max-width: 1100px;
  }
  @media ${DEVICES.laptopM} {
    margin: 0 auto;
    max-width: 1110px;
    width: 1110px;
    text-align: left;
  }
`

export const FeaturedDivider = styled.div`
  height: 1px;
  background-color: ${COLORS.accent_light};
  margin: 0 auto 40px;
  width: 140px;
  @media ${DEVICES.tablet} {
    margin-bottom: 63px;
  }
  @media ${DEVICES.laptopM} {
    margin: 74px 0;
    width: 150px;
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
  @media ${DEVICES.laptopM} {
    letter-spacing: -1px;
  }
`
