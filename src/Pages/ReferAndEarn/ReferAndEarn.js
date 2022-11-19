import React from "react";
import { Link } from "react-router-dom";
import HowWork from "./HowWork/HowWork";
import "./ReferAndEarn.css";

const ReferAndEarn = () => {
  return (
    <div>
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
