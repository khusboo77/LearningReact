import { useState, useEffect, useRef, type JSX } from "react";
import "./CounterTimer.css";

function CounterTimer(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("my-app-theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("my-app-theme", darkMode ? "dark" : "light");
  }, [darkMode]); // ✅ Fixed small typo: setItem not setitem

  const increment = (): void => setCount((prev) => prev + 1);
  const decrement = (): void => setCount((prev) => prev - 1);
  const reset = (): void => setCount(0);
  const toggleTheme = (): void => setDarkMode((prev) => !prev);
  const toggleTimer = (): void => setIsRunning((prev) => !prev);

  return (
    <div
      className={darkMode ? "container dark-theme" : "container light-theme"}
    >
      <h1>Counter & Timer Project</h1>

      <div className="box">
        <h2>{count}</h2>
        <button onClick={increment}>+ Increment</button>
        <button onClick={decrement}> - Decrement</button>
        <button onClick={reset}> Reset</button>
      </div>

      <div className="box">
        <button onClick={toggleTimer}>
          {isRunning ? "Pause Timer" : "Start Timer"}
        </button>
      </div>

      <div className="box">
        <button onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default CounterTimer;
