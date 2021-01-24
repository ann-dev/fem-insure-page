import React from "react"

import { CTAWrapper, CTACurveWrapper, CTAHeader } from "./styles"
import CTACurve from "assets/images/bg-pattern-how-we-work-mobile.svg"
import Button from "components/common/Button"

const CTA = ({ text, buttonText }) => (
  <CTAWrapper>
    <CTACurveWrapper src={CTACurve} alt="abstract curve" />
    <CTAHeader>{text}</CTAHeader>
    <Button darkMode>{buttonText}</Button>
  </CTAWrapper>
)

export default CTA
