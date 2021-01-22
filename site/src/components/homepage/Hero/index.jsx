import React from "react"

import IntroImage from "assets/images/image-intro-mobile.jpg"
import CurveLeft from "assets/images/bg-pattern-intro-left-mobile.svg"
import Button from "components/common/Button"

import {
  HeroWrapper,
  HeroContentWrapper,
  CurveLeftWrapper,
  HeroTextWrapper,
  HeroHeader,
  HeroParagraph,
  HeroImageWrapper,
} from "./styles"

const Hero = () => (
  <HeroWrapper>
    <HeroContentWrapper>
      <HeroTextWrapper>
        <CurveLeftWrapper src={CurveLeft} alt="abstract curves" />
        <HeroHeader>Humanizing your insurance.</HeroHeader>
        <HeroParagraph>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </HeroParagraph>
        <Button className="light" style={{ width: 146 }}>
          View plans
        </Button>
      </HeroTextWrapper>
      <HeroImageWrapper>
        <img src={IntroImage} alt="family holding hands" />
      </HeroImageWrapper>
    </HeroContentWrapper>
  </HeroWrapper>
)

export default Hero
