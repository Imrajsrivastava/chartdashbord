import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,

  Title,
  Tooltip,
  Legend
);
export const Chartvis = () => {
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

  const addArr = apidata.map((elm) => {
    return elm.added;
  });
  console.log(addArr.splice(1, 11));

  const intArr = apidata.map((elm) => {
    return elm.intensity;
  });
  console.log(intArr.splice(1, 11));

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Intensity Vs Added",
      },
    },
  };

  const labels = addArr.splice(1, 10);

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",

        data: intArr.splice(1, 11),

        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(500, 0, 0, 0.5)",
      },
      {
        label: "Dataset 2",

        data: intArr.splice(1, 11),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "red",
      },
    ],
  };
  return (
    <div style={{ width: "80%", margin: "auto", marginTop:"30px"}}>
      <Bar options={options} data={data} />
    </div>
  );
};
