import React, { useEffect, useRef } from 'react';
import { Chart, LineController, LinearScale, PointElement, CategoryScale, LineElement } from 'chart.js';

Chart.register(LineController, LinearScale, PointElement, CategoryScale, LineElement);

const Dashboard = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const chartInstance = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Sales',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: 'rgba(0, 123, 255, 0.5)',
                        borderColor: 'rgba(0, 123, 255, 1)',
                        borderWidth: 2
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
    }, []);

    return (
        <div>
            <canvas ref={chartRef} />
        </div>
    );
};

export default Dashboard;
