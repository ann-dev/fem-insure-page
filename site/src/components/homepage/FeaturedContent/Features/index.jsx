import React from "react"
import slugify from "slugify"

import FadeInView from "components/common/FadeInView"
import { featuredData } from "./featuredData"

import {
  FeaturedSectionWrapper,
  FeaturedItem,
  FeaturedIcon,
  FeaturedTitle,
  FeaturedParagraph,
} from "./styles"

const FeaturedSection = () => (
  <FeaturedSectionWrapper>
    {featuredData.map(item => {
      return (
        <FeaturedItem key={slugify(item.title)}>
          <FadeInView>
            <FeaturedIcon src={item.imgPath} alt="" role="presentation" />
            <FeaturedTitle>{item.title}</FeaturedTitle>
            <FeaturedParagraph>{item.description}</FeaturedParagraph>
          </FadeInView>
        </FeaturedItem>
      )
    })}
  </FeaturedSectionWrapper>
)

export default FeaturedSection
