import React, { useState } from "react";

const Circle = () => {
  // Single state
  const [circle, setCircle] = useState(false);

  // Toggle state
  const toggleCircle = () => setCircle(!circle);

  // Styles dynamically based on state
  const styles = {
    backgroundColor: circle ? "yellow" : "black",
    color: circle ? "black" : "white",
    padding: "10px",
    borderRadius: "10px",
    cursor: "pointer",
  };

  return (
    <div className="flex flex-col gap-6 items-center p-10">
      {/* 1️⃣ Circle Background */}
      <div
        className="rounded-full w-[150px] h-[150px] flex justify-center items-center"
        style={{
          backgroundColor: circle ? "yellow" : "black", // ternary 1
        }}
      >
        {/* 2️⃣ Text inside circle */}
        <p style={{ color: circle ? "black" : "white", fontSize: "24px" }}> {/* ternary 2 */}
          {circle ? "ON" : "OFF"} {/* ternary 3 */}
        </p>
      </div>

      {/* 3️⃣ Button Text */}
      <button onClick={toggleCircle} style={styles}>
        {circle ? "Turn OFF" : "Turn ON"} {/* ternary 4 */}
      </button>

      {/* 4️⃣ Extra Message based on state */}
      <p>
        Status: {circle ? "Circle is active" : "Circle is inactive"} {/* ternary 5 */}
      </p>
    </div>
  );
};

export default Circle;
