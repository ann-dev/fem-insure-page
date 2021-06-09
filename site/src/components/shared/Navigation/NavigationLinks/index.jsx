import React from "react"
import slugify from "slugify"

import { NavigationLinksWrapper, NavigationLinkItem } from "./styles"

const NavigationLinks = ({ dropdownVariant, navbarVariant }) => {
  const links = ["How we work", "Blog", "Account"]

  return (
    <NavigationLinksWrapper
      dropdownVariant={dropdownVariant}
      navbarVariant={navbarVariant}
    >
      {links.map(link => {
        return (
          <NavigationLinkItem key={slugify(link)}>
            {link || "Link"}
          </NavigationLinkItem>
        )
      })}
    </NavigationLinksWrapper>
  )
}

export default NavigationLinks
