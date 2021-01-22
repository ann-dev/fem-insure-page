import React from "react"
import Features from "components/homepage/FeaturedContent/Features"
import CTA from "components/common/CTA"

import {
  FeaturedWrapper,
  ContentWrapper,
  FeaturedDivider,
  FeaturedHeader,
} from "./styles"

const FeaturedContent = () => (
  <FeaturedWrapper>
    <FeaturedDivider />
    <ContentWrapper>
      <FeaturedHeader>We’re different</FeaturedHeader>
      <Features />
      <CTA text="Find out more about how we work" buttonText="How we work" />
    </ContentWrapper>
  </FeaturedWrapper>
)

export default FeaturedContent
