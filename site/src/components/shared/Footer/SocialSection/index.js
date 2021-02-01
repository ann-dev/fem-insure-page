import React from "react"

import CompanyLogo from "components/common/CompanyLogo"
import { footerSocials } from "../footerData"
import { SocialSectionWrapper, SocialsWrapper, SocialsDivider } from "./styles"

const SocialSection = () => (
  <SocialSectionWrapper>
    <CompanyLogo />
    <SocialsWrapper>
      {footerSocials.map(item => {
        return (
          <div key={item.name}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <img src={item.path} alt={item.name + " icon"} />
            </a>
          </div>
        )
      })}
    </SocialsWrapper>
    <SocialsDivider />
  </SocialSectionWrapper>
)

export default SocialSection
