import React, { PureComponent } from "react";
import "./CountDown.css";

const weddingDay = new Date("July 21, 2018 16:00:00");
const rightNow = new Date();


export class CountDown extends PureComponent {

  married() {
    if (rightNow > weddingDay) {
      return true;
    } else {
      return false;
    }
  }
/* This function checks wether the start of the wedding is in the future, if so married is false*/
  renderContent() {
    if (this.married()) {
      return (
        <div className="countDownFinished">
          <h2>Married happily ever after</h2>
        </div>
      );
    } else {
      return (
        <div className="countDown">
          <h2>COUNTING DOWN THE DAYS</h2>
          <div>{this.countDownTimer()}</div>
        </div>
      );
    }
  }

  countDownTimer() {
    const dateDif = weddingDay - rightNow
    let difDays = Math.floor(dateDif / (24 * 60 * 60 *1000))
    let difDaysDisplay = difDays % 30
    let difMonths = Math.floor(difDays / 30)
    let difHours = dateDif.getHours
    return (
      <div className="count-down-timer">
        <p> {difMonths} months </p>
        <p> {difDays} days </p>
        <p> {difHours} hours </p>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default CountDown;
