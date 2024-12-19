import React, { useState, useEffect } from "react";
import "./counting.css";

const Counting = (props) => {
  const [count, setCount] = useState(3); // Countdown starts at 3
  const [isCounting, setIsCounting] = useState(false); // State to track if counting is active

  const handleLunchClick = () => {
    setIsCounting(true); // Start the countdown
    setCount(3); // Reset count to 3
  };

  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date();
    target.setHours(16, 47, 0, 0); // Set target time to 5 PM

    // If the target time has already passed today, set it for tomorrow
    if (now > target) {
      // target.setDate(target.getDate() + 1); // Change to +1 for tomorrow
    }

    const difference = target - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (isCounting && count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearInterval(timer); // Cleanup the interval on component unmount or when count changes
    } else if (count === 0) {
      setIsCounting(false); // Stop counting when it reaches 0
      props.setIsReady(true);
      // You can add any action here when countdown finishes, e.g., alert("Go!");
    }
  }, [count, isCounting]);

  return (
    <div className="body">
      <div className="countdown-container">
        {!isCounting && <button onClick={handleLunchClick}>Lunch</button>}
        {isCounting && <div id="countdown">{count}</div>}
        {timeLeft.days > 0 &&
          timeLeft.hours > 0 &&
          timeLeft.minutes > 0 &&
          timeLeft.seconds > 0 && (
            <div id="countdown">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s
            </div>
          )}
      </div>
    </div>
  );
};

export default Counting;
