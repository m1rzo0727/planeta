import React from "react";
import { Image } from "antd";
import { useState } from "react";
import Card from "antd/es/card/Card";

const Mercury = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section id="section">
      <div className="content">
        <div className="img">
          {" "}
          <Image
            preview={{
              visible: false,
            }}
            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
            onClick={() => setVisible(true)}
          />
          <div className="hidden">
            <Image.PreviewGroup
              preview={{
                visible,
                onVisibleChange: (vis) => setVisible(vis),
              }}
            >
              <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
              <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
              <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
            </Image.PreviewGroup>
          </div>
        </div>
        <div className="text">
          <Card className="card " title="Mercury">
            <h2>
              Mercury is the first planet from the Sun and the smallest planet
              in the Solar System. It is a terrestrial planet with a heavily
              cratered surface due to the planet having no geological activity
              and an extremely tenuous atmosphere , 38% of that of Earth's,
              Mercury is dense enough to have roughly the same surface gravity
              as Mars. Mercury has a dynamic magnetic field with a strength
              about 1% of that of Earth's and has no natural satellites.
            </h2>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mercury;
