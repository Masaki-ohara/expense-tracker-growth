import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function CategoryChart({ expenses }) {
  // データが空なら描画しない
  if (!expenses || expenses.length === 0) return <p>グラフ表示用データがありません</p>;

  // カテゴリごとの合計を計算
  const data = Object.values(
    expenses.reduce((acc, exp) => {
      const cat = exp.category || "未分類";
      if (!acc[cat]) acc[cat] = { name: cat, value: 0 };
      acc[cat].value += Number(exp.amount); // 数値変換
      return acc;
    }, {})
  );

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6666", "#AA00FF"];

  return (
    <div style={{ width: 400, height: 400, margin: "0 auto" }}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
