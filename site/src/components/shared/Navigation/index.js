import React from "react"
import slugify from "slugify"

import Logo from "assets/images/logo.svg"
import { NavWrapper, NavLinksList } from "./styles"

const Navigation = () => {
  const links = ["How we work", "Blog", "Account"]

  return (
    <NavWrapper>
      <img src={Logo} alt="insure logo" />
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
