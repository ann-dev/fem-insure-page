import React from "react"
import Logo from "assets/images/logo.svg"
import { footerSocials } from "../footerData"

const SocialSection = () => (
  <section>
    <img src={Logo} alt="insure logo" />
    <div>
      {footerSocials.map(item => {
        return <img key={item.name} src={item.path} alt={item.name + " icon"} />
      })}
    </div>
  </section>
)

export default SocialSection
