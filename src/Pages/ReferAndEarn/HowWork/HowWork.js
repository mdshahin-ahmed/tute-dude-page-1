import React from "react";
import logo1 from "../../../images/1.png";
import logo2 from "../../../images/2.png";
import logo3 from "../../../images/3.png";
import logo4 from "../../../images/4.png";
import logo5 from "../../../images/5.png";
import "./HowWork.css";

const data = [
  {
    id: 1,
    src: logo1,
    heading: "Invite your Friends",
    text: "Share the link tutedude.com with your friends",
  },
  {
    id: 2,
    src: logo2,
    heading: "Friend purchases any course",
    text: "Using your REFERRAL CODE in the payments page",
  },
  {
    id: 3,
    src: logo3,
    heading: "You get ₹ 200 as referral money",
    text: "On total purchase the friend makes, into your wallet",
  },
  {
    id: 4,
    src: logo4,
    heading: "Your Friend gets ₹ 200 Off ",
    text: "On his overall fee on successful purchase using your referral code ",
  },
  {
    id: 5,
    src: logo5,
    heading: "Transfer money from wallet",
    text: `When the wallet balance reaches
    ₹200 or more, you can withdraw it`,
  },
];

const HowWork = () => {
  return (
    <div className="container">
      <h5 className="howWork">How does it work ?</h5>
      <div className="row howWorkWrap">
        {data.map((work) => {
          const { id, src, heading, text } = work;
          return (
            <div key={id} className="col-md-6 workWrap d-flex text-start">
              <div className="workImageWrap">
                <img src={src} alt="logo" />
              </div>
              <div className="workTextWrap">
                <h6>{heading}</h6>
                <p className="mb-0">{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowWork;
