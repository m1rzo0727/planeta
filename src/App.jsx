import { useState } from "react";
import { Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
import { IconProvider } from "@ant-design/icons";

import JupiterImg from "./Companets/JupiterImg";
import PlanetImg from "./Companets/PlanetImg";
import MercuryImg from "./Companets/MercuryImg";
import VenusImg from "./Companets/VenusImg";
import EarthImg from "./Companets/EarthImg";
import MarsImg from "./Companets/MarsImg";
import SaturnImg from "./Companets/SaturnImg";
import UranusImg from "./Companets/UranusImg";
import NeptuneImg from "./Companets/NeptuneImg";

const { Sider } = Layout;

const NavbarMenu = [
  {
    key: 1,
    label: <Link to={"/"}>Planet Info</Link>,
    icon: <PlanetImg />,
  },
  {
    key: 2,
    title: "Mercury",
    label: <Link to={"/mercury"}>Mercury</Link>,
    icon: <MercuryImg />,
  },
  {
    key: 3,
    label: <Link to={"/venus"}>Venus</Link>,
    icon: <VenusImg />,
  },
  {
    key: 4,
    label: <Link to={"/earth"}>Earth</Link>,
    icon: <EarthImg />,
  },
  {
    key: 5,
    label: <Link to={"/mars"}>Mars</Link>,
    icon: <MarsImg />,
  },
  {
    key: 6,
    label: <Link to={"/jupiter"}>Jupiter</Link>,
    icon: <JupiterImg />,
  },
  {
    key: 7,
    label: <Link to={"/saturn"}>Saturn</Link>,
    icon: <SaturnImg />,
  },
  {
    key: 8,
    label: <Link to={"/uranus"}>Uranus</Link>,
    icon: <UranusImg />,
  },
  {
    key: 9,
    label: <Link to={"/neptune"}>Neptune</Link>,
    icon: <NeptuneImg />,
  },
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          theme="dark"
          className="sidebar-menu"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={NavbarMenu}
        />
      </Sider>
      <Layout>
        <Outlet></Outlet>
      </Layout>
    </Layout>
  );
};
export default App;
