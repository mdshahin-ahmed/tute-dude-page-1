import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container">
      <div className="historyWrap friendReferredHistory">
        <span>UI/UX</span>
        <span>{`>`}</span>
        <span className="historyLink">
          <Link to="/referAndEarn">{`Refer & Earn`}</Link>
        </span>
        <span>{`>`}</span>
        <span className="historyLink">
          <Link to="/friendRefferd">{`Friends Referred`}</Link>
        </span>
      </div>
      <div className="goBack d-block d-md-none">
        <Link to="/referAndEarn">
          <i className="fa-solid fa-arrow-left"></i>
          <span>go back</span>
        </Link>
      </div>
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
