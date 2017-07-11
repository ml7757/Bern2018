import React, { PureComponent } from "react"
import './WhenWhere.css'
import pic1 from "../assets/imgs/whenwhere1.jpg"
import pic2 from "../assets/imgs/whenwhere2.jpg"
import pic3 from "../assets/imgs/whenwhere3.jpg"

export class WhenWhere extends PureComponent {
  render() {
    return (
      <div className="whenwhere" id="when-and-where">
        <h2 className="titlewhen">When & Where</h2>
        <div className="columns">
          <div className="column1">
            <img src={ pic1 } className="pic1" data-pin-nopin="true" alt="bridge in bern" />
            <div className="date1"><p>Fri 20-Jul-2018</p></div>
            <div className="textbox1">
              <p className="eventtitle">Meet & Greet</p>
              <p><span className="bold">Time:</span> 16:00 - 19:00</p>
              <p><span className="bold">Location:</span> Restaurant Schwellenmätteli</p>
              <p><span className="bold">Dress:</span> Casual</p>
            </div>
          </div>
          <div className="column2">
            <img src={ pic2 } className="pic2" data-pin-nopin="true" alt="wedding rings"/>
            <div className="textbox2">
              <div className="date2"><p>Sat 21-Jul-2018</p></div>
              <p className="eventtitle">Wedding Celebration</p>
              <p><span className="bold">Time:</span> 16:00 - Late</p>
              <p><span className="bold">Location:</span> Ostermundigen, Switzerland</p>
              <p><span className="bold">Dress:</span> Semi-formal (tie optinal)</p>
            </div>
          </div>
          <div className="column3">
            <img src={ pic3 } className="pic3" data-pin-nopin="true" alt="hotel in bern"/>
            <div className="date3"><p>Sun 22-Jul-2018</p></div>
            <div className="textbox3">
              <p className="eventtitle">Farewell Get Together</p>
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
