import React from "react"
import slugify from "slugify"
import Logo from "assets/images/logo.svg"

const Navigation = () => {
  const links = ["How we work", "Blog", "Account"]

  return (
    <header>
      <img src={Logo} alt="insure logo" />
      <nav>
        <ul>
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
                <li>{link}</li>
              </a>
            )
          })}
        </ul>
        <button>View plans</button>
      </nav>
    </header>
  )
}

export default Navigation
