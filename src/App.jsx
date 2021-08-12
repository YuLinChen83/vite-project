import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://www.dcard.tw/v2/posts?popular=true").then((data) => {
      console.log(data);
    });
  }, []);
  return <div className="w-screen h-screen bg-blue-dark">123</div>;
}

export default App;
