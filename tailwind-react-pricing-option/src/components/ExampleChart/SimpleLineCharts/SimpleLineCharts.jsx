import { CartesianGrid, Line, LineChart, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from "recharts";
import ScatterCharts from "../ScatterCharts/ScatterCharts";
// import { TooltipIndex } from "recharts/types/state/tooltipSlice";
// import { TooltipIndex } from "recharts/types/state/tooltipSlice";

export default function SimpleLineChart() {
    const ineChartData = [
            {
                "id": 1, "name": "Arafat", "math": 85, "physics": 78, "english": 92
            },
            {
                "id": 2, "name": "Nusrat", "math": 74, "physics": 69, "english": 80
            },
            {
                "id": 3, "name": "Sakib", "math": 90, "physics": 88, "english": 84
            },
            {
                "id": 4, "name": "Mim", "math": 67, "physics": 72, "english": 76
            },
            {
                "id": 5, "name": "Rafi", "math": 92, "physics": 81, "english": 88
            },
            {
                "id": 6, "name": "Jannat", "math": 79, "physics": 75, "english": 83
            },
            {
                "id": 7, "name": "Hasib", "math": 56, "physics": 60, "english": 71
            },
            {
                "id": 8, "name": "Farzana", "math": 88, "physics": 90, "english": 95
            },
            {
                "id": 9, "name": "Imran",  "math": 73, "physics": 68, "english": 79
            },
            {
                "id": 10, "name": "Tania", "math": 81, "physics": 77, "english": 85
            }
        ]

  return (
    <div className="text-center grid justify-center">
        <h1 className="text-5xl my-10 text-amber-50">this is line charts</h1>
        <div className="bg-cyan-100">
            <LineChart style={{width: 1000, height:400, aspectRatio: 1.618}} data={ineChartData}>
                <Line dataKey={"math"} stroke="#8F0177"></Line>
                <Line dataKey={"physics"} stroke="#DE1A58"></Line>
                <Line dataKey={"english"} stroke="#F4B342"></Line>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            </LineChart>
            <p>Simple LineChart</p>
        </div>  {/* this is simple lineCharts */}
    </div>
  )
}
