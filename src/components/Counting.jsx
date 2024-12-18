import React from "react";
import "./counting.css";
const Counting = () => {
  let countdownElement = document.getElementById("countdown");
  let readyMessage = document.getElementById("readyMessage");
  let count = 10;

  // Countdown Logic
  let timer = setInterval(() => {
    count--;
    countdownElement.textContent = count;

    if (count === 0) {
      clearInterval(timer);
      countdownElement.style.display = "none";
      readyMessage.style.display = "block";
    }
  }, 1000);
  return (
    <div class="body">
      <div class="countdown-container">
        <h1>School Countdown</h1>
        <div id="countdown">10</div>
        <div class="ready-message" id="readyMessage">
          Ready to Enter the School!
        </div>
      </div>
    </div>
  );
};

export default Counting;
