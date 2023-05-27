import React, { useState, useEffect } from "react";

export function NetworkChecker({ children }) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    console.log(children);

    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);

    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, [isOnline]);

  return isOnline ? (
    children
  ) : (
    <div
      style={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
      }}
    >
      <div>
        <h3>Welcome to Heart Rate monitor</h3>
        <div className="heartContainer">
          <div className="heart"></div>
        </div>
        <h1>You got no internet</h1>
        <h1>Go pay your bills to lower your heart rate</h1>
      </div>
    </div>
  );
}
