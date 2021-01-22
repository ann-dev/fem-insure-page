import React from "react"

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
        <FeaturedItem key={item.imgAlt}>
          <FeaturedIcon src={item.imgPath} alt={item.imgAlt} />
          <FeaturedTitle>{item.title}</FeaturedTitle>
          <FeaturedParagraph>{item.description}</FeaturedParagraph>
        </FeaturedItem>
      )
    })}
  </FeaturedSectionWrapper>
)

export default FeaturedSection
