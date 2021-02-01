import React from "react"
import slugify from "slugify"

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
          <FeaturedIcon src={item.imgPath} alt="" role="presentation"/>
          <FeaturedTitle>{item.title}</FeaturedTitle>
          <FeaturedParagraph>{item.description}</FeaturedParagraph>
        </FeaturedItem>
      )
    })}
  </FeaturedSectionWrapper>
)

export default FeaturedSection
