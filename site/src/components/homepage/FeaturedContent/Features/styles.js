import styled from "styled-components"
import { DEVICES } from "assets/constants/DEVICES"

export const FeaturedSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 862px;
  justify-content: space-between;
  margin: 80px 0 140px;
  max-width: 326px;
  @media ${DEVICES.tablet} {
    margin: 96px auto 140px;
  }
  @media ${DEVICES.laptopM} {
    height: 250px;
    flex-direction: row;
    margin: 105px 0 156px 0;
    max-width: 100%;
  }
`

export const FeaturedItem = styled.div`
  text-align: center;
  @media ${DEVICES.laptopM} {
    text-align: left;
    width: 350px;
  }
`

export const FeaturedIcon = styled.img`
  display: block;
  margin: 0 auto 32px;
  @media ${DEVICES.laptopM} {
    margin: 0 0 32px;
  }
`

export const FeaturedTitle = styled.span`
  display: block;
  font-family: "DM Serif Display", serif;
  font-size: 28px;
  letter-spacing: -0.39 px;
  margin-bottom: 16px;
`

export const FeaturedParagraph = styled.p`
  color: var(--color-acc-grey);
  line-height: 26px;
`
