import React, { useState, useEffect } from "react";
import "./counting.css";

const Counting = (props) => {
  const [count, setCount] = useState(3); // Countdown starts at 10
  // const [isReady, setIsReady] = useState(false); // Determines if the countdown is complete

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearInterval(timer); // Cleanup the interval on component unmount or when count changes
    } else {
      // console.log("props", props);
      setTimeout(() => {
        props.setIsReady(true);
      }, 2000);
    }
  }, [count]);

  return (
    <div className="body">
      <div className="countdown-container">
        {/* <h1>School Countdown</h1> */}
        {count == 0 ? (
          <div
            id="countdown2"
            // className="entering scaleUp"
            // style={{ fontSize: "30px", color: "gold" }}
          >
            Entering...!
          </div>
        ) : (
          <div id="countdown">{count}</div>
        )}
      </div>
    </div>
  );
};

export default Counting;
