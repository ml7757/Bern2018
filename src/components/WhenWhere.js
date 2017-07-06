import React, { PureComponent } from "react"
import './WhenWhere.css'
import pic1 from "../assets/imgs/whenwhere1.jpg"
import pic2 from "../assets/imgs/whenwhere2.jpg"
import pic3 from "../assets/imgs/whenwhere3.jpg"

export class WhenWhere extends PureComponent {
  render() {
    return (
      <div className="whenwhere">
        <h2 className="title">When & Where</h2>
        <div className="columns">
          <div className="column1">
            <img src={ pic1 } className="pic1" data-pin-nopin="true" />
            <div className="date1"><p>Fri 20-Jul-2018</p></div>
            <div className="textbox1">
              <p className="eventtitle">Meet & Greet</p>
              <p>Time: 16:00 - 19:00</p>
              <p>Location: Restaurant Schwellenmätteli</p>
              <p>Dress: Casual</p>
            </div>
          </div>
          <div className="column2">
            <img src={ pic2 } className="pic2" data-pin-nopin="true" />
            <div className="textbox2">
              <div className="date2"><p>Sat 21-Jul-2018</p></div>
              <p className="eventtitle">Wedding Celebration</p>
              <p>Time: 16:00 - Late</p>
              <p>Location: Ostermundigen, Switzerland</p>
              <p>Dress: Semi-formal (tie optinal)</p>
            </div>
          </div>
          <div className="column3">
            <img src={ pic3 } className="pic3" data-pin-nopin="true" />
            <div className="date3"><p>Sun 22-Jul-2018</p></div>
            <div className="textbox3">
              <p className="eventtitle">Farewell Get Together</p>
              <p>Time: 13:00 - 17:00</p>
              <p>Location: Rümligen, Switzerland</p>
              <p>Dress: Casual</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default WhenWhere;
