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
                    labels: ['Jan 3, 2024', 'Feb 9, 2024', 'Mar 15, 2024', 'Apr 1, 2024', 'Apr 4, 2024', 'Apr 5, 2024'],
                    datasets: [{
                        label: 'Profit',
                        data: [100, 190, -300, 500, -200, 300],
                        backgroundColor: 'rgba(94, 53, 62, 0.5)',
                        borderColor: '#dd0f0f',
                        borderWidth: 3,
                       
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
