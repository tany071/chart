import logo from './logo.svg';
import './App.css';
// import charted from "./components/charted"
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { BarChart } from './components/charted';
import Profile from './components/profile';


Chart.register(CategoryScale);



export default function App() {
  const [chartData, setChartData] = useState({
    labels: ['Red', 'Orange', 'Blue', 'Pink', 'Yellow'],
    datasets: [
      {
        label: "Users Gained ",
        data: [55, 23, 96, 32, 56],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
        // barThickness: 20,
      }
    ]
  });


  return (
    <div className="App">
      <p className=' text-4xl p-5 font-semibold'>Dashboard</p>
      <div className=" flex justify-center items-center m-5 bg-green-100  rounded-xl border-2 border-stone-500">
        Hello
      </div>
      <div>
        <Profile />
      </div>
      <div className=" flex justify-center items-center m-5 bg-green-100  rounded-xl border-2 border-stone-500">
        <div className=' w-1/2 m-5'>Some Random Text And Information about the graph can be displayed</div>
        <div className=' w-1/2 p-2'>

          <BarChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
}

