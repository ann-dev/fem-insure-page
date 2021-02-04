import React from "react"

import FadeInView from "components/common/FadeInView"
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
    <ContentWrapper>
      <FadeInView>
        <FeaturedDivider />
        <FeaturedHeader>We’re different</FeaturedHeader>
      </FadeInView>
      <Features />
      <FadeInView>
        <CTA
          text="Find out more about how we work"
          buttonText="How we work"
          buttonLink="/how-we-work"
        />
      </FadeInView>
    </ContentWrapper>
  </FeaturedWrapper>
)

export default FeaturedContent
