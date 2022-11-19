import React from "react";
import { Link } from "react-router-dom";
import HowWork from "./HowWork/HowWork";
import "./ReferAndEarn.css";
import Referral from "./Referral/Referral";

const ReferAndEarn = () => {
  return (
    <div>
      <div className="historyWrap container">
        <span>UI/UX</span>
        <span>{`>`}</span>
        <span className="historyLink">
          <Link to="/referAndEarn">{`Refer & Earn`}</Link>
        </span>
      </div>
      <Referral></Referral>
      <HowWork></HowWork>
      <div className="container">
        <Link className="friendEnrolled" to="/friendRefferd">
          <h5>Friends Who Enrolled</h5>
        </Link>
      </div>
    </div>
  );
};

export default ReferAndEarn;
