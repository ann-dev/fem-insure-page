import React from "react"
import slugify from "slugify"

import { footerLinks } from "../footerData"
import {
  FooterLinkBlock,
  FooterLinkHeading,
  FooterLinkList,
} from "./styles"

const FooterLinkSection = () => (
  <section>
    {footerLinks.map(item => {
      return (
        <FooterLinkBlock key={slugify(item.category)}>
          <FooterLinkHeading>{item.category || "Category"}</FooterLinkHeading>
          <FooterLinkList>
            {item.links.map(link => (
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
                  {link || "Link"}
                </a>
              </li>
            ))}
          </FooterLinkList>
        </FooterLinkBlock>
      )
    })}
  </section>
)

export default FooterLinkSection
