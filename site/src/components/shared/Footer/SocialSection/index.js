import React from "react"

import CompanyLogo from "components/common/CompanyLogo"
import { footerSocials } from "../footerData"
import { SocialSectionWrapper, SocialsWrapper, SocialsDivider } from "./styles"

const SocialSection = () => (
  <SocialSectionWrapper>
    <CompanyLogo />
    <SocialsWrapper>
      {footerSocials.map(item => {
        return <img key={item.name} src={item.path} alt={item.name + " icon"} />
      })}
    </SocialsWrapper>
    <SocialsDivider />
  </SocialSectionWrapper>
)

export default SocialSection
