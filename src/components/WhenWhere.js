import React, { PureComponent } from "react"
import './WhenWhere.css'
import pic1 from "../assets/imgs/whenwhere1.jpg"
import pic2 from "../assets/imgs/whenwhere2.jpg"
import pic3 from "../assets/imgs/whenwhere3.jpg"

export class WhenWhere extends PureComponent {
  render() {
    return (
      <div className="whenwhere">
        <h2 className="titlewhen">When & Where</h2>
        <div className="columns">
          <div className="column-margin">
            <img src={ pic1 } className="pic" data-pin-nopin="true" alt="bridge in bern" />
            <div className="textbox">
              <div className="date"><p>Fri 20-Jul-2018</p></div>
              <p className="eventtitle">Meet & Greet</p>
              <p className="date-for-phones"><span className="bold">Date:</span> Fri 20-Jul-2018</p>
              <p><span className="bold">Time:</span> 16:00 - 19:00</p>
              <p><span className="bold">Location:</span> Restaurant Schwellenmätteli</p>
              <p><span className="bold">Dress:</span> Casual</p>
            </div>
          </div>
          <div className="column-rest">
            <img src={ pic2 } className="pic" data-pin-nopin="true" alt="wedding rings"/>
            <div className="textbox">
              <div className="date"><p>Sat 21-Jul-2018</p></div>
              <p className="eventtitle">Wedding Celebration</p>
              <p className="date-for-phones"><span className="bold">Date:</span> Sat 21-Jul-2018</p>
              <p><span className="bold">Time:</span> 16:00 - Late</p>
              <p><span className="bold">Location:</span> Ostermundigen, Switzerland</p>
              <p><span className="bold">Dress:</span> Semi-formal (tie optinal)</p>
            </div>
          </div>
          <div className="column-rest">
            <img src={ pic3 } className="pic" data-pin-nopin="true" alt="hotel in bern"/>
            <div className="textbox">
              <div className="date"><p>Sun 22-Jul-2018</p></div>
              <p className="eventtitle">Farewell Get Together</p>
              <p className="date-for-phones"><span className="bold">Date:</span> Sun 22-Jul-2018</p>
              <p><span className="bold">Time:</span> 13:00 - 17:00</p>
              <p><span className="bold">Location:</span> Rümligen, Switzerland</p>
              <p><span className="bold">Dress:</span> Casual</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default WhenWhere;
