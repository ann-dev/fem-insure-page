import React from "react"
import slugify from "slugify"
import { NavigationLinksWrapper } from "./styles"

const NavigationLinks = ({ dropdownVariant }) => {
  const links = ["How we work", "Blog", "Account"]

  return (
    <NavigationLinksWrapper dropdownVariant={dropdownVariant}>
      {links.map(link => {
        return (
          <a
            key={slugify(link)}
            href={
              "/" +
              slugify(link, {
                replacement: "-",
                lower: true,
              })
            }
          >
            <li>{link || "Link"}</li>
          </a>
        )
      })}
    </NavigationLinksWrapper>
  )
}

export default NavigationLinks
