import React from "react";
import { Layout } from "antd";
import { Col, Row, Divider } from "antd";
import { SocialIcon } from "react-social-icons";
import "./footer.css";

const { Footer } = Layout;

function _Footer() {
  return (
    <Footer style={{ backgroundColor: "#D70018", padding: 30, paddingTop: 80 }}>
      <Row className="footer-desktop">
        <Col span={3} className="footer">
          <strong style={{ color: "#FFFFFF", fontSize: 20, cursor: "pointer" }}>
            Tổng đài hỗ trợ
          </strong>
          <p
            style={{
              marginTop: 20,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Gọi mua hàng 0123456789
          </p>
          <p
            style={{
              marginTop: 20,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Gọi khiếu nại 0123456789
          </p>
          <p
            style={{
              marginTop: 20,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Gọi bảo hành 0123456789
          </p>
        </Col>
        <Col span={4} className="footer">
          <strong style={{ color: "#FFFFFF", fontSize: 20, cursor: "pointer" }}>
            Thông tin và chính sách
          </strong>
          <p
            style={{
              marginTop: 20,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Mua hàng và thanh toán Online
          </p>
          <p
            style={{
              marginTop: 20,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Mua hàng trả góp Online
          </p>
          <p
            style={{
              marginTop: 20,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Tra thông tin bảo hành
          </p>
        </Col>
        <Col span={4} className="footer">
          <strong style={{ color: "#FFFFFF", fontSize: 20, cursor: "pointer" }}>
            Hướng dẫn
          </strong>
          <p
            style={{
              marginTop: 20,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Hướng dẫn thanh toán
          </p>
          <p
            style={{
              marginTop: 20,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Hướng dẫn trả gióp
          </p>
          <p
            style={{
              marginTop: 20,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Hướng dẫn bảo hành
          </p>
          <p
            style={{
              marginTop: 20,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Tuyển dụng
          </p>
          <p
            style={{
              marginTop: 20,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Chia sẽ
          </p>
        </Col>
        <Col span={5} className="footer">
          <strong style={{ color: "#FFFFFF", fontSize: 20, cursor: "pointer" }}>
            Địa chỉ
          </strong>
          <p
            style={{
              marginTop: 20,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Địa chỉ: 371 Nguyễn Kiệm, Phường 3, Quận Gò Vấp, Thành phố Hồ Chí
            Minh
          </p>
        </Col>
      </Row>

      <div style={{ textAlign: "center" }}>
        <Divider style={{ padding: 0 }} />
        <p style={{ color: "#FFFFFF", fontSize: 13 }}>
          Copyright@ 2024 Created by team PCStore
        </p>
        <p style={{ color: "#FFFFFF", fontSize: 13 }}>
          Điện thoại: (+84) 0123456789 - (+84) 0987654321
        </p>
      </div>
    </Footer>
  );
}

export default _Footer;
