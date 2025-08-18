import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Seg", max: 30, min: 20 },
  { day: "Ter", max: 28, min: 18 },
  { day: "Qua", max: 26, min: 17 },
  { day: "Qui", max: 25, min: 16 },
  { day: "Sex", max: 27, min: 19 },
  { day: "Sáb", max: 29, min: 21 },
  { day: "Dom", max: 31, min: 22 },
];

export default function TempChart() {
  return (
    <div className="mx-auto max-w-6xl px-3 ">
      <div className="bg-white rounded-lg shadow p-4 ">
        <h2 className="text-lg font-bold mb-2">Variação de Temperatura</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="max"
              stroke="#f87171"
              name="Máxima"
            />
            <Line
              type="monotone"
              dataKey="min"
              stroke="#60a5fa"
              name="Mínima"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
