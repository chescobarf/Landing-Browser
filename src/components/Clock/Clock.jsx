import React from "react";
import { useEffect, useState } from "react";

function Clock() {
  useEffect(() => {
    const interval = setInterval(() => {
      let now = new Date();

      const formatTime = () => {
        let format = {
          seconds: 0,
          minutes: 0,
          hours: 0,
        };
        if (now.getSeconds() < 10) {
          format.seconds = "0" + now.getSeconds();
        } else {
          format.seconds = now.getSeconds();
        }
        if (now.getMinutes() < 10) {
          format.minutes = "0" + now.getMinutes();
        } else {
          format.minutes = now.getMinutes();
        }
        if (now.getHours() < 10) {
          format.hours = "0" + now.getHours();
        } else {
          format.hours = now.getHours();
        }

        return format;
      };

      setHora(
        formatTime().hours +
          ":" +
          formatTime().minutes +
          ":" +
          formatTime().seconds
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [hora, setHora] = useState();

  if (hora) {
    return (
      <div>
        <p className="text-white text-6xl mb-7">{hora}</p>
      </div>
    );
  } else {
    return <div className="text-white text-xl mb-7">Loading...</div>;
  }
}

export default Clock;
