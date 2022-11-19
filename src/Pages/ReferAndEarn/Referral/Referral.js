import React from "react";
import "./Referral.css";

const Referral = () => {
  return (
    <div className="container referralWrap">
      <div className="row ">
        <div className="col-md-6 ">
          <div className="row referralBalanceWrap">
            <div className="col-6 col-md-4 referralTextWrap">
              <h6 className="referralHeading">Referral Earning</h6>
              <p className="referralPrice">₹ 2,500</p>
            </div>
            <div className="col-6 col-md-4 referralTextWrap">
              <h6 className="referralHeading">Total Referrals</h6>
              <p className="referralPrice">7</p>
            </div>
            <div className="col-6 col-md-4 ">
              <h6 className="referralHeading">Wallet Balance</h6>
              <p className="referralPrice">₹ 500</p>
            </div>
            <div className="col-6 referralTextWrap referralButton  col-md-4 mx-auto ">
              <button>Withdraw Balance</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 referralCodeWrap">
          <h5>Your Referral Code </h5>
          <div className="referralCode">
            <span>EDCH54</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
