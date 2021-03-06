import React, { PureComponent } from "react";
import "./Gifts.css";

export class Gifts extends PureComponent {
  render() {
    return (
      <div className="giftsSection">
        <h2 className="titlegifts">Gifts</h2>
        <div className="gift-text">
          <p>We do not expect any gifts.</p>
          <p>Your presence at our wedding is a wonderful gift in itself.</p>
        </div>
      </div>
    );
  }
}

export default Gifts;
