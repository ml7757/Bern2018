import React, { Component } from "react";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";

export class Header extends Component {
  constructor() {
    super();

    this.state = { isNavigationSticky: false };
    this.onBannerResize = this.onBannerResize.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentWillMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <div>
        <Banner onBannerResize={this.onBannerResize} />
        <Navigation sticky={this.state.isNavigationSticky} />
      </div>
    );
  }

  updateNavigation() {
    const isNavigationSticky = this.scrollDistance >= this.bannerHeight;
    this.setState({ isNavigationSticky });
  }

  onBannerResize(newHeight) {
    this.bannerHeight = newHeight;
    this.updateNavigation();
  }

  onScroll() {
    this.scrollDistance = window.scrollY;
    this.updateNavigation();
  }
}

export default Header;
