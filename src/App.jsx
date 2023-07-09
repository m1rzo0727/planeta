import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
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
  getItem("Mercury", "1", <PieChartOutlined />),
  getItem("Venus", "2", <PieChartOutlined />),
  getItem("Earth", "3", <PieChartOutlined />),
  getItem("Mars", "4", <PieChartOutlined />),
  getItem("Jupiter", "5", <PieChartOutlined />),
  getItem("Saturn", "6", <PieChartOutlined />),
  getItem("Uranus", "7", <PieChartOutlined />),
  getItem("Neptune", "8", <PieChartOutlined />),
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
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items} 
        />
      </Sider>
      <Layout>
        <Content>s </Content>
      </Layout>
    </Layout>
  );
};
export default App;
