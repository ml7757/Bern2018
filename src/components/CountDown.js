import React, { PureComponent } from "react";
import "./CountDown.css";

export class CountDown extends PureComponent {
  married() {
    const weddingDay = new Date("July 21, 2018 16:00:00");
    const rightNow = new Date();

    if (rightNow > weddingDay) {
      return true;
    } else {
      return false;
    }
  }

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
        </div>
      );
    }
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
