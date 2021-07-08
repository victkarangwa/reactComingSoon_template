import React, { useState, useEffect } from "react";
import { Input, Alert, Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  RadarChartOutlined,
  FacebookFilled,
  TwitterCircleFilled,
  LinkedinFilled,
  InstagramFilled,
  LoadingOutlined
} from "@ant-design/icons";
import app_illustration from "../assets/img/app_illustration.png";
import { subscribe } from "../redux/actions/mail";
import { triggerDynos } from "../redux/actions/core";

const { Search } = Input;

function App() {
  const {
    core: { loading, isDynosUp },
    mail: { userSubscription },
  } = useSelector(({ core, mail: { userSubscription } }) => ({
    core,
    mail: { userSubscription },
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    triggerDynos()(dispatch);
    if (userSubscription?.status !== "fail") {
      setInputValue("");
    }
  }, [userSubscription?.status]);

  // State declaration
  const [inputValue, setInputValue] = useState("");

  // Function declaration
  const onSubscribe = (value) => {
    subscribe({ email: value })(dispatch);
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 24, color: "#00bfa6" }} spin />;

  return (
    <Spin className="main-properties-cont" indicator={antIcon} tip="Putting things together..." spinning={!isDynosUp}>
      <div className="d-flex flex-column">
        <div className="page-body w-100 d-flex flex-row justify-content-between p-5">
          <div className="w-50 web-info-block">
            <div className="d-flex flex-row">
              <div className="logo-container">
                <RadarChartOutlined />
              </div>

              <h2 className="log-text pt-3">The Peak Jobs</h2>
            </div>
            <h3 className="text-lg">We are almost there</h3>
            <p className="text-sm">Stay tuned for something amazing</p>
            <div className="w-75 input-container">
              <Search
                placeholder="Your email address"
                onSearch={onSubscribe}
                enterButton="Notify me"
                size="large"
                loading={loading}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              {userSubscription?.status === "fail" && (
                <Alert
                  className="mt-2 text-sentence-case"
                  message={userSubscription?.message}
                  type="error"
                />
              )}
            </div>
          </div>
          <div className="web-illis-block w-50">
            <img
              className="w-100"
              alt="The peak Jobs illustration"
              src={app_illustration}
            />
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
    </Spin>
  );
}

export default App;
