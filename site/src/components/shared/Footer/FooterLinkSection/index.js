import React from "react"
import slugify from "slugify"

import { footerLinks } from "../footerData"

const FooterLinkSection = () => (
  <section>
    {footerLinks.map(item => {
      return (
        <div key={slugify(item.category)}>
          <span>{item.category || "Category"}</span>
          <ul>
            {item.links.map(
              link =>
                (
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
                )
            )}
          </ul>
        </div>
      )
    })}
  </section>
)

export default FooterLinkSection
