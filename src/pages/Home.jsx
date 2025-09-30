import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/main"); // ボタンで家計簿画面に遷移
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "3rem", color: "#4CAF50", marginBottom: "30px" }}>
        🌱 My Expense Tracker 🌱
      </h1>
      <button
        style={{ fontSize: "1.2rem", padding: "10px 20px", cursor: "pointer" }}
        onClick={handleStart}
      >
        スタート
      </button>
    </div>
  );
}
