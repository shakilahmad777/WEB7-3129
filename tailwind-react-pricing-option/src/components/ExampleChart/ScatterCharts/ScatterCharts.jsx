import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, XAxis, YAxis } from "recharts";

export default function ScatterCharts() {
    const scatterChartdata = [
            { x: 100, y: 200 },
            { x: 120, y: 100 },
            { x: 170, y: 300 },
            { x: 140, y: 250 },
            { x: 150, y: 400 },
            { x: 110, y: 280 },
        ];
  return (
    <div style={{width: '100%', height: 400, border: '2px solid red'}}>
        <h2>Simple Scatter Charts</h2>
        <ScatterChart>
            <XAxis dataKey="x" name="X Value"></XAxis>
            <YAxis dataKey="y" name="Y Value"></YAxis>
            <Scatter name="Date Point" data={scatterChartdata} fill="DE1A58"></Scatter>
        </ScatterChart>
    </div>
  )
}
