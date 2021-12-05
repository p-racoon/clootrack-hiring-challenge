import React, { useRef } from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { getElementAtEvent } from "react-chartjs-2";
import {
  mode as chartMode,
  focusedElement as chartFocusedElement,
  updateFocus,
} from "../chartsSlice";

function Chart(props) {
  const mode = useSelector(chartMode);
  const focusedElement = useSelector(chartFocusedElement);
  const dispatch = useDispatch();
  const chartRef = useRef(null);
  function elementClickHandler(event) {
    const { current: chart } = chartRef;
    console.log(`event`, event);
    console.log(getElementAtEvent(chart, event));
  }
  function renderChart(props, mode) {
    let Component = React.Fragment;
    let colSize = 0;
    switch (props.type) {
      case "Bar":
        Component = BarChart;
        colSize = 8;
        break;
      case "Pie":
        Component = PieChart;
        colSize = 4;
        break;
      default:
        break;
    }
    return (
      <div className={classNames(colSize ? `col-${colSize}` : "col")}>
        <div className={classNames("p-2 m-2", { card: mode === "edit" })}>
          <Component ref={chartRef} {...props} onClick={elementClickHandler} />
          {mode === "edit" && focusedElement && (
            <button type="button" class="btn btn-outline-success mt-4">
              Save
            </button>
          )}
        </div>
      </div>
    );
  }

  return renderChart(props, mode);
}

export default Chart;
