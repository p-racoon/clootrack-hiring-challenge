import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import randomColor from "randomcolor";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = React.forwardRef((props, ref)=> {
  const data = {
    labels: props.elements.map((_, index) => `Pie ${index}`),
    datasets: [
      {
        data: props.elements,
        backgroundColor: randomColor({
          count: 10,
          alpha: 0.4,
          format: "rgba",
          luminosity: "light",
        }),
        borderWidth: 1,
      },
    ],
  };
  return <Pie ref={ref} onClick={props.onClick} data={data} />;
});

export default PieChart;
