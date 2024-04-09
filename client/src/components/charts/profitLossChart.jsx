import { Line } from "react-chartjs-2";
export default function ProfitLossChart({chartData}) {
  // Check if chartData and chartData.data exist before rendering Line component
  const isChartDataAvailable = chartData && chartData.data;
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Profit by time</h2>
      {isChartDataAvailable && <Line data={chartData.data}
        options={{
            
          plugins: {
            title: {
              display: true,
              text: "Win / Loss over time"
            },
            legend: {
              display: false
            }
          }
        }} />}
    </div>
  );
};