import { Image, Card } from "antd";
import {} from "@ant-design/icons";
// import Card from "antd/es/card/Card";
import { React, useState } from "react";

const Saturn = () => {
  const [visible, setVisible] = useState(false);

  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  const name = <h1 className="name">Saturn</h1>;
  const description = <p className="description">Saturn descriptions</p>;

  const first = "../Images/Saturn/Saturn1.jpeg";

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
              <Image src="./Images/Saturn/Saturn1.jpeg" />
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

export default Saturn;
