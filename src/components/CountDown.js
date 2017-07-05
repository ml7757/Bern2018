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
    const dateDif = new Date(weddingDay.getTime() - rightNow.getTime())
    let difYears = dateDif.getUTCFullYear() - 1970
    let difMonths = dateDif.getUTCMonth()
    let difDays = dateDif.getUTCDate() - 1
    let difHours = dateDif.getUTCHours()
    if (difYears >0){
      difMonths += difYears *12
    }
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
