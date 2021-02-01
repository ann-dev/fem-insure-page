import React from "react"
import slugify from "slugify"
import { NavigationLinksWrapper } from "./styles"

const NavigationLinks = ({ dropdownVariant, navbarVariant }) => {
  const links = ["How we work", "Blog", "Account"]

  return (
    <NavigationLinksWrapper
      dropdownVariant={dropdownVariant}
      navbarVariant={navbarVariant}
    >
      {links.map(link => {
        return (
          <li key={slugify(link)}>
            <a
              href={
                "/" +
                slugify(link, {
                  replacement: "-",
                  lower: true,
                })
              }
            >
              {link || "Link"}{" "}
            </a>
          </li>
        )
      })}
    </NavigationLinksWrapper>
  )
}

export default NavigationLinks
