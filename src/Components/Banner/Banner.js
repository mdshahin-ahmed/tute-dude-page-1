import React from "react";

const Banner = () => {
  return (
    <div>
      <div>{`UI/UX > Refer & Earn > Friends Referred`}</div>
      <div>
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
