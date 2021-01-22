import React from "react"

import SEO from "components/seo"
import Hero from "components/homepage/Hero"
import Featured from "components/homepage/Featured"
import CTA from "components/common/CTA"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <main>
      <Hero />
      <article>
        <span>We’re different</span>
        <Featured />
        <CTA text="Find out more about how we work" buttonText="How we work" />
      </article>
    </main>
  </>
)

export default IndexPage
