import React, { useState, useEffect } from "react";
import "../Home/home.css";
import Texty from "rc-texty";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";
import eventApi from "../../apis/eventApi";
import productApi from "../../apis/productApi";
import { OverPack } from "rc-scroll-anim";
import { DateTime } from "../../utils/dateTime";
import handshake from "../../assets/icon/handshake.svg";
import ps2 from "../../assets/image/banner/ps2.png";
import ps1 from "../../assets/image/banner/ps1.png";
import ps3 from "../../assets/image/banner/ps3.png";

import service6 from "../../assets/image/service/service6.png";
import service7 from "../../assets/image/service/service7.png";
import service8 from "../../assets/image/service/service8.png";
import service9 from "../../assets/image/service/service9.png";
import service10 from "../../assets/image/service/service10.png";

import { useHistory } from "react-router-dom";
import { RightOutlined, QrcodeOutlined } from "@ant-design/icons";
import {
  Col,
  Row,
  Button,
  Pagination,
  Spin,
  Carousel,
  Card,
  List,
  BackTop,
  Affix,
  Avatar,
  Badge,
  Rate,
} from "antd";

const DATE_TIME_FORMAT = "DD - MM - YYYY";
const gridStyle = {
  width: "25%",
  textAlign: "center",
};

const Home = () => {
  const [event, setEvent] = useState([]);
  const [productList, setProductList] = useState([]);
  const [eventListHome, setEventListHome] = useState([]);
  const [totalEvent, setTotalEvent] = useState(Number);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [productsPhone, setProductsPhone] = useState([]);
  const [productsPC, setProductsPC] = useState([]);
  const [productsTablet, setProductsTablet] = useState([]);

  const history = useHistory();

  const handlePage = async (page, size) => {
    try {
      const response = await eventApi.getListEvents(page, 8);
      setEventListHome(response.data);
      setTotalEvent(response.total_count);
      setCurrentPage(page);
    } catch (error) {
      console.log("Failed to fetch event list:" + error);
    }
  };

  const handleReadMore = (id) => {
    console.log(id);
    history.push("product-detail/" + id);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await productApi.getListProducts({
          page: 1,
          limit: 10,
        });
        setProductList(response.data.docs);
        setTotalEvent(response);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch event list:" + error);
      }

      try {
        const response = await productApi.getListEvents(1, 6);
        setEventListHome(response.data);
        setTotalEvent(response.total_count);
      } catch (error) {
        console.log("Failed to fetch event list:" + error);
      }
      try {
        const response = await productApi.getCategory({ limit: 10, page: 1 });
        console.log(response);
        setCategories(response.data.docs);
      } catch (error) {
        console.log(error);
      }
      try {
        const data = { limit: 10, page: 1 };
        const response = await productApi.getProductsByCategory(
          data,
          "643cd2aed2f4cf93f513bdad"
        );
        console.log(response);
        setProductsPhone(response.data.docs);
        const response2 = await productApi.getProductsByCategory(
          data,
          "643cd89a79b4192efedda4ee"
        );
        console.log(response2);
        setProductsPC(response2.data.docs);
        const response3 = await productApi.getProductsByCategory(
          data,
          "643cd88879b4192efedda4e6"
        );
        console.log(response3);
        setProductsTablet(response3.data.docs);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Spin spinning={false}>
      <div
        style={{
          background: "#FFFFFF",
          overflowX: "hidden",
          overflowY: "hidden",
          paddingTop: 15,
        }}
        className="home"
      >
        <div
          style={{ background: "#FFFFFF" }}
          className="container-home container banner-promotion"
        >
          <Row justify="center" align="top" key="1">
            <Col span={5}>
              <ul className="menu-tree">
                {categories.map((category) => (
                  <li key={category.id}>
                    <div className="menu-category">
                      {category.name}
                      <RightOutlined />
                    </div>
                  </li>
                ))}
              </ul>
            </Col>
            <Col span={14}>
              <Carousel autoplay className="carousel-image">
                <div className="img">
                  <img
                    style={{ width: "100%", height: 370 }}
                    src={ps2}
                    alt=""
                  />
                </div>
                <div className="img">
                  <img style={{ width: "100%", height: 370 }} src={ps1} />
                </div>
                <div className="img">
                  <img
                    style={{ width: "100%", height: 370 }}
                    src={ps3}
                    alt=""
                  />
                </div>
              </Carousel>
            </Col>
          </Row>
        </div>

        <br />
        <div className="card_wrap container-home container"></div>
        <div className="image-one">
          <Row justify="center" className="container-home container" key="1">
            <div className="title-category">
              <a href="" class="title" style={{ textAlign: "left" }}>
                <h3>LAPTOP</h3>
              </a>
            </div>
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 4,
                xxl: 5,
              }}
              dataSource={productsPhone}
              renderItem={(item) => (
                <List.Item>
                  <Badge.Ribbon text="Giảm giá" color="red">
                    <Card
                      className="card_product"
                      onClick={() => handleReadMore(item._id)}
                    >
                      <img
                        style={{ width: "100%", height: 180 }}
                        src={item.image}
                        alt=""
                      ></img>
                      <div className="title_product">{item.name}</div>
                      <div className="price_group">
                        <div className="price_product">
                          {item.price.toLocaleString("vi", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </div>
                        <div className="promotion_product">
                          {item.promotion.toLocaleString("vi", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </div>
                      </div>
                      <div className="support_product">
                        Thu cũ lên đời - Giá thu cao nhất - Tặng thêm 1 triệu
                        khi lên đời
                      </div>
                      <Rate
                        className="rate_product"
                        allowHalf
                        defaultValue={5}
                      />
                    </Card>
                  </Badge.Ribbon>
                </List.Item>
              )}
            />
          </Row>
        </div>

        <div className="image-one">
          <Row justify="center" className="container-home container" key="2">
            <div className="title-category">
              <a href="" class="title" style={{ textAlign: "left" }}>
                <h3>MÀN HÌNH</h3>
              </a>
            </div>
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 4,
                xxl: 5,
              }}
              dataSource={productsPC}
              renderItem={(item) => (
                <List.Item>
                  <Badge.Ribbon text="Giảm giá" color="red">
                    <Card
                      className="card_product"
                      onClick={() => handleReadMore(item._id)}
                    >
                      <img
                        style={{ width: "100%", height: 180 }}
                        src={item.image}
                        alt=""
                      ></img>
                      <div className="title_product">{item.name}</div>
                      <div className="price_group">
                        <div className="price_product">
                          {item.price.toLocaleString("vi", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </div>
                        <div className="promotion_product">
                          {item.promotion.toLocaleString("vi", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </div>
                      </div>
                      <div className="support_product">
                        Thu cũ lên đời - Giá thu cao nhất - Tặng thêm 1 triệu
                        khi lên đời
                      </div>
                      <Rate
                        className="rate_product"
                        allowHalf
                        defaultValue={5}
                      />
                    </Card>
                  </Badge.Ribbon>
                </List.Item>
              )}
            />
          </Row>
        </div>

        <div className="image-one">
          <Row justify="center" className="container-home container" key="3">
            <div className="title-category">
              <a href="" class="title" style={{ textAlign: "left" }}>
                <h3>PC GAMING</h3>
              </a>
            </div>
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 4,
                xxl: 5,
              }}
              dataSource={productsTablet}
              renderItem={(item) => (
                <List.Item>
                  <Badge.Ribbon text="Giảm giá" color="red">
                    <Card
                      className="card_product"
                      onClick={() => handleReadMore(item._id)}
                    >
                      <img
                        style={{ width: "100%", height: 180 }}
                        src={item.image}
                        alt=""
                      ></img>
                      <div className="title_product">{item.name}</div>
                      <div className="price_group">
                        <div className="price_product">
                          {item.price.toLocaleString("vi", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </div>
                        <div className="promotion_product">
                          {item.promotion.toLocaleString("vi", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </div>
                      </div>
                      <div className="support_product">
                        Thu cũ lên đời - Giá thu cao nhất - Tặng thêm 1 triệu
                        khi lên đời
                      </div>
                      <Rate
                        className="rate_product"
                        allowHalf
                        defaultValue={5}
                      />
                    </Card>
                  </Badge.Ribbon>
                </List.Item>
              )}
            />
          </Row>
        </div>
      </div>
      <BackTop style={{ textAlign: "right" }} />
    </Spin>
  );
};

export default Home;
