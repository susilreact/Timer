import React, { useState } from "react";

function App() {
  setInterval(onClickUpdateTime, 1000);
  let now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function onClickUpdateTime() {
    let newTime = new Date().toLocaleTimeString();

    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={onClickUpdateTime}>Get Time</button>
    </div>
  );
}

export default App;
