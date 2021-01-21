import React from "react"
import IntroImage from "assets/images/image-intro-desktop.jpg"

const Hero = () => (
  <article>
    <div>
      <span>
        Humanizing
        <br />
        your insurance.
      </span>
      <p>
        Get your life insurance coverage easier and faster. We blend our
        expertise and technology to help you find the plan that’s right for you.
        Ensure you and your loved ones are protected.
      </p>
      <button>View plans</button>
    </div>
    <img src={IntroImage} alt="family holding hands" />
  </article>
)

export default Hero
