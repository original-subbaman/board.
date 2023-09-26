"use client";
import {
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

const data = {
  labels: labels,
  datasets: [
    {
      labels: "Users",
      data: [65, 54, 56, 78],
      backgroundColor: ["rgba(152, 216, 158, 1)"],
      borderColor: ["rgba(152, 216, 158, 1)"],
      borderWidth: 1,
      borderRadius: 5.0,
    },
    {
      data: [68, 56, 13, 45],
      backgroundColor: ["rgba(238, 132, 132, 1)"],
      borderColor: ["rgba(238, 132, 132, 1)"],
      borderWidth: 1,
      borderRadius: 5.0,
    },
  ],
};

const config: any = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "right" as const,

      labels: {
        usePointStyle: true,
        align: "top",
      },
    },
    borderRadius: 5.0,
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const BarChart = () => {
  return (
    <div className="lg:w-full h-64">
      <Bar options={config} data={data} width={"900px"} />
    </div>
  );
};

export default BarChart;
