import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container">
      <div className="history">{`UI/UX > Refer & Earn > Friends Referred`}</div>
      <div className="bannerWrap d-flex justify-content-between">
        <div className="referCode">
          <h6>Youre Referral Code</h6>
          <h5>EDCH54</h5>
        </div>
        <div className="balance">
          <h6>Wallet Balance</h6>
          <h5>₹ 500</h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;
