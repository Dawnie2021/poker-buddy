import React, { useEffect, useRef, useState } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from 'chart.js';
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

    useEffect(() => {
        if (chartRef && chartRef.current) {
            if (!loading && !error && sessions.length > 0) {

                // sort the session by date
                let sortedSessions = [...sessions].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

                // format the date and results
                let datesAndResults = sortedSessions.map((session) => {
                  const date = new Date(session.startDate);
                  const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
                  return { date: formattedDate, results: session.results };
                });
                
                // separate the dates and results to be used in graph
                let dates = datesAndResults.map(item => item.date);
                let results = datesAndResults.map(item => item.results);

                // build the chart
                const chartInstance = new Chart(chartRef.current, {
                    type: 'line',
                    data: {
                        labels: dates,
                        datasets: [{
                            label: 'Profit',
                            data: results,
                            backgroundColor: 'rgba(39, 174, 227, 0.5)',
                            borderColor: 'sky-200',
                            borderWidth: 2,
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }
        }}, 
        // run the effect whenever the loading, error, or sessions change
        [loading, error, sessions]);

    return (
        <div>
            <canvas ref={chartRef} />
        </div>
    );
};

export default Dashboard;
