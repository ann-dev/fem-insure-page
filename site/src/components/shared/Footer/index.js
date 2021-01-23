import React from "react"

import SocialSection from "./SocialSection"
import FooterLinkSection from "./FooterLinkSection"
import Attribution from "./Attribution"
import FooterCurve from "assets/images/bg-pattern-footer-mobile.svg"
import {
  FooterWrapper,
  FooterContentWrapper,
  FooterCurveWrapper,
} from "./styles"

const Footer = () => (
  <FooterWrapper>
    <FooterCurveWrapper src={FooterCurve} />
    <FooterContentWrapper>
      <SocialSection />
      <FooterLinkSection />
      <Attribution />
    </FooterContentWrapper>
  </FooterWrapper>
)

export default Footer
