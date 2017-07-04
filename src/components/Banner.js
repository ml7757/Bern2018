import React, { PureComponent } from "react";
import bannerLogo from "../assets/imgs/banner-logo.png";
import banner from "../assets/imgs/banner.jpg";
import "./Banner.css";

export class Banner extends PureComponent {
  render() {
    return (
      <div className="photo-header">
        <img src={ banner } className="banner" />
        <img src={ bannerLogo } className="banner-logo" />
      </div>
    );
  }
}

export default Banner;
