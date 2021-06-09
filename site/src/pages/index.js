import React from "react"
import { graphql } from "gatsby"

import SEO from "components/seo"
import Hero from "components/homepage/Hero"
import FeaturedContent from "components/homepage/FeaturedContent"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <Hero fluid={data.hero.childImageSharp.fluid} />
    <FeaturedContent />
  </>
)

export const query = graphql`
  query BufferImages {
    hero: file(name: { eq: "image-intro-full" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
