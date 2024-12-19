import React, { useState, useEffect } from "react";
import "./counting.css";

const Counting = ({ setIsReady }) => {
  const [count, setCount] = useState(3); // Lunch countdown starts at 3
  const [isCounting, setIsCounting] = useState(false); // State to track lunch countdown
  const [timerExpired, setTimerExpired] = useState(false); // Track if target timer has expired
  const [timeLeft, setTimeLeft] = useState({}); // Time left for the target countdown

  // Function to calculate time left until the target time
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date();
    target.setHours(21, 43, 0, 0); // Target time: 9:12 PM

    if (now > target) {
      // target.setDate(target.getDate() + 1); // Set target for the next day if passed
    }

    const difference = target - now;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  // // Update `timeLeft` every second until target time is reached
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const now = new Date();
  //     const target = new Date();
  //     target.setHours(21, 26, 0, 0);

  //     if (now >= target) {
  //       setIsCounting(true);
  //       clearInterval(timer);
  //       setTimerExpired(true); // Mark the target timer as expired
  //     } else {
  //       setTimeLeft(calculateTimeLeft());
  //     }
  //   }, 1000);

  //   return () => clearInterval(timer); // Cleanup interval
  // }, []);

  // // Handle the 3-second lunch countdown
  // useEffect(() => {
  //   if (isCounting && count > 0) {
  //     const timer = setInterval(() => setCount((prev) => prev - 1), 1000);
  //     return () => clearInterval(timer); // Cleanup interval
  //   }

  //   if (count === 0) {
  //     setIsCounting(false); // Stop counting
  //     setIsReady(true); // Trigger the parent callback
  //   }
  // }, [count, isCounting, setIsReady]);

  const handleLunchClick = () => {
    setIsCounting(true);
    console.log("first");
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            setIsReady(true);
            clearInterval(timer); // Clear the interval when count reaches 0
            return 0; // Ensure count does not go below 0
          }
        });
      }, 1500);
      return () => clearInterval(timer); // Cleanup interval
    }

    // setIsCounting(true); // Start lunch countdown
  };

  return (
    <div className="body">
      <div className="countdown-container">
        {/* {timer > 3 && (
          <div id="countdown">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </div>
        )} */}
        {isCounting && <div id="countdown">{count}</div>}
        {count > 2 && !isCounting && (
          <button onClick={handleLunchClick}>Lunch</button>
        )}
      </div>
    </div>
  );
};

export default Counting;
