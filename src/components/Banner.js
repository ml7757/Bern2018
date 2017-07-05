import React, { PureComponent } from "react";
import bannerLogo from "../assets/imgs/banner-logo.png";
import banner from "../assets/imgs/banner.jpg";
import "./Banner.css";

export class Banner extends PureComponent {
  render() {
    return (
      <div className="photo-header">
        <div><img src={ banner } className="banner" data-pin-nopin="true" /></div>
        <div><img src={ bannerLogo } className="banner-logo" data-pin-nopin="true" /></div>
      </div>
    );
  }
}

export default Banner;
