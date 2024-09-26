import { LineChart as LChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studenSubtMarks = [
        { name: "Alice", math: 78, physics: 85, chemistry: 90 },
        { name: "Bob", math: 45, physics: 50, chemistry: 55 },
        { name: "Charlie", math: 88, physics: 92, chemistry: 85 },
        { name: "David", math: 92, physics: 95, chemistry: 80 },
        { name: "Eva", math: 67, physics: 70, chemistry: 75 },
        { name: "Frank", math: 52, physics: 60, chemistry: 65 },
        { name: "Grace", math: 35, physics: 40, chemistry: 30 },
        { name: "Henry", math: 80, physics: 82, chemistry: 78 },
        { name: "Ivy", math: 90, physics: 88, chemistry: 92 },
        { name: "Jack", math: 55, physics: 65, chemistry: 60 }
    ];
    
    return (
        <div>
            <LChart width={1200} height={400} data={studenSubtMarks}>
                <Line type="monotone" dataKey="math" stroke="#8884d8" />
                <Line type="monotone" dataKey="physics" stroke="#8884d8" />
                <Line type="monotone" dataKey="chemistry" stroke="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LChart>
        </div>
    );
};

export default LineChart;