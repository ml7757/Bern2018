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
              <div className="date"><p>Fri, 20 Jul 2018</p></div>
              <p className="eventtitle">Meet & Greet</p>
              <p className="date-for-phones"><span className="bold">Date:</span> Fri, 20 Jul 2018</p>
              <p><span className="bold">Time:</span> 4:00PM - 9:00PM</p>
              <p><span className="bold">Location:</span> Restaurant Schwellenmätteli</p>
              <p>
                <span className="bold">Address: </span>
                <a href="https://www.google.ch/maps/place/Restaurant+Schwellenm%C3%A4tteli/@46.945128,7.4491048,19z/data=!3m1!4b1!4m5!3m4!1s0x478e393fc4d9db15:0xf658abeb25c461b0!8m2!3d46.945128!4d7.449652" target="_blank">Dalmaziquai 11, Bern</a>
              </p>
              <p><span className="bold">Dress:</span> Casual</p>
            </div>
          </div>
          <div className="column-rest">
            <img src={ pic2 } className="pic" data-pin-nopin="true" alt="wedding rings"/>
            <div className="textbox">
              <div className="date"><p>Sat, 21 Jul 2018</p></div>
              <p className="eventtitle">Wedding Celebration</p>
              <p className="date-for-phones"><span className="bold">Date:</span> Sat, 21 Jul 2018</p>
              <p><span className="bold">Ceremony:</span> 4:30PM - 5:00pm</p>
              <p><span className="bold">Celebration:</span> 5:00PM - Late</p>
              <p><span className="bold">Location:</span> Wyss Gartenhaus</p>
              <p>
                <span className="bold">Address: </span>
                <a href="https://www.google.ch/maps/place/Wyss+GartenHaus+Ostermundigen/@46.967377,7.485044,17z/data=!3m1!4b1!4m5!3m4!1s0x478e3760f760a76d:0x32d7192f15f3dd36!8m2!3d46.967377!4d7.4872327" target="_blank">Untere Zollgasse 81, Ostermundigen</a>
              </p>
              <p><span className="bold">Dress:</span> Semi-formal (tie optional)</p>
            </div>
          </div>
          <div className="column-rest">
            <img src={ pic3 } className="pic" data-pin-nopin="true" alt="hotel in bern"/>
            <div className="textbox">
              <div className="date"><p>Sun, 22 Jul 2018</p></div>
              <p className="eventtitle">Farewell Get Together</p>
              <p className="date-for-phones"><span className="bold">Date:</span> Sun, 22 Jul 2018</p>
              <p><span className="bold">Time:</span> 1:00PM - 6:00PM</p>
              <p><span className="bold">Location:</span> Schloss Rümligen</p>
              <p>
                <span className="bold">Address: </span>
                <a href="https://www.google.ch/maps/place/Schloss+R%C3%BCmligen/@46.8291784,7.4899746,447m/data=!3m1!1e3!4m13!1m7!3m6!1s0x478e493ca07c9097:0xdb9af95f1f42a395!2zUsO8bWxpZ2Vu!3b1!8m2!3d46.8303609!4d7.4950501!3m4!1s0x478e49239f83806d:0xd4fc71112c84749b!8m2!3d46.8291785!4d7.4899748" target="_blank">Schulhausstrasse 20, Rümligen</a>
              </p>
              <p><span className="bold">Dress:</span> Casual</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default WhenWhere;
