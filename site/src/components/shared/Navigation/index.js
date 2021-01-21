import React from "react"
import Logo from "assets/images/logo.svg"

const Navigation = () => {
  const links = [
    {
      path: `/`,
      name: "How we work",
    },
    {
      path: `/`,
      name: "Blog",
    },
    {
      path: `/`,
      name: "Account",
    },
  ]

  return (
    <header>
      <img src={Logo} alt="insure logo" />
      <nav>
        <ul>
          {links.map(link => {
            return (
              <a href={link.path}>
                <li>{link.name}</li>
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
