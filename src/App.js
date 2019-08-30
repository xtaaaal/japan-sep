import React ,{Component} from 'react';
import './common.scss';
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import japanicon from './logo.svg';
import fujimt from './fuji-mountain.svg';
import torii from './torii.svg';
import temple from './temple.svg';
import AnimateHeight from 'react-animate-height';
import { Link, animateScroll as scroll } from "react-scroll";

const MAP_KEY = 'AIzaSyCtwgyBDAYf6RC9w9l91HNR3Y6-dVVcTts';
const AIRPORT_MARK = {lat: 35.772204, lng:140.392807};
const TOKYO_STATION_MARK = {lat: 35.681541, lng:139.767103};
const HOTEL_MARK = {lat:34.975008,lng:138.386710};
const FISH_MARKET_MARK = {lat:35.021887,lng:138.490706};
const MIHO_MARK = {lat:34.994444,lng:138.522825};
const SAND_MARK = {lat:34.663652,lng:137.743510};
const BRIDGE_MARK = {lat: 35.164962,lng:138.979378};
const mapStyles = {
  width: '100%',
  height: '100%'
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fishmarketHeight: 0
    };
  };

  toggleFishMarket = () => {
    const { fishmarketHeight } = this.state;
 
    this.setState({
      fishmarketHeight: fishmarketHeight === 0 ? 'auto' : 0,
    });
  };


  render() {
    var {fishmarketHeight} = this.state;

    //NOTE: Hack Starts ===============
    // Store old reference
  const appendChild = Element.prototype.appendChild;

  // All services to catch
  const urlCatchers = [
    "/AuthenticationService.Authenticate?",
    "/QuotaService.RecordEvent?"
  ];

  // Google Map is using JSONP.
  // So we only need to detect the services removing access and disabling them by not
  // inserting them inside the DOM
  Element.prototype.appendChild = function (element) {
    const isGMapScript = element.tagName === 'SCRIPT' && /maps\.googleapis\.com/i.test(element.src);
    const isGMapAccessScript = isGMapScript && urlCatchers.some(url => element.src.includes(url));

    if (!isGMapAccessScript) {
      return appendChild.call(this, element);
    }

    // Extract the callback to call it with success data
    // (actually this part is not needed at all but maybe in the future ?)
    //const callback = element.src.split(/.*callback=([^\&]+)/, 2).pop();
    //const [a, b] = callback.split('.');
    //window[a][b]([1, null, 0, null, null, [1]]);

    // Returns the element to be compliant with the appendChild API
    return element;
  };

  //NOTE: Hack Ends ===============

  return (
    <div className="App">
      <header>
        <ul>
          <li>
          <img src={fujimt} />
          <Link to="day1" smooth={true} duration= {500} activeClass="active"><h1>1</h1></Link>
          </li>
          <li>
          <img src={torii} />
          <Link to="day2" smooth={true} duration= {500} activeClass="active"><h1>2</h1></Link>
          </li>
          <li>
          <img src={temple} />
          <Link to="day3" smooth={true} duration= {500} activeClass="active"><h1>3</h1></Link>
          </li>
        </ul>
      </header>
      <div className="main-scene">
        <section className="flight">
          <p className="full center"><img className="jpicon" src={japanicon} /><span className="slash-end">ticket ref no.</span>QFGYPS</p>
          <div className="flight-info">
          <h1>上機</h1>  
          <div className="flight-info--detail">
              <p>flight no. GK020</p>
              <p>香港國際機場T2</p>
              <p>05/09/2019 - 01:35am</p>
          </div>
          </div>
          <div className="flight-info">
          <h1>落機</h1>
          <div className="flight-info--detail">
              <p>flight no. GK020</p>
              <p>成田國際機場</p>
              <p>05/09/2019 - 07:10am</p>
          </div>
          </div>
        </section>
        <section title="day1" id="day1" className="day">
          <h1 className="main-head">day 1</h1>
          <div className="time-wrapper">
            <div className="time-mark"><span>7:10am</span></div>
            <div className="time-detail">
              <p className="place-target"><span>成田機場</span><span>東京車站</span><span>靜岡</span><br/>(~3 hours)</p>
              <ul>
                <li>高速巴士 到 東京車站<br/><span className="remark"> JPY1,000 / 車程 / 60-70mins</span><br/>
                <span><a className="remark highlight" href="https://secure.j-bus.co.jp/Keisei/zh-TW/Buses?GroupCode=130064&RouteCode=0001" target="_blank">京成巴士(Tokyo Shuttle)</a></span><br/>
                <span><a className="remark highlight" href="http://accessnarita.jp/cn1/home/" target="_blank">平和交通(THE ACCESS Narita)</a></span><br/>
                <span><a className="remark highlight" href="https://lohanpush.com/2019/02/14/tokyo-shuttle/" target="_blank">交通資訊</a></span>
                </li>
                <li>新幹線 到 靜岡<br/><span className="remark">  JPY6,000 / 車程 / 60-90mins</span><br/>
                <span><a className="remark highlight" href="https://www.jreast.co.jp/tc/ticket/reservation.html" target="_blank">(JR東海道、山陽新幹線 光號列車 或 回聲號列車 下行)</a></span></li>
              </ul>
            </div>
          </div>

          <div className="time-wrapper">
            <div className="time-mark"><span>10:00am</span></div>
            <div className="time-detail">
              <p className="place-target">酒店放行李(夜晚再返去check in)</p>
              <p className="full"><span className="slash-end">名</span>ホテルシティオ静岡 - Hotel Citio Shizuoka </p>
              <p className="full"><span className="slash-end">地址</span>1-2, Tenma-cho, Shizuoka, Shizuoka, Japan 422 0858 <br/>伝馬町 1-2, 静岡, 静岡, 日本 422 0858</p>
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
              <p className="slash-end"><a className="remark highlight" href="https://goo.gl/maps/AG4R4SQ672xhHh9x5" target="_blank">Google Map 路線</a></p>
            </div>
          </div>


          <div className="time-wrapper">
            <div className="time-mark click" onClick={ this.toggleFishMarket }>
            <svg xmlns="http://www.w3.org/2000/svg" height="475pt" viewBox="-59 0 475 475.837" width="475pt"><path d="m288.160156 227.789062c0-17.878906 13.527344-32.367187 30.21875-32.367187h.671875c16.65625 0 30.179688 14.429687 30.21875 32.277344.140625 58.390625.050781 64.121093-.03125 151.332031-.050781 48.96875-37.121093 88.628906-82.828125 88.628906h-98.140625c-30.03125 0-57.71875-17.421875-72.351562-45.519531l-87.5-168.109375 9.140625-7.582031c18.929687-17.398438 47.398437-15.257813 63.871094 4.789062l24.488281 29.8125.140625-205.089843c.011718-17.871094 13.539062-32.351563 30.21875-32.351563h.011718c16.691407 0 30.21875 14.5 30.21875 32.378906v124.121094c.402344-17.5 13.769532-31.53125 30.199219-31.53125h.710938c16.691406 0 30.222656 14.492187 30.222656 32.371094v10.421875c0-17.882813 13.527344-32.371094 30.226563-32.371094h.070312c16.691406 0 30.222656 14.488281 30.222656 32.371094zm0 0" fill="#f7caa5"/><g fill="#083863"><path d="m319.050781 187.828125h-.671875c-9.125-.042969-17.9375 3.3125-24.71875 9.414063-5.488281-15.203126-19.441406-26.140626-35.792968-26.140626-10.027344.070313-19.597657 4.191407-26.542969 11.429688-6.378907-12.925781-19.175781-21.703125-33.90625-21.703125h-.710938c-7.871093-.132813-15.5625 2.386719-21.828125 7.15625v-91.996094c0-22.261719-17.332031-40.378906-38.414062-40.378906-21.0625 0-38.300782 18.101563-38.3125 40.34375l-.171875 182.777344-10.347657-12.566407c-9.070312-11.289062-22.421874-18.296874-36.859374-19.355468-14.152344-.972656-28.078126 3.953125-38.46875 13.609375l-8.992188 7.457031c-2.902344 2.402344-3.730469 6.507812-1.992188 9.851562l87.5 168.199219c16 30.734375 46.445313 49.910157 79.445313 49.910157h98.140625c50.03125 0 90.777344-43.429688 90.832031-96.707032.023438-24.152344.042969-42.101562.0625-56.601562.050781-38.25.066407-52.382813-.035156-94.613282-.046875-22.207031-17.191406-40.085937-38.214844-40.085937zm22.253907 134.632813c-.019532 14.5-.042969 32.492187-.066407 56.644531-.046875 44.464843-33.613281 80.722656-74.828125 80.722656h-98.140625c-27.015625 0-52.019531-15.875-65.253906-41.296875l-84.519531-162.421875 4.167968-3.480469c.101563-.085937.207032-.1875.308594-.277344 7.175782-6.757812 16.835938-10.226562 26.671875-9.578124 10.042969.765624 19.316407 5.675781 25.601563 13.546874l24.488281 29.808594c2.144531 2.613282 5.695313 3.59375 8.878906 2.457032 3.179688-1.140626 5.300781-4.152344 5.304688-7.53125l.140625-205.089844c.007812-13.429688 10.160156-24.355469 22.414062-24.355469s22.40625 10.9375 22.40625 24.378906v124.050781c0 .300782-.019531.597657-.019531.902344 0 .128906.019531.257813.019531.386719v53.050781c0 4.417969 3.582032 8 8 8 4.417969 0 8-3.582031 8-8v-54.128906c0-13.054688 9.898438-23.421875 21.828125-23.421875h.710938c12.253906 0 22.460937 10.683594 22.460937 24.121094v48.378906c0 4.421875 3.582032 8 8 8 4.417969 0 8-3.578125 8-8v-37.957031c0-13.4375 9.710938-24.371094 22.039063-24.371094 12.253906 0 21.960937 10.933594 21.960937 24.371094v35.808594c0 4.417968 3.582032 8 8 8 4.417969 0 8-3.582032 8-8v-19.390626c0-13.4375 10.246094-23.960937 22.5-23.960937h.671875c12.21875 0 22.1875 10.695313 22.21875 24.097656.101563 42.203125.082031 56.304688.035157 94.535157zm0 0"/><path d="m72.738281 79.441406c4.417969 0 8-3.582031 8-8 0-30.621094 24.820313-55.441406 55.441407-55.441406 30.617187 0 55.4375 24.820312 55.4375 55.441406 0 4.417969 3.582031 8 8 8 4.421874 0 8-3.582031 8-8 0-39.457031-31.984376-71.441406-71.4375-71.441406-39.457032 0-71.441407 31.984375-71.441407 71.441406 0 4.417969 3.582031 8 8 8zm0 0"/></g></svg>
            <span>魚市場資料</span>
            </div>
            <AnimateHeight duration={300} height={fishmarketHeight}>
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
            </AnimateHeight>
          </div>

          <div className="time-wrapper">
            <div className="time-mark"><span>11:00am</span></div>
            <div className="time-detail">
              <p className="place-target">三保松原</p>
              <p className="full"><span className="slash-end">交通</span><div className="place-target"><span>JR清水駅</span><span>清水駅外巴士站</span> (車程 ~1 小時 15 分)</div></p>
              <p className="full"><span className="slash-end">巴士時間</span>10分鐘一班(車程 ~20分鐘)</p>
              <div className="img-wrapper">
                <img src="https://img.travel98.com/l/P_6152_ad1680574a3c19bd5b029d8368f2b612_o.jpg"/>
                <img src="https://img.travel98.com/l/P_6152_547a5272ac4eafe0f64d8f58d17a3d85_o.jpg" />
                <img src="https://img.travel98.com/l/P_6152_13dcd1ca0915946f38ef86b776e7b229_o.jpg" />
                <img src="https://img.travel98.com/l/P_6152_41b2c9f60c97c78133ed28ab6c6c906c_o.jpg" />
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
              <p className="slash-end"><a className="remark highlight" href="https://goo.gl/maps/BQPZJm9xJeahCHqHA" target="_blank">Google Map 路線</a></p>
              <p className="slash-end"><a className="remark highlight" href="https://travel98.com/article/21175" target="_blank">三保松原資料</a></p>
            </div>
          </div>



          <div className="time-wrapper">
            <div className="time-mark"><span>3:00pm</span></div>
            <div className="time-detail">
              <p className="place-target">中田島砂丘 - 濱松市</p>
              <p className="full">
              <span className="slash-end">交通</span>
              <div className="place-target"><span>巴士</span><span>JR清水駅</span><span>JR靜岡駅</span><span>東海道、山陽新幹線</span><span>濱松車站</span><span>遠鐵巴士</span><br/>(車程 ~2 小時 15 分)</div>
              <br/>
              <span className="remark">從JR東海道新幹線「濱松站」搭乘遠鐵巴士、中田島方向約15分鐘，於「中田島砂丘」下車即到</span>
              </p>
              
              <div className="img-wrapper">
                <img src="https://pic.pimg.tw/sammi0224/1519804915-740678009_l.jpg"/>
                <img src="https://blog.ulifestyle.com.hk/blogger/kky1216/wp-content/blogs.dir/0/9438/files/2019/03/IMG_5292.jpg" />
                <img src="https://blog.ulifestyle.com.hk/blogger/kky1216/wp-content/blogs.dir/0/9438/files/2019/03/IMG_5292.jpg" />
                <img src="https://pic.pimg.tw/sammi0224/1519804914-584579833_l.jpg" />
              </div>
              <div className="map">
              <Map 
              google={this.props.google} 
              zoom={15}
              initialCenter={SAND_MARK}
              style={mapStyles}
              >
              <Marker />
              </Map>
              </div>

              <p className="slash-end"><a className="remark highlight" href="https://goo.gl/maps/FH5hh6CMWD3tC4jEA" target="_blank">Google Map 路線</a></p>

            </div>
          </div>


          <div className="time-wrapper">
            <div className="time-mark"><span>8:00pm</span></div>
            <div className="time-detail">
              <p className="place-target">返酒店</p>
              <p className="full">
              <span className="slash-end">交通</span>
              <div className="place-target"><span>遠鐵巴士</span><span>濱松車站</span><span>東海道、山陽新幹線</span><span>JR靜岡駅</span><br/>(車程 ~2 小時 15 分)</div>
              </p>
              <p className="slash-end"><a className="remark highlight" href="https://goo.gl/maps/ZRnzTV4FbXa2DWAM9" target="_blank">Google Map 路線</a></p>
          </div>
          </div>

    
        </section>

        <section title="day2" id="day2" className="day">
        <h1 className="main-head">day 2</h1>
        <div className="time-wrapper">
          <div className="time-mark"><span>9:00am</span></div>
          <div className="time-detail">
            <p className="place-target">三島大吊橋</p>
            <p className="full">
            <span className="slash-end">交通</span>
            <div className="place-target"><span>JR清水駅</span><span>JR三島站</span><span>三島站南口5號巴士站</span><br/>(車程 ~1 小時 45 分)</div>
            <br/>
            <span className="remark">乘「東海巴士」開往「山中」或「元箱根港」,在「三島大吊橋(三島スカイウォーク )」站下車，車程30分鐘。部分班次是特快巴士，中途站較少，車程約20分鐘</span>
            </p>
            
            <div className="img-wrapper">
              <img src="https://farm5.staticflickr.com/4606/25598600987_48f45bf158_h.jpg"/>
              <img src="https://www.likejapan.com/wp-content/uploads/2016/03/editors/206/20160309164712_aORT8iB8.jpg" />
            </div>
            <div className="map">
            <Map 
            google={this.props.google} 
            zoom={15}
            initialCenter={BRIDGE_MARK}
            style={mapStyles}
            >
            <Marker />
            </Map>
            </div>

            <p className="slash-end"><a className="remark highlight" href="https://goo.gl/maps/ynNd5FpHRZJYmFia7" target="_blank">Google Map 路線</a></p>
            <p className="slash-end"><a className="remark highlight" href="https://maptabi.blog/2018/02/26/mishima-skywalk/" target="_blank">Guide</a></p>
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



