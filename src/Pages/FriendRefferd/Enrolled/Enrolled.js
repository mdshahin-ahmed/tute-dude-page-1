import React from "react";
import "./Enrolled.css";

const datas = [
  {
    id: 1,
    name: "Dhiraj Saxsena",
    date: "14 Sep, 2022",
    course: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
    courseEnrolled: 6,
    amount: 185,
  },
  {
    id: 2,
    name: "Subhash Mishra",
    date: "15 Sep, 2022",
    course: [
      "UI/UX",
      "Photoshop",
      "Illustrator",
      "Python",
      "MERN",
      "Java",
      "C++",
      "React",
      "Java Script",
      "Node.js",
      "MongoDB",
    ],
    courseEnrolled: 23,
    amount: 485,
  },
  {
    id: 3,
    name: "Prafull Kumar",
    date: "16 Sep, 2022",
    course: [
      "UI/UX",
      "Photoshop",
      "Illustrator",
      "Python",
      "MERN",
      "Java",
      "C++",
      "React",
      "Java Script",
      "Node.js",
      "MongoDB",
    ],
    courseEnrolled: 23,
    amount: 485,
  },
];

const Enrolled = () => {
  return (
    <div className="container enrolledWrap text-start">
      <h5 className="fEnrolled">
        Friends who enrolled <span>({datas.length})</span>
      </h5>
      <div className="row">
        {datas.map((data) => {
          // console.log(data);
          const { courseEnrolled, date, id, name, course, amount } = data;
          return (
            <div key={id} className="col-md-4 ">
              <dir className="coursedWrap">
                <div className="d-flex justify-content-between">
                  <h5>{name}</h5>
                  <span className="date">{date}</span>
                </div>
                <h6 className="mb-3">{`Courses Enrolled (${courseEnrolled})`}</h6>

                <div className="topic">
                  {course.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
                <div className="price">
                  <p>
                    Referral Amount <span>₹{amount}</span>
                  </p>
                </div>
              </dir>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Enrolled;
