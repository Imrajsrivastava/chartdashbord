import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Piechart = () => {
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

  const revelarr = apidata.map((elm) => {
    return elm.relevance;
  });

  const topicarr = apidata.map((elm) => {
    return elm.topic;
  });

  const data = {
    labels: topicarr.splice(1, 4),
    datasets: [
      {
        label: "relevance",
        data: revelarr.splice(1, 4),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "45%", margin: "auto", marginTop: "60px" }}>
      <Doughnut data={data} />;
    </div>
  );
};
