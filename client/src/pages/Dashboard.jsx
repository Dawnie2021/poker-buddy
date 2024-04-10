import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useQuery } from "@apollo/client";
import { QUERY_SESSIONS } from "../utils/queries";
import SessionChart from "../components/charts/sessionChart.jsx";
import ProfitLossChart from "../components/charts/profitLossChart.jsx";

Chart.register(CategoryScale);

const Dashboard = () => {
  // function to get data form the query
  const { data, loading, error } = useQuery(QUERY_SESSIONS);

  // variable to store the data
  const sessions = data?.sessions || [];

  const updateStats = (sessions) => {
    let sortedSessions = [...sessions].sort(
      (a, b) => new Date(a.startDate) - new Date(b.startDate)
    );
    let datesAndResults = sortedSessions.map((session) => {
      const date = new Date(session.startDate);
      const formattedDate = `${date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })}`;
      return { date: formattedDate, results: session.results };
    });

    let dates = datesAndResults.map((item) => item.date);
    let results = datesAndResults.map((item) => item.results);
    let cumulativeResults = results.reduce((acc, curr, index) => {
      if (index === 0) {
        acc.push(curr);
      } else {
        acc.push(acc[index - 1] + curr);
      }
      return acc;
    }, []);

    setSessionChartData({
      data: {
        labels: dates,
        datasets: [
          {
            data: results,
            backgroundColor: results.map((datapoint) =>
              datapoint >= 0 ? "#10B981" : "#EF4444"
            ),
            borderColor: results.map((datapoint) =>
              datapoint >= 0 ? "#059669" : "#DC2626"
            ),
            borderWidth: 3,
            borderRadius: 10,
          },
        ],
      },
    });
    setProfitLossChartData({
      data: { labels: dates, datasets: [{ data: cumulativeResults }] },
    });
  };

  const [sessionChartData, setSessionChartData] = useState({});
  const [profitLossChartData, setProfitLossChartData] = useState({});

  useEffect(() => {
    if (!loading && !error && sessions.length > 0) {
      updateStats(sessions);
    }
    // run the effect whenever the loading, error, or sessions change
  }, [loading, error, sessions]);

  return (
    <div className="m-4">
      <div className="flex text-center p-5 gap-5 bg-gray-100 rounded-md shadow-lg m-4">
        <div className="flex-1 p-5 rounded-md shadow-lg bg-gray-50">
          <SessionChart
            chartData={sessionChartData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
        <div className="flex-1 p-5 rounded-md shadow-md bg-gray-50">
          <ProfitLossChart
            chartData={profitLossChartData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
