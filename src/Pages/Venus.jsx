import { Image, Card } from "antd";
import {} from "@ant-design/icons";
// import Card from "antd/es/card/Card";
import { React, useState } from "react";

const Venus = () => {
  const [visible, setVisible] = useState(false);

  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  const name = <h1 className="name">Venus</h1>;
  const description = (
    <p className="description">
      Quyosh sistemasining Quyoshdan uzoqligi jihatdan ikkinchi sayyorasi.
      Quyoshdan oʻrtacha uzoqligi 108,3 mln km. Atmosferada sezilarli darajada suv bugʻi topilmagan.
    </p>
  );

  const first =
    "";

  const second =
    "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp";

  const third =
    "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp";

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
              <Image src={second} />
              <Image src={third} />
            </Image.PreviewGroup>
          </div>
        </div>
        <div className="text">
          <Card title={name}>
            <h2>{description}</h2>
          </Card>
        </div>
      </div>
      <div className="table"></div>
    </section>
  );
};

export default Venus;
