import { Image, Card } from "antd";
import {} from "@ant-design/icons";
import { React, useState } from "react";

import first from "../Images/Venus/Venus1.png";

import sun from "../Images/Icon/sun.svg";
import area from "../Images/Icon/area.svg";
import mass from "../Images/Icon/mass.svg";
import earth from "../Images/Icon/earth.svg";
import rotate from "../Images/Icon/rotate.svg";
import gravity from "../Images/Icon/gravity.svg";
import diametr from "../Images/Icon/diametr.svg";
import magnetic from "../Images/Icon/magnetic.svg";
import sallites from "../Images/Icon/sallites.svg";
import revolution from "../Images/Icon/revolution.svg";
import atmosphere from "../Images/Icon/atmosphere.svg";
import temperature from "../Images/Icon/temperature.svg";

const Venus = () => {
  const [visible, setVisible] = useState(false);

  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  const name = <h1 className="name">Venera</h1>;
  const description = <p className="description"></p>;

  // const first = "../Images/Venus/Venus1.png";

  return (
    <section id="section">
      <div className="content">
        <div className="img">
          <Image
            preview={{
              visible: false,
            }}
            src={first}
            onClick={() => setVisible(true)}
          />

          <div className="hidden">
            <Image.PreviewGroup
              preview={{
                visible,
                onVisibleChange: (vis) => setVisible(vis),
              }}
            >
              <Image src={first} />
            </Image.PreviewGroup>
          </div>
        </div>
        <div className="text">
          <Card title={name} className="card">
            <h2>{description}</h2>
          </Card>
        </div>
      </div>
      <div className="fact">
        <div className="fact-box">
          <img className="fact-icon" src={diametr} alt="" />
          <h4 className="fact-title">Diametr</h4>
          <h6 className="fact-subtitle">12 104 km</h6>
        </div>
        <div className="fact-box">
          <img className="fact-icon" src={area} alt="" />
          <h4 className="fact-title">Maydon</h4>
          <h6 className="fact-subtitle">460 200 000 km kv</h6>
        </div>
        <div className="fact-box">
          <img className="fact-icon" src={mass} alt="" />
          <h4 className="fact-title">Massa</h4>
          <h6 className="fact-subtitle">
            4.87 kg (10<span className="dec">24</span> . )
          </h6>
        </div>
        <div className="fact-box">
          <img className="fact-icon" src={sun} alt="" />
          <h4 className="fact-title">Quyoshgacha masofa</h4>
          <h6 className="fact-subtitle">108 200 000 km</h6>
        </div>
        <div className="fact-box">
          <img className="fact-icon" src={rotate} alt="" />
          <h4 className="fact-title">Quyosh atrofida aylanish</h4>
          <h6 className="fact-subtitle">116 kun</h6>
        </div>
        <div className="fact-box">
          <img className="fact-icon" src={revolution} alt="" />
          <h4 className="fact-title">O'z o'qi atrofida aylanish</h4>
          <h6 className="fact-subtitle">224 kun</h6>
        </div>
        <div className="fact-box">
          <img className="fact-icon" src={temperature} alt="" />
          <h4 className="fact-title">Harorat</h4>
          <h6 className="fact-subtitle">460&#8451; </h6>
        </div>
        <div className="fact-box">
          <img className="fact-icon" src={gravity} alt="" />
          <h4 className="fact-title">Gravitatsiya</h4>
          <h6 className="fact-subtitle">
            8.9 m/s <span className="dec">2</span>
          </h6>
        </div>
        <div className="fact-box">
          <img className="fact-icon" src={sallites} alt="" />
          <h4 className="fact-title">Tabiiy yo'ldosh</h4>
          <h6 className="fact-subtitle">0</h6>
        </div>
      </div>
    </section>
  );
};

export default Venus;
