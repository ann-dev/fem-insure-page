import React from "react"
import slugify from "slugify"

import CompanyLogo from "components/common/CompanyLogo"
import { NavWrapper, NavLinksList } from "./styles"

const Navigation = () => {
  const links = ["How we work", "Blog", "Account"]

  return (
    <NavWrapper>
      <CompanyLogo />
      <nav>
        <NavLinksList>
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
        </NavLinksList>
        <button>View plans</button>
      </nav>
    </NavWrapper>
  )
}

export default Navigation
