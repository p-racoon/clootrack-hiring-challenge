import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  mode as chartMode,
  receiveChartsData,
  selectChartsData,
  updateMode,
} from "./features/charts/chartsSlice";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import "./App.css";
import { fetchChartsData } from "./features/charts/chartsAPI";
import Header from "./components/Header";
import Chart from "./features/charts/components/Chart";

function App() {
  const dispatch = useDispatch();
  const chartsData = useSelector(selectChartsData);
  const mode = useSelector(chartMode);
  function handleModeSwitch(event) {
    if (mode === "edit") {
      dispatch(updateMode("display"));
    }
    if (mode === "display") {
      dispatch(updateMode("edit"));
    }
  }
  useEffect(() => {
    fetchChartsData()
      .then((data) => {
        console.log(`fetched data`, data);
        dispatch(receiveChartsData(data));
      })
      .catch((error) => {
        console.error(`error`, error);
      });
  }, []);

  return (
    <div className="App">
      {console.log(`chartsData`, chartsData)}
      <Header />
      <main>
        <div className="container">
          <div class="row justify-content-end">
            <button
              type="button"
              onClick={handleModeSwitch}
              className={`m-4 btn btn-${
                mode === "edit" ? "warning" : "outline-info"
              }`}
            >
              Edit Mode: {mode === "edit" ? "On" : "Off"}
            </button>
          </div>
          <div class="row align-items-center">
            {chartsData.map((props) => (
              <Chart {...props} />
            ))}
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
