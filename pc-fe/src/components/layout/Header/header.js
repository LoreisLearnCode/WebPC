import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import userApi from "../../../apis/userApi";
import logo from "../../../assets/image/logopc.png";
import DropdownAvatar from "../../DropdownMenu/dropdownMenu";
import { useHistory } from "react-router-dom";
import {
  Layout,
  Avatar,
  Badge,
  Row,
  Col,
  List,
  Popover,
  Modal,
  Drawer,
} from "antd";
import {
  BellOutlined,
  NotificationTwoTone,
  MenuFoldOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

function Topbar() {
  const [countNotification, setCountNotification] = useState(0);
  const [notification, setNotification] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visiblePopover, setVisiblePopover] = useState(false);
  const [titleNotification, setTitleNotification] = useState("");
  const [contentNotification, setContentNotification] = useState("");
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [userData, setUserData] = useState([]);
  const [cart, setCart] = useState();

  const history = useHistory();

  const handleLink = (link) => {
    setVisibleDrawer(false);
    history.push(link);
  };

  const Logout = async () => {
    await userApi.logout();
    localStorage.removeItem("client");
    history.push("/login");
    window.location.reload(false);
  };

  const content = (
    <div>
      {notification.map((values, index) => {
        return (
          <div>
            <List.Item style={{ padding: 0, margin: 0 }}>
              <List.Item.Meta
                style={{ width: 250, margin: 0 }}
                avatar={
                  <NotificationTwoTone
                    style={{ fontSize: "20px", color: "#08c" }}
                  />
                }
                title={
                  <a
                    onClick={() =>
                      handleNotification(values.content, values.title)
                    }
                  >
                    {values.title}
                  </a>
                }
                description={
                  <p
                    className={styles.fixLine}
                    dangerouslySetInnerHTML={{ __html: values.content }}
                  ></p>
                }
              />
            </List.Item>
          </div>
        );
      })}
    </div>
  );

  const handleNotification = (valuesContent, valuesTitile) => {
    setVisible(true);
    setVisiblePopover(visible !== visible);
    setContentNotification(valuesContent);
    setTitleNotification(valuesTitile);
  };

  const handleVisibleChange = (visible) => {
    setVisiblePopover(visible);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const showDrawer = () => {
    setVisibleDrawer(true);
  };

  const onClose = () => {
    setVisibleDrawer(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await userApi.getProfile();
        const cart = localStorage.getItem("cartLength");
        console.log(cart);
        setCart(cart);
        setUserData(response);
      } catch (error) {
        console.log("Failed to fetch profile user:" + error);
      }
    })();
  }, []);

  return (
    <Header
      style={{ background: "#D70018", zIndex: 1 }}
      className={styles.header}
    >
      <Row>
        <Col span={14}>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Row className={styles.headerText}>
              <Col style={{ marginRight: 50 }}>
                <img
                  style={{
                    color: "#000000",
                    fontSize: 15,
                    height: 55,
                    width: 80,
                    cursor: "pointer",
                  }}
                  src={logo}
                  onClick={() => handleLink("/home")}
                ></img>
              </Col>
              <Col style={{ marginLeft: 20, marginRight: 40 }}>
                <p
                  style={{ fontSize: 16, color: "#FFFFFF", cursor: "pointer" }}
                  className={styles.hoverLink}
                  onClick={() => handleLink("/home")}
                >
                  Trang chủ
                </p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={8} offset={2} className={styles.headerText}>
          <div
            style={{
              position: "relative",
              display: "flex",
              float: "right",
              alignItems: "center",
            }}
          >
            <Row>
              <Col onClick={() => handleLink("/cart")}>
                <p
                  style={{
                    marginRight: 50,
                    padding: 0,
                    margin: 0,
                    color: "#FFFFFF",
                  }}
                >
                  <ShoppingOutlined
                    style={{ fontSize: "18px", color: "#FFFFFF" }}
                  />{" "}
                  Giỏ hàng ({cart})
                </p>
              </Col>
              <Col>
                <Badge
                  style={{ marginLeft: 10 }}
                  overflowCount={9999}
                  count={userData?.score > 0 ? userData?.score : 0}
                />
              </Col>
            </Row>

            <Row>
              <DropdownAvatar key="avatar" />
            </Row>
            <Modal
              title={titleNotification}
              visible={visible}
              onOk={handleOk}
              onCancel={handleOk}
              cancelButtonProps={{ style: { display: "none" } }}
            >
              <p dangerouslySetInnerHTML={{ __html: contentNotification }}></p>
            </Modal>
          </div>
        </Col>
      </Row>
    </Header>
  );
}

export default Topbar;
