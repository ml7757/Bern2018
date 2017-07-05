import React, { PureComponent } from "react";
import story from "../assets/imgs/story.jpg";
import "./Story.css";

export class Story extends PureComponent {
  render() {
    return (
      <div className="storySection">
        <h2 className="story">Our Story</h2>
        <img src={ story } className="storyPhoto" data-pin-nopin="true" />
        <p>It was March 2007 in Napier, New Zealand. Julia was passing through town intending to pick up some seasonal work for a week or two and decided to stay at Archie’s Bunker Backpacker; it was there that she met Matt. With a crew of seven other dorm mates, Julia and Matt enjoyed a carefree and fun time together. It wasn’t until Julia left four weeks later to continue her travels in New Zealand, that they both realised how much they had enjoyed each other’s company. So Julia deviated from her plans and returned to Napier but the inevitable was fast approaching, she needed to leave and carry on with her travels; it was time to say a tearful goodbye.</p>
        <p className="quote">“If I come back, do you want to give us a go?”</p>
        <p>It wasn’t even a week and life was miserable for the two of them…but it wouldn’t last. Many phone top-ups and a lot of “I love you” bombs later, Julia made the decision to return to New Zealand and with the small hope of making a long distance relationship work, they leapt into the unknown. Fast forward to 2018, past the six years of late night calls, long-distance flights, travels in far away places and the mind-numbing 8,300 km separation, Julia and Matt will have lived together in Amsterdam for five years, ready for the next chapter - together.</p>
      </div>
    );
  }
}

export default Story;
