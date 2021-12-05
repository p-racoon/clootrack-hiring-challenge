import React, { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import randomColor from "randomcolor";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = React.forwardRef((props, ref) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bar Chart",
      },
    },
  };
  const labels = props.elements.map((_, index) => `Bar ${index + 1}`);
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: props.elements,
        backgroundColor: randomColor({
          luminosity: "light",
          format: "rgba",
          alpha: 0.5,
        }),
      },
    ],
  };
  return (
    <Bar ref={ref} onClick={props.onClick} options={options} data={data} />
  );
});

export default BarChart;
