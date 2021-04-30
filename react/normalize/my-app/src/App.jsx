import React from "react";
import "./App.css";
import Table from "./components/table/Table";
import { GetArrayData } from "./data/arrayArtists";
import { GetHashData } from "./data/hashArtists";

function App() {
  let arrayData = GetArrayData();
  let hashData = GetHashData();

  return (
    <div>
      <h3>Array Data</h3>
      <Table arrayItems={arrayData} hashItems={hashData} />
    </div>
  );
}

export default App;
