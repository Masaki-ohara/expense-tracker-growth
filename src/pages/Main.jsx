import { useState } from "react";
import AddTransactionForm from "./AddTransactionForm";
import Plant from "./Plant";
import CategoryChart from "./CategoryChart";

export default function Main() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const getPlantLevel = (balance) => {
    if (balance <= 100) return 0;
    else if (balance <= 500) return 1;
    else if (balance <= 2000) return 2;
    else return 3;
  };

  const handleAddTransaction = (amount, type, category) => {
    const newBalance = type === "income" ? balance + amount : balance - amount;
    setBalance(newBalance);

    setTransactions([...transactions, { type, amount, category }]);
  };

  const expenseData = transactions.filter((t) => t.type === "expense");

  return (
<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",       // 横中央
    justifyContent: "flex-start", 
    minHeight: "100vh",
    textAlign: "center",
    padding: "400px"
    // backgroundColor: "#f0f8ff",
  }}
>
    <div style={{ width: "100%", maxWidth: "1000px" }}>
        <h2 style={{ marginBottom: "20px" }}>残高: {balance} 円</h2>

        <AddTransactionForm onAdd={handleAddTransaction} />

        <h3 style={{ marginTop: "30px" }}>履歴</h3>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 auto",
            width: "100%",          // ul を親に合わせる
            textAlign: "left",      // 履歴は左揃え
          }}
        >
          {transactions.map((t, i) => (
            <li key={i}>
              {t.type === "income" ? "収入" : "支出"} ({t.category}): {t.amount} 円
            </li>
          ))}
        </ul>

        <h3 style={{ marginTop: "30px" }}>支出カテゴリの円グラフ</h3>
        {expenseData.length > 0 ? (
          <CategoryChart expenses={expenseData} />
        ) : (
          <p>支出を追加するとグラフに反映されます</p>
        )}

        <h3 style={{ marginTop: "100px" }}>植物の成長</h3>
        <Plant level={getPlantLevel(balance)} />
      </div>
    </div>
  );
}
