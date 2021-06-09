import React from "react"
import slugify from "slugify"

import { footerLinks } from "../footerData"

import {
  FooterLinksWrapper,
  FooterLinkBlock,
  FooterLinkHeading,
  FooterLinkList,
} from "./styles"

const FooterLinkSection = () => (
  <FooterLinksWrapper>
    {footerLinks.map(item => {
      return (
        <FooterLinkBlock key={slugify(item.category)}>
          <FooterLinkHeading>{item.category || "Category"}</FooterLinkHeading>
          <FooterLinkList>
            {item.links.map(link => (
              <li key={slugify(link)}>{link || "Link"}</li>
            ))}
          </FooterLinkList>
        </FooterLinkBlock>
      )
    })}
  </FooterLinksWrapper>
)

export default FooterLinkSection
