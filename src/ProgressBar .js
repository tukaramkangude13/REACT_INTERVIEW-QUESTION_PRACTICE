import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(50); // Initialize with 50%

  const increaseProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  const decreaseProgress = () => {
    setProgress((prev) => (prev > 0 ? prev - 10 : 0));
  };

  return (
    <div style={{ padding: "20px", width: "300px" }}>
      <div
        style={{
          height: "20px",
          width: "100%",
          backgroundColor: "#e0e0df",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#76c7c0",
            transition: "width 0.3s ease-in-out",
          }}
        ></div>
      </div>
      <p>{progress}%</p>
      <button onClick={increaseProgress}>Increase</button>
      <button onClick={decreaseProgress}>Decrease</button>
    </div>
  );
};

export default ProgressBar;
