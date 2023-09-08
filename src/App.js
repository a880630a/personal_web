import "./styles.css";
import "./scss/mainUI.scss";
import "./scss/page2.scss";
import "./scss/page3.scss";
import "./scss/page4.scss";
import "./scss/page5.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import StatusBar from "./component/StatusBar";
import MyImg from "./image/my1.jpg";
import { useState, useEffect, useRef } from "react";
import { Waypoint } from "react-waypoint";
import ArrowToDown from "./image/down-arrow2-svgrepo-com.svg";
import startText from "./image/right-4-svgrepo-com.svg";
import texture from "./image/bk.jpg";
import windowsImg from "./image/microsoft-svgrepo-com.svg";
import UbuntuImg from "./image/ubuntu-svgrepo-com.svg";
import jsImg from "./image/js-svgrepo-com.svg";
import pythonImg from "./image/python-svgrepo-com.svg";
import ReactImg from "./image/react-svgrepo-com.svg";
import SpiderImg from "./image/spider-widow-svgrepo-com.svg";
import RosImg from "./image/Ros_logo.svg";
import DockerImg from "./image/docker-svgrepo-com.svg";
import work1Img from "./image/work1.png";
import work2Img from "./image/work2.png";
import mailImg from "./image/mail.svg";

export default function App() {
  AOS.init();
  const [first, setFirst] = useState(false);
  const [isTargetPage, setIsTargetPage] = useState(false);
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);
  const [showDiv4, setShowDiv4] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const jobRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const abilityLanguage = [
    {
      name: "Python",
      percentage: 80,
      img: pythonImg
    },
    {
      name: "Javascript",
      percentage: 60,
      img: jsImg
    },
    {
      name: "React",
      percentage: 70,
      img: ReactImg
    }
  ];
  const abilityAnother = [
    {
      name: "網頁爬蟲",
      percentage: 50,
      img: SpiderImg
    },
    {
      name: "ROS",
      percentage: 70,
      img: RosImg
    },
    {
      name: "Docker",
      percentage: 40,
      img: DockerImg
    }
  ];
  const operationSystem = ["Windows", "Linux"];

  const selectPage = (page) => {
    if (page === "home") {
      if (homeRef.current) {
        homeRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else if (page === "about") {
      if (aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else if (page === "skill") {
      if (skillRef.current) {
        skillRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else if (page === "job") {
      if (jobRef.current) {
        jobRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else if (page === "work") {
      if (workRef.current) {
        workRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else if (page === "contact") {
      if (contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // const inTargetPage = () => {
  //   setIsTargetPage(false);
  //   console.log("xxxx");
  // };

  // const outTargetPage = () => {
  //   setIsTargetPage(true);
  //   if (targetRef.current) {
  //     targetRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  // const animateDiv = (divNum) => {
  //   setShowDiv(divNum);
  //   console.log("enter div : ", divNum);
  // };
  // const animateDivPro = (divNum) => {
  //   if (divNum === 1) {
  //     setShowDiv1(true);
  //   } else if (divNum === 2) {
  //     setShowDiv2(true);
  //   } else if (divNum === 3) {
  //     setShowDiv3(true);
  //   } else if (divNum === 4) {
  //     setShowDiv4(true);
  //   }
  // };

  // 在componentDidMount時將first設為true，觸發淡入動畫
  useEffect(() => {
    setFirst(true);
    // const repeat = setInterval(() => {

    // }, 1000);
    // return () => {
    //   clearInterval(repeat);
    // };
  }, []);

  return (
    <div className="App">
      <div className="body" style={{ backgroundImage: `url(${texture})` }}>
        <div className="nav-bar">
          <button className="home-nav" onClick={() => selectPage("home")}>
            首頁
          </button>
          <hr />
          <button className="about-nav" onClick={() => selectPage("about")}>
            關於
          </button>
          <hr />
          <button className="skill-nav" onClick={() => selectPage("skill")}>
            專長
          </button>
          <hr />
          <button className="job-nav" onClick={() => selectPage("job")}>
            工作經驗
          </button>
          <hr />
          <button className="work-nav" onClick={() => selectPage("work")}>
            作品集
          </button>
          <hr />
          <button className="contact-nav" onClick={() => selectPage("contact")}>
            聯繫
          </button>
        </div>
        <div
          className="background-img"
          // style={{
          //   backgroundImage: `url(${Xian})`,
          //   backgroundSize: "50% 50%",
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "80% 100%"
          // }}
        >
          {/* 淡入效果 */}
          <div className="main-page" ref={homeRef}>
            <div className="text-1">
              <h1 className="name">I'm Xian</h1>
              {/* <Waypoint onEnter={inTargetPage} onLeave={outTargetPage}> */}
              <h2 className="introduce">Welcome to my website</h2>
              {/* </Waypoint> */}
            </div>

            {/* 在這裡放置觸發滑動效果的元素 */}
            <button
              className="arrow-down-icon"
              onClick={() => selectPage("about")}
            >
              關於我
              <img src={ArrowToDown} alt="ArrowToDown" />
            </button>
          </div>
        </div>
        <div
          ref={aboutRef}
          className="page2"
          // style={{
          //   backgroundImage: `url(${texture})`,
          //   backgroundAttachment: "fixed",
          //   backgroundSize: "100% auto "
          // }}
        >
          {/* <Waypoint onEnter={() => animateDiv(1)}> */}
          {/* <Waypoint onEnter={() => animateDivPro(1)}> */}
          <div className="title">
            {/* <h1>about me</h1> */}
            <h1>關於我</h1>
          </div>
          {/* </Waypoint> */}

          <div className="data-area">
            <div className="left-to-right">
              {/* <div className={`item1 ${showDiv1 === true ? "animate" : ""}`}> */}
              <div className="item1">
                <div className="introduce-myself">
                  <div
                    data-aos="zoom-out-up"
                    data-aos-delay="500"
                    className="image-place"
                  >
                    <img
                      src={MyImg}
                      alt="my"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>

                  <div
                    // className={`content ${showDiv1 === true ? "animate" : ""}`}
                    className="content"
                    data-aos="fade-left"
                  >
                    <h3>
                      <img
                        src={startText}
                        alt="startText"
                        style={{ height: "20px" }}
                      />
                      林品憲
                    </h3>

                    <h3>
                      <img
                        src={startText}
                        alt="startText"
                        style={{ height: "20px" }}
                      />
                      1999/06/30
                    </h3>

                    <h3>
                      <img
                        src={startText}
                        alt="startText"
                        style={{ height: "20px" }}
                      />
                      台南市仁德區
                    </h3>
                    <h3>
                      <img
                        src={startText}
                        alt="startText"
                        style={{ height: "20px" }}
                      />
                      2021年畢業於逢甲大學資訊工程學系
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page3" ref={skillRef}>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="title"
          >
            <h1>專長</h1>
          </div>
          <div data-aos="fade-up" className="data-area" data-aos-delay="500">
            <div className="program-language">
              <h2>程式語言</h2>
              {abilityLanguage.map((skill) => (
                <StatusBar
                  percentage={skill.percentage}
                  bord="3"
                  name={skill.name}
                  img={skill.img}
                />
              ))}
            </div>
            <div className="another-skill">
              <h2>其他</h2>
              {abilityAnother.map((skill) => (
                <StatusBar
                  percentage={skill.percentage}
                  bord="3"
                  name={skill.name}
                  img={skill.img}
                />
              ))}
            </div>
            <div className="operation-system">
              <h2>作業系統</h2>
              {operationSystem.map((systemData) => (
                <div className="operation-data">
                  {systemData}
                  <img
                    src={systemData === "Windows" ? windowsImg : UbuntuImg}
                    alt="operationImg"
                    height="40px"
                  ></img>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className="page4"
          ref={jobRef}
        >
          <div className="title">
            <h1> 工作經驗</h1>
          </div>
          <div className="data-area">
            <div className="time">2022.08 - 2023.08</div>
            <div className="sub-title">
              <h2>軟體工程師 software engineer</h2>
            </div>
            <div className="introduce">
              <h3>
                主要負責與團隊共同開發自主式移動機器人AMR（Autonomous Mobile
                Robot），集中在派車系統、自動充電站、軟硬體對接與AMR參數調校及週邊韌體設備等方面。
              </h3>
              <div className="introduce-inner">
                <div className="one-column">
                  <h4>
                    1.
                    完成派車系統的前端(React)和後端(Flask)開發，並透過ROS架構獲取機器人資訊與處理。
                  </h4>
                  <h4>
                    2. 參與電池管理系統BMS(Battery Management
                    System)、LED、多功能IO等設備韌體驅動開發與實現
                  </h4>
                  <h4>3. 自動充電流程設計</h4>
                </div>

                <div className="two-column">
                  <h4>4. 開發自動畫測試程式，減少測試時所花費的時間</h4>
                  <h4>
                    5.
                    與新加坡跨國供應商，長時間合作並與他們路線規劃演算法進行軟硬體整合對接
                  </h4>
                  <h4>6.曾參與知名面板廠商AMR的設置，並獲得實際應用中的經驗</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="page5" ref={workRef}>
          <div className="title">
            <h1>作品集</h1>
          </div>
          <div className="data-area">
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1500"
              className="work1"
            >
              <div className="image-place">
                <img src={work1Img} alt="work1" />
              </div>
              <div className="content">
                <h2>派車系統前後端開發</h2>
                <h3>
                  1.
                  派車系統的前端（React）開發，使用者可進行多條件功能派車選擇與即時更新的派車地圖，可快速的確認目前的位置與車輛狀態資訊，並結合動畫（Sass）使網頁互動性增加，與RWD設計可以兼容平板與電腦。
                </h3>
                <h3>
                  2.
                  派車系統後端（Flask）開發，使用Axios建立API與前端進行串接，主要處理使用者派車請求，並規劃路線，與獲取機器人作業系統ROS（Robot
                  Operation System）內的Topic資訊即時更新車輛位置與電量資訊。
                </h3>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1500"
              className="work2"
            >
              <div className="image-place">
                <img src={work2Img} alt="work2" />
              </div>
              <div className="content">
                <h2>燃料稅與牌照稅計算工具</h2>
                <h3>
                  使用者可以透過此工具，輸入查詢日期、c.c.數、車輛類型等條件，快速的計算出稅金的總和。若未來稅金有調整，可透過透過Python爬蟲更新稅金資料。
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="page-end" ref={contactRef}>
          <div className="title">
            <h1>聯繫我</h1>
          </div>
          <div className="data-area">
            <img src={mailImg} alt="mail" style={{ width: "10%" }} />
            <h2>dragonball880630@gmail.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
