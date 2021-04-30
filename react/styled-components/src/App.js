import React, { useState } from "react";
import "./App.css";
import { Banner, SecondBanner } from "./components/Banners";
function App() {
  return (
    <div>
      <Banner>
        <h1>first banner</h1>
      </Banner>
      <SecondBanner>
        <h1>second banner</h1>
      </SecondBanner>
    </div>
  );
}

export default App;
