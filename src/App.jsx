import { useState } from "react";
import {  Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";

import Home from "./Pages/Home";
import Venus from "./Pages/Venus";
import Mercury from "./Pages/Mercury";
import Earth from "./Pages/Earth";
import Mars from "./Pages/Mars";
import Jupiter from "./Pages/Jupiter";
import Saturn from "./Pages/Saturn";
import Neptune from "./Pages/Neptune";
import Uranus from "./Pages/Uranus";
import Icon from "./Companets/Icon";



const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  {
    key: 1,
    label: (<Link to={"/"}>Home</Link>),
  },
  {
    key: 2,
    title: "Mercury",
    label: (<Link to={"/mercury"}>Mercury</Link>),
  },
  {
    key: 3,
    label: (<Link to={"/venus"}>Venus</Link>),
  },
  {
    key: 4,
    label: (<Link to={"/earth"}>Earth</Link>),
  },
  {
    key: 5,
    label: (<Link to={"/mars"}>Mars</Link>),
  },
  {
    key: 6,
    label: (<Link to={"/jupiter"}>Jupiter</Link>),
  },
  {
    key: 7,
    label: (<Link to={"/saturn"}>Saturn</Link>),
  },
  {
    key: 8,label: (<Link to={"/uranus"}></Link>)
  },
  {
    key: 9,
    label: (<Link to={"/neptune"}>Neptune</Link>),
  },

  // getItem("Venus", "2", <PieChartOutlined />),
  // getItem("Earth", "3", <PieChartOutlined />),
  // getItem("Mars", "4", <PieChartOutlined />),
  // getItem("Jupiter", "5", <PieChartOutlined />),
  // getItem("Saturn", "6", <PieChartOutlined />),
  // getItem("Uranus", "7", <PieChartOutlined />),
  // getItem("Neptune", "8", <PieChartOutlined />),
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
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Outlet></Outlet>
      </Layout>
    </Layout>
  );
};
export default App;
