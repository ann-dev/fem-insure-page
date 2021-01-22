import React from "react"
import SEO from "components/seo"
import Hero from "components/homepage/Hero"
import FeaturedContent from "components/homepage/FeaturedContent"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <main>
      <Hero />
      <FeaturedContent />
    </main>
  </>
)

export default IndexPage
