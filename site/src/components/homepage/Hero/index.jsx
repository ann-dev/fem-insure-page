import React from "react"

import IntroImage from "assets/images/image-intro-mobile.jpg"
import CurveLeftMobile from "assets/images/bg-pattern-intro-left-mobile.svg"
import CurveRightMobile from "assets/images/bg-pattern-intro-right-mobile.svg"
import Button from "components/common/Button"

import {
  HeroWrapper,
  HeroContentWrapper,
  CurveLeftMobileWrapper,
  CurveRightMobileWrapper,
  HeroTextWrapper,
  HeroHeader,
  HeroParagraph,
  HeroImageWrapper,
} from "./styles"

const Hero = () => (
  <HeroWrapper>
    <HeroContentWrapper>
      <HeroTextWrapper>
        <CurveLeftMobileWrapper src={CurveLeftMobile} alt="abstract curves" />
        <CurveRightMobileWrapper src={CurveRightMobile} alt="abstract curves" />
        <HeroHeader>Humanizing your insurance.</HeroHeader>
        <HeroParagraph>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </HeroParagraph>
        <Button darkMode buttonWidth="146px">
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
