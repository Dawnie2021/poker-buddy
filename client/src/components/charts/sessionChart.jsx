import { Bar } from "react-chartjs-2";
export default function SessionChart({chartData}) {
  // Check if chartData and chartData.data exist before rendering Bar component
  const isChartDataAvailable = chartData && chartData.data;
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Profit by Session</h2>
      {isChartDataAvailable && <Bar data={chartData.data} 
        options={{
          plugins: {
            title: {
              display: true,
              text: "Win / Loss per Session"
            },
            legend: {
              display: false
            }
          }
        }} />}
    </div>
  );
};