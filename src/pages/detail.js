import React from "react";
import "./Detail.css";
import { Button, DatePicker, version, message } from "antd";
import "antd/dist/antd.css";
export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: "" };
  }

  handleChange = (value) => {
    message.info(
      `您选择的日期是: ${value ? value.format("YYYY年MM月DD日") : "未选择"}`
    );
    this.setState({ date: value });
  };

  render() {
    return (
      <div className="Detail">
        <a>去detail</a>
        <div className="box">
          <h1>antd version: {version}</h1>
          <DatePicker onChange={this.handleChange.bind(this)} />
          <Button type="primary" style={{ marginLeft: 8 }}>
            Primary Button
          </Button>
        </div>
        <div className="h2">
          <p>this is a paragragh.</p>
        </div>
      </div>
    );
  }
}
