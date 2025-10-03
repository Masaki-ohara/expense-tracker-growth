import { useState } from "react";

export default function AddTransactionForm({ onAdd }) {
  const [type, setType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const categories = ["食費", "交通費", "趣味", "光熱費", "収入", "その他"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category) return;
    onAdd(Number(amount), type, category); // ← Number() で型を数値に
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="expense">支出</option>
        <option value="income">収入</option>
      </select>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="金額"
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">カテゴリー選択</option>
        {categories.map((c, i) => (
          <option key={i} value={c}>{c}</option>
        ))}
      </select>

      <button type="submit">追加</button>
    </form>
  );
}
