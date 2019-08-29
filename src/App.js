import React ,{Component} from 'react';
import './common.scss';
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';

const MAP_KEY = 'AIzaSyCtwgyBDAYf6RC9w9l91HNR3Y6-dVVcTts';
const HOTEL_MARK = {lat:34.975008,lng:138.386710};
const FISH_MARKET_MARK = {lat:35.021887,lng:138.490706};
const MIHO_MARK = {lat:34.994444,lng:138.522825};
const mapStyles = {
  width: '100%',
  height: '100%'
};


class App extends Component {
  render() {
  return (
    <div className="App">
      <div className="main-scene">
        <section className="flight">
          <p className="full"><span className="slash-end">ticket ref no.</span>QFGYPS</p>
          <div className="flight-info">
          <h1>上機</h1>  
          <div clasName="flight-info--detail">
              <p>flight no. GK020</p>
              <p>香港國際機場T2</p>
              <p>05/09/2019 - 01:35am</p>
          </div>
          </div>
          <div className="flight-info">
          <h1>落機</h1>
          <div clasName="flight-info--detail">
              <p>flight no. GK020</p>
              <p>成田國際機場</p>
              <p>05/09/2019 - 07:10am</p>
          </div>
          </div>
        </section>
        <section className="day">
        <h1 className="main-head">day 1</h1>
          <div class="time-wrapper">
            <div className="time-mark"><span>7:10am</span></div>
            <div className="time-detail">
              <p className="place-target"><span>成田機場</span><span>東京車站</span><span>靜岡</span> (~3 hours)</p>
              <ul>
                <li>高速巴士 到 東京車站<br/><span className="remark"> JPY1,000 / 車程 / 60-70mins</span><br/><span>to book > <a className="remark" href="https://secure.j-bus.co.jp/Keisei/zh-TW/Buses?GroupCode=130064&RouteCode=0001" target="_blank">link me</a></span></li>
                <li>新幹線 到 靜岡<br/><span className="remark">  JPY6,000 / 車程 / 60-90mins</span><br/><span>detail > <a className="remark" href="https://www.jreast.co.jp/tc/ticket/reservation.html" target="_blank">(JR東海道、山陽新幹線 光號列車 或 回聲號列車 下行)</a></span></li>
              </ul>
            </div>
          </div>

          <div class="time-wrapper">
            <div className="time-mark"><span>10:00am</span></div>
            <div className="time-detail">
              <p className="place-target">酒店放行李(未check得in)</p>
              
              <div className="map">
              <Map 
              google={this.props.google} 
              zoom={15}
              initialCenter={HOTEL_MARK}
              style={mapStyles}
              >
              <Marker />
              </Map>
              </div>
              <p className="slash-end"><a href="https://goo.gl/maps/jXdvXatUiDTSHa3f6" target="_blank">open map</a></p>
            </div>
          </div>


          <div class="time-wrapper">
            <div className="time-mark"><span>11:00am</span></div>
            <div className="time-detail">
              <p className="place-target">清水魚市場 河岸之市</p>
              <p className="full"><span className="slash-end">交通</span>JR清水駅徒步5分鐘</p>
              <p className="full"><span className="slash-end">時間</span>9:30~17:30 (周三休日)</p>
              <div className="img-wrapper">
                <img src="https://2.bp.blogspot.com/-ZTNGyBl7KgA/W5Ve7naMWXI/AAAAAAAANI0/o-7AFPNbbIgvBBmqpqUTfuGyxJBNWFXjACLcBGAs/s1600/58111.jpg"/>
                <img src="https://1.bp.blogspot.com/-NtD151XvbJ0/W5VeztOS6DI/AAAAAAAANIU/P_vesPBQH1Ab5R8vtjBlzJojg0u1gLegwCLcBGAs/s1600/58101.jpg" />
              </div>
              <div className="map">
              <Map 
              google={this.props.google} 
              zoom={15}
              initialCenter={FISH_MARKET_MARK}
              style={mapStyles}
              >
              <Marker />
              </Map>
              </div>
              <p className="slash-end"><a href="https://goo.gl/maps/uwFjdCpLpSeM9tL66" target="_blank">open map</a></p>
            </div>
          </div>

          <div class="time-wrapper">
            <div className="time-mark"><span>1:00pm</span></div>
            <div className="time-detail">
              <p className="place-target">三保松原</p>
              <p className="full"><span className="slash-end">交通</span>JR清水駅外巴士站</p>
              <p className="full"><span className="slash-end">交通時間</span>10分鐘就有一班,大約20分鐘的車程</p>
              <div className="img-wrapper">
                <img src="https://img.travel98.com/l/P_6152_ad1680574a3c19bd5b029d8368f2b612_o.jpg"/>
                <img src="https://img.travel98.com/l/P_6152_547a5272ac4eafe0f64d8f58d17a3d85_o.jpg" />
              </div>
              <div className="map">
              <Map 
              google={this.props.google} 
              zoom={15}
              initialCenter={MIHO_MARK}
              style={mapStyles}
              >
              <Marker />
              </Map>
              </div>
              <p className="slash-end"><a href="https://goo.gl/maps/uwFjdCpLpSeM9tL66" target="_blank">open map</a></p>
              <p className="slash-end"><a href="https://travel98.com/article/21175" target="_blank">ref. website</a></p>
            </div>
          </div>


        </section>
      </div>
    </div>
  );
  }
}


export default GoogleApiWrapper({
  apiKey: (MAP_KEY)
 })(App);
// export default App;



