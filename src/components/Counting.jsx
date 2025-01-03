import React, { useState, useEffect } from "react";
import "./counting.css";
import axios from "axios";
import { color } from "@mui/system";

const Counting = ({ setIsReady }) => {
  // let baseURL = "http://localhost:1954";
  // let baseURL = "www.zphskunur.in";
  let baseURL = "https://zphs-school.vercel.app";
  const [count, setCount] = useState(3); // Lunch countdown starts at 3
  const [isCounting, setIsCounting] = useState(false); // State to track lunch countdown
  const [timer, setTimer] = useState(true); // Track if target timer has expired
  const [time, setTime] = useState([10, 30]); // Track if target timer has expired
  // let time = [11, 10]; // Track if target timer has expired

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    axios
      .get(`${baseURL}/time`)
      .then((res) => {
        setTime(res.data[0].time);
        // time = res.data[0].time;
        console.log("time get", res.data[0].time);
      })
      .catch((er) => {
        console.log("error");
      });
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const target = new Date();
      target.setDate(target.getDate() + 1);
      console.log("time", time);

      target.setHours(
        time.length > 0 ? time[0] : 10,
        time.length > 0 ? time[1] : 10,
        0,
        0
      );

      // target.setHours(22, 51, 0, 0);

      console.log("now, target", now, target);
      // If the target time has already passed today, set it for tomorrow
      if (now > target) {
        clearInterval(timer); // Clear the interval when count reaches 0
        setTimer(false);
        return 0; // Ensure count does not go below 0
        console.log("reached");
        // target.setDate(target.getDate() + 1); // Change to +1 for tomorrow
      } else {
        setTimer(true);
      }

      const difference = target - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft((pre) => {
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  // // Update `timeLeft` every second until target time is reached
  const handleLunchClick = () => {
    setIsCounting(true);
    console.log("first");
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            clearInterval(timer); // Clear the interval when count reaches 0
            setIsReady(true);
            return 0; // Ensure count does not go below 0
          }
        });
      }, 1000);
      return () => clearInterval(timer); // Cleanup interval
    }
  };

  return (
    <div className="body">
      <div className="countdown-container">
        {timer && timeLeft.seconds > 0 && (
          <div id="timer">
            {timeLeft.hours > 0 && (
              <div>
                {/* <div style={{ color: "#b388ff" }}>ZPHS KUNUR</div> */}
                <div style={{ marginBottom: "10px" }}>ZPHS KUNUR</div>
                {timeLeft.days > 0 && <span>{timeLeft.days}Days</span>}{" "}
                {timeLeft.hours}Hours
              </div>
            )}
            <div>
              {timeLeft.minutes} mins {timeLeft.seconds}s
            </div>
          </div>
        )}

        {isCounting && <div id="countdown">{count}</div>}
        {count > 2 && !timer && !isCounting && (
          <button
            id="countdownButton"
            onClick={handleLunchClick}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Lunch
          </button>
        )}
      </div>
    </div>
  );
};

export default Counting;
