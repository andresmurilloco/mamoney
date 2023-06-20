"use client"
import { useState } from "react";

const Counter = () => {
    const targetMonth = 11; //0- Jan, 11- Dec
    const targetDay = 18;
    const targetYear = 2023;
    const targetHour = 17;
    const targetMinute = 0;
    const targetSeconds = 0;

    // Example usage: countdown to December 31, 2023, 23:59:59
    const targetDate = new Date(targetYear, targetMonth, targetDay, targetHour, targetMinute, targetSeconds);

    const [month, setMonth] = useState(0);
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [seconds, setSeconds] = useState(0)

    function countdownTo(targetDate: Date):void {
        const countdownInterval = setInterval(() => {
          const currentDate = new Date();
          const timeDifference = targetDate.getTime() - currentDate.getTime();
      
          // Check if the target date has passed
          if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            console.log("Countdown complete!");
            return;
          }
      
          // Calculate the remaining days, hours, minutes, and seconds
          const totalSeconds = Math.floor(timeDifference / 1000);
          const months = Math.floor(totalSeconds / (30 * 24 * 60 * 60));
          const days = Math.floor((totalSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
          const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
          const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
          const seconds = totalSeconds % 60;
      
          // Display the countdown
          setMonth(months);
          setDay(days);
          setHour(hours);
          setMinute(minutes);
          setSeconds(seconds);
        }, 1000); // Update the countdown every second
      }
      
      countdownTo(targetDate)
      
  return (
    <>
      <div className="counter-card">
        <h1>CARTAGENA 🏖️</h1>
        <div className="counter-container">
          <div>
            <span>{String(month).padStart(2,'0')}</span>
            <h2>Months</h2>
          </div>
          <div>
            <span>{String(day).padStart(2,'0')}</span>
            <h2>Days</h2>
          </div>
          <div>
            <span>{String(hour).padStart(2,'0')}</span>
            <h2>Hours</h2>
          </div>
          <div>
            <span>{String(minute).padStart(2,'0')}</span>
            <h2>Minutes</h2>
          </div>
          <div>
            <span>{String(seconds).padStart(2,'0')}</span>
            <h2>Seconds</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counter