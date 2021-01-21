import React from "react"
import { featuredData } from "./featuredData"

const FeaturedSection = () => (
  <section>
    {featuredData.map(item => {
      return (
        <div>
          <img src={item.imgPath} alt={item.imgAlt} />
          <span>{item.title}</span>
          <p>{item.description}</p>
        </div>
      )
    })}
  </section>
)

export default FeaturedSection
