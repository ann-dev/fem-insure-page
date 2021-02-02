import React from "react"
import { graphql } from "gatsby"

import SEO from "components/seo"
import Hero from "components/homepage/Hero"
import FeaturedContent from "components/homepage/FeaturedContent"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <main>
      <Hero fluid={data.hero.childImageSharp.fluid}/>
      <FeaturedContent />
    </main>
  </>
)

export const query = graphql`
  query Buffer404Images {
    hero: file(name: { eq: "image-intro-full" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
