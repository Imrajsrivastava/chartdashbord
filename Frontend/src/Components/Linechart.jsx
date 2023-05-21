import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,

  LineElement,
  Title,
  Tooltip,
  Legend
);
export const Linechart = () => {
  const [apidata, setApidata] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let data = await fetch("/getalldata");
      let jadata = await data.json();
      console.log(jadata);
      setApidata(jadata);
    } catch (error) {
      console.log(error);
    }
  };

  const likewood = apidata.map((elm) => {
    return elm.likelihood;
  });

  const countryarr = apidata.map((elm) => {
    return elm.country;
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Likelihood Vs Country",
      },
    },
  };

  const labels = countryarr.splice(1, 15);

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",

        data: likewood.splice(1, 15),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(500, 0, 0, 0.5)",
      },
      {
        label: "Dataset 2",

        data: likewood.splice(1, 15),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "red",
      },
    ],
  };
  return (
    <div style={{ width: "75%", margin: "auto", marginTop: "60px" }}>
      <Line options={options} data={data} />
    </div>
  );
};
