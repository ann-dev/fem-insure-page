import React from "react"
import { graphql } from "gatsby"

import SEO from "components/seo"
import NotFound from "components/page404/NotFound"

const PageNotFound = ({ data }) => (
  <>
    <SEO title="404: Not found" />
    <NotFound fluid={data.hero.childImageSharp.fluid}/>
  </>
)

export const query = graphql`
  query BufferImages {
    hero: file(name: { eq: "404asset" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default PageNotFound
