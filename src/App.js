import { useEffect, useState } from "react";
import axios from "axios"
import parse from "html-react-parser"

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    // getLangFromUrl()
    // getData()
  }, [])

  const getLangFromUrl = () => {
    let url = window.location.href
    let lang = url.split('/')[url.split('/').length - 1]
    console.log(lang)
  }

  const getData = (param) => {
    var param = param ? param : 'english'
    axios.get(`http://side.local/sample-page-${param}/`)
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const lanChange = (e) => {
    var { id, value } = e.target
    getData(value)
  }

  return (
    <>
      {/* <>
      <p>Language</p>
      <select onChange={(e) => lanChange(e)}>
        <option value="english">english</option>
        <option value="chinese">chinese</option>
        <option value="japanese">japanese</option>
      </select>
    </>
          {data.length > 0 ? parse(data) : ''} */}
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/img/side_logo.svg" alt="" />
          </a>
          <div className="navbar-collapse" id="">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </a>
                {/* <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">SERVICES</a></li>
                    <li><a class="dropdown-item" href="#">SERVICES</a></li>
                    <li><a class="dropdown-item" href="#">SERVICES</a></li>
                  </ul> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  NEWS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  LANGUAGE
                </a>
                {/* <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">LANGUAGE</a></li>
                    <li><a class="dropdown-item" href="#">LANGUAGE</a></li>
                    <li><a class="dropdown-item" href="#">LANGUAGE</a></li>
                  </ul> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="section1 banner_content">
        <div className="banner_wrapper">
          <div className="split_images">
            <div className="img_height height_3">
              <img src="/img/aliens.jpg" alt="" />
            </div>
            <div className="img_height height_2">
              <img src="/img/deadisland2.jpg" alt="" />
            </div>
            <div className="img_height height_1">
              <img src="/img/starwars.jpg" alt="" />
            </div>
            <div className="img_height height_2">
              <img src="/img/deadisland2.jpg" alt="" />
            </div>
            <div className="img_height height_3">
              <img src="/img/aliens.jpg" alt="" />
            </div>
            <div className="img_height height_4">
              <img src="/img/deadisland2.jpg" alt="" />
            </div>
            <div className="img_height height_3">
              <img src="/img/starwars.jpg" alt="" />
            </div>
            <div className="img_height height_2">
              <img src="/img/aliens.jpg" alt="" />
            </div>
            <div className="img_height height_1">
              <img src="/img/deadisland2.jpg" alt="" />
            </div>
            <div className="img_height height_2">
              <img src="/img/aliens.jpg" alt="" />
            </div>
            <div className="img_height height_3">
              <img src="/img/deadisland2.jpg" alt="" />
            </div>
            <div className="img_height height_4">
              <img src="/img/starwars.jpg" alt="" />
            </div>
            <div className="img_height height_3">
              <img src="/img/aliens.jpg" alt="" />
            </div>
            <div className="img_height height_2">
              <img src="/img/starwars.jpg" alt="" />
            </div>
            <div className="img_height height_1">
              <img src="/img/aliens.jpg" alt="" />
            </div>
            <div className="img_height height_2">
              <img src="/img/starwars.jpg" alt="" />
            </div>
            <div className="img_height height_3">
              <img src="/img/aliens.jpg" alt="" />
            </div>
          </div>
          <div className="content">
            <p className="top_line_content">we give voice to games</p>
            <h1>Bringing</h1>
            <h1 className="sec_h1">
              your <span>vision</span>
            </h1>
            <h1>to the world</h1>
          </div>
          <div className="circular-progress">
            <p className="percentage">
              Hover to <br /> play audio
            </p>
          </div>
        </div>
      </div>
      <div className="section3">
        <h5>
          Where the oldest form of storytelling in the world meets the most
          immersive technology of today.
        </h5>
        <div className="sidecontent">
          <div className="leftcontent">
            <p>
              For over 25 years, SIDE's award-winning team of technical and creative
              experts have been providing casting, directing, voice production,
              localized audio, and performance capture to the global games industry.
            </p>
            <div className="indentcontent">
              <p>
                To this day, our team holds the same collective intention: to
                develop the truest interpretation of each client's vision, for
                audiences of every genre, on any platform, in all languages.
              </p>
              <div className="custombtn">
                <button className="" name="">
                  Learn More about us
                </button>
                <span>
                  <svg
                    width={16}
                    height={11}
                    viewBox="0 0 16 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.171875 5.27543L0.171875 5.77543L0.671875 5.77543L13.4612 5.77543L9.89449 9.34217L9.54094 9.69573L10.248 10.4028L10.6016 10.0493L15.0219 5.62895L15.3755 5.2754L15.0219 4.92184L10.6016 0.501512L10.248 0.147959L9.54094 0.855066L9.89449 1.20862L13.4613 4.77543L1.17188 4.77543L1.17188 2.1127L1.17188 1.6127L0.171875 1.6127L0.171875 2.1127L0.171875 5.27543Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="rightcontent">
            <div className="circular-progress">
              <p className="percentage">
                Hover to <br /> play audio
              </p>
            </div>
            <div className="stripes">
              <img src="/img/la1.svg" alt="" />
              <img src="/img/la2.svg" alt="" />
              <img src="/img/la3.svg" alt="" />
              <img src="/img/la4.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="section5">
        <h1>
          Many <br /> Locations <span />
        </h1>
        <div className="sidecontent">
          <div className="leftcontent">
            <div className="stripes">
              <img src="/img/ml1.svg" alt="" />
              <img src="/img/ml2.svg" alt="" />
              <img src="/img/ml3.svg" alt="" />
              <img src="/img/ml4.svg" alt="" />
              <img src="/img/ml5.svg" alt="" />
            </div>
          </div>
          <div className="rightcontent">
            <div className="title_wrap">
              <div className="circular-progress">
                <p className="percentage">
                  Hover to <br /> play audio
                </p>
              </div>
              <h5>
                ONE GREAT <br /> <span>TALENT POOL</span>
              </h5>
            </div>
            <p className="content">
              With state-of-the-art facilities in London, Paris, Shanghai, and Los
              Angeles, plus a global network of recording studios across Europe,
              Asia, and Latin America, SIDE delivers the highest quality game
              voiceover recording in the location that best suits your needs.
            </p>
            <div className="custombtn">
              <button className="" name="">
                see our locations
              </button>
              <span>
                <svg
                  width={16}
                  height={11}
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.171875 5.27543L0.171875 5.77543L0.671875 5.77543L13.4612 5.77543L9.89449 9.34217L9.54094 9.69573L10.248 10.4028L10.6016 10.0493L15.0219 5.62895L15.3755 5.2754L15.0219 4.92184L10.6016 0.501512L10.248 0.147959L9.54094 0.855066L9.89449 1.20862L13.4613 4.77543L1.17188 4.77543L1.17188 2.1127L1.17188 1.6127L0.171875 1.6127L0.171875 2.1127L0.171875 5.27543Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="section6">
        <div className="stripes">
          <img src="/img/ws1.svg" alt="" />
          <img src="/img/ws2.svg" alt="" />
          <img src="/img/ws3.svg" alt="" />
          <img src="/img/ws4.svg" alt="" />
          <img src="/img/ws5.svg" alt="" />
          <img src="/img/ws6.svg" alt="" />
        </div>
      </div>
      <div className="section7">
        <div className="our_clients">
          <h1>Our Clients</h1>
          <p className="">
            From world-renowned game publishers to industry newcomers about to break
            out, SIDE delivers top-tier audio services for the global game and
            interactive industry.
          </p>
          <p className="smalltext">
            Our clients encompass everything from AAA to indie game developers and
            publishers to the technology brands behind some of the biggest IPs and
            media platforms available today.
          </p>
        </div>
      </div>
      <div className="section8">
        <div className="leftcontent">
          <h5>
            what they <br /> say about us
          </h5>
          <p className="content">
            <i>
              Sed viverra faucibus rutrum ut tellus. Faucibus arcu, porttitor diam
              sem. Amet praesent turpis morbi amet, etiam dictum sed amet. Lorem
              ipsum dolor sit amet conseceteur arcu et viverra.
            </i>
          </p>
          <p className="tagline">
            <span />
            NAME SURNAME, COMPANY
          </p>
          <div className="arrows">
            <button>
              <img src="/img/leftarrow.svg" alt="" />
            </button>
            <button>
              <img src="/img/rightarrow.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="rightcontent">
          <h1>
            Tell us <br /> Your <br /> Story
          </h1>
          <div className="circular-progress fill">
            <p className="percentage">
              Contact <br /> Us
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footerlinks">
          <div className="leftpart">
            <label htmlFor="" className="">
              connect
            </label>
            <div className="links">
              <h6>
                <a href="">twitter</a>
              </h6>
              <h6>
                <a href="">instagram</a>
              </h6>
              <h6>
                <a href="">linkedin</a>
              </h6>
            </div>
            <div className="mailto">
              <label htmlFor="" className="">
                get in touch
              </label>
              <h4>
                <a href="mailto:info@sideglobal.com">info@sideglobal.com</a>
              </h4>
            </div>
          </div>
          <div className="rightpart">
            <div className="footernav">
              <h6>
                <a href="">about</a>
              </h6>
              <h6>
                <a href="">services</a>
              </h6>
              <h6>
                <a href="">projects</a>
              </h6>
              <h6>
                <a href="">news</a>
              </h6>
              <h6>
                <a href="">contact</a>
              </h6>
            </div>
          </div>
        </div>
        <div className="footerbottom">
          <div className="leftpart">
            <p>BRINGING YOUR STORY TO THE WORLD.</p>
            <p>
              <a href="#">Part of the PTW family of brands</a>
            </p>
          </div>
          <div className="rightpart">
            <p>Privacy policy • Terms &amp; conditions • © 2022 </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


