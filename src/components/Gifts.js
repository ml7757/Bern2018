import React, { PureComponent } from "react";
import "./Gifts.css";

export class Gifts extends PureComponent {
  render() {
    return (
      <div className="giftsSection" id="gifts">
        <h2 className="title">Gifts</h2>
        <div className="gift-text">
          <p>We do not expect any gifts. <span>Seriously</span>! Your presence at our wedding is a wonderful gift in itself.</p>
        </div>
      </div>
    );
  }
}

export default Gifts;
