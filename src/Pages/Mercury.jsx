import { Image, Card, Avatar } from "antd";
import {} from "@ant-design/icons";
import { React, useState } from "react";

import first from "../Images/Mercury/Mercury1.png";

const Mercury = () => {
  const [visible, setVisible] = useState(false);

  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  const name = <h1 className="name">Mercury</h1>;
  const description = (
    <p className="description">
      Mercury is the smallest planet in the Solar System and is the closest
      planet to the Sun. Being the nearest planet to the Sun, you might think
      that Mercury is also the hottest, but its temperature is actually just
      under Venus'. This is because the atmosphere on Mercury is much less dense
      than the atmosphere of Venus. Mercury does not have any moon. The planet
      rotates much slower than Earth but orbits faster due to how close it is to
      the Sun. It takes 59 Earth days for Mercury to complete a spin around
      itself, and a year on Mercury equals 88 days on Earth. <br />
    </p>
  );

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
          <Card className="card" title={name}>
            <h2>{description}</h2>
          </Card>
        </div>
      </div>
      <div className="table">
       
      </div>
    </section>
  );
};

export default Mercury;
