import React from "react";
import { Input } from "antd";
import {
  RadarChartOutlined,
  FacebookFilled,
  TwitterCircleFilled,
  LinkedinFilled,
  InstagramFilled,
} from "@ant-design/icons";
import app_illustration from "./assets/img/app_illustration.png";

const { Search } = Input;

function App() {
  // State declaration


  // Function declaration
  const onSearch = (value) => console.log(value);

  return (
    <div className="d-flex flex-column">
      <div className="page-body w-100 d-flex flex-row justify-content-between p-5">
        <div className="w-50 ">
          <div className="d-flex flex-row">
            <div className="logo-container">
              <RadarChartOutlined />
            </div>

            <h2 className="log-text pt-3">The Peak Jobs</h2>
          </div>
          <h3 className="text-lg">We are almost there</h3>
          <p className="text-sm">Stay tuned for something amazing</p>
          <div className="w-75">
            <Search
              placeholder="Your email address"
              onSearch={onSearch}
              enterButton="Notify me"
              size="large"
            />
          </div>
        </div>
        <div className="w-50">
          <img className="w-100" alt="The peak Jobs illustration" src={app_illustration} />
        </div>
      </div>
      <div className="footer">
        <div className="social-media-container d-flex flex-row m-auto justify-content-between">
          <FacebookFilled />
          <TwitterCircleFilled />
          <InstagramFilled />
          <LinkedinFilled />
        </div>
      </div>
    </div>
  );
}

export default App;
