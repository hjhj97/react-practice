import { useEffect, useState } from "react";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const timeMS = time % 100;
  const timeSec = Math.floor(time / 100);
  const timeMin = Math.floor(time / (100 * 60));

  useEffect(() => {
    let intervalId: number | null = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);
    }
    return () => {
      clearInterval(intervalId!);
    };
  }, [isRunning]);

  const handleRunning = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const timeFormatter = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div>
      <div>
        {timeFormatter(timeMin)}:{timeFormatter(timeSec)}:{timeFormatter(timeMS)}
      </div>
      <div>
        <button onClick={handleRunning}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
