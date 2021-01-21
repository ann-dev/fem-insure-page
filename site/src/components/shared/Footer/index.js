import React from "react"
import Logo from "assets/images/logo.svg"
import { footerSocials, footerLinks } from "./footerData"

const Footer = () => (
  <footer>
    <section>
      <img src={Logo} alt="insure logo" />
      <div>
        {footerSocials.map(item => {
          return <img src={item.path} alt={item.name + " icon"} />
        })}
      </div>
    </section>
    <section>
      {footerLinks.map(item => {
        return (
          <div>
            <ul>
              <li>{item.link1}</li>
              <li>{item.link2}</li>
              <li>{item.link3}</li>
              <li>{item.link4}</li>
            </ul>
          </div>
        )
      })}
    </section>
  </footer>
)

export default Footer
