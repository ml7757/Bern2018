import React, { PureComponent } from "react";
import bannerLogo from "../assets/imgs/banner-logo.png";
import banner from "../assets/imgs/banner.jpg";
import "./Banner.css";

export class Banner extends PureComponent {
  constructor() {
    super();

    this.reportBannerHeight = this.reportBannerHeight.bind(this);
  }

  render() {
    return (
      <div className="photo-header" ref="header">
        <div><img src={banner} className="banner" data-pin-nopin="true" /></div>
        <div>
          <img src={bannerLogo} className="banner-logo" data-pin-nopin="true" />
        </div>
      </div>
    );
  }

  componentWillMount() {
    // This is because of the banner size being different when resizing the window.
    setInterval(this.reportBannerHeight, 250);
  }

  componentWillUnmount() {
    window.removeEventListener("resize");
  }

  reportBannerHeight() {
    this.props.onBannerResize(this.refs.header.clientHeight);
  }
}

export default Banner;
