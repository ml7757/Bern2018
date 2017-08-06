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
          <h2>Married happily ever after!!!</h2>
        </div>
      );
    } else {
      return (
        <div className="count-down">
          <h3>Counting Down the Days...</h3>
          <div>{this.countDownTimer()}</div>
        </div>
      );
    }
  }

  addPrettyZero(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  countDownTimer() {
    const dateDif = new Date(weddingDay.getTime() - rightNow.getTime());
    let difYears = dateDif.getUTCFullYear() - 1970;
    let difMonths = (dateDif.getUTCMonth());
    let difDays = (dateDif.getUTCDate() - 1);
    let difHours = (dateDif.getUTCHours());
    if (difYears > 0) {
      difMonths += difYears * 12;
    }
    return (
      <div className="count-down-timer" id="when-and-where">
        <p className="datem"> <span>{this.addPrettyZero(difMonths)}</span> Months </p>
        <p className="dated"> <span>{this.addPrettyZero(difDays)}</span> Days </p>
        <p className="dateh"> <span>{this.addPrettyZero(difHours)}</span> Hours </p>
      </div>
    );
  }

  render() {
    return (
      <div className="countdownSection">
        {this.renderContent()}
      </div>
    );
  }
}

export default CountDown;
