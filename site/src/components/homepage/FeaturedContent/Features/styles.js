import styled from "styled-components"
import { COLORS } from "assets/constants/COLORS"

export const FeaturedSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 862px;
  justify-content: space-between;
  margin: 80px 0;
  max-width: 326px;
`

export const FeaturedItem = styled.div`
  text-align: center;
`

export const FeaturedIcon = styled.img`
  display: block;
  margin: 0 auto 32px;
`

export const FeaturedTitle = styled.span`
  display: block;
  font-family: "DM Serif Display", serif;
  font-size: 28px;
  margin-bottom: 16px;
`

export const FeaturedParagraph = styled.p`
  color: ${COLORS.accent_gray};
  line-height: 26px;
`
