import React from "react";
import "./Main.less";
import DemoNav from "../pages/DemoNav";
import { Row, Col } from 'antd';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-content">
          <Row type="flex" justify="center">
            <Col span={5}>
              <DemoNav />
            </Col>
            <Col span={10}>{this.props.children}</Col>
          </Row>
        </div>
      </div>
    );
  }
}
