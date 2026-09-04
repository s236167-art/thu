import { useState } from "react";

function App() {
  const [mssv, setMssv] = useState("");
  const [hoTen, setHoTen] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  const student = {
    mssv,
    hoTen,
    email
  };

  try {
    const response = await fetch("/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    });

    const data = await response.json();

    console.log("Kết quả từ Server:", data);

    alert("Thêm sinh viên thành công!");
  } catch (error) {
    console.error("Lỗi:", error);
    alert("Không kết nối được với Server!");
  }
};

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      
      <h2>Thêm sinh viên</h2>

      <form onSubmit={handleSubmit}>

        {/* MSSV */}
        <div>
          <label>MSSV</label>
          <br />

          <input
            type="text"
            value={mssv}
            onChange={(e) => setMssv(e.target.value)}
            placeholder="Nhập MSSV"
          />
        </div>

        <br />

        {/* Họ tên */}
        <div>
          <label>Họ tên</label>
          <br />

          <input
            type="text"
            value={hoTen}
            onChange={(e) => setHoTen(e.target.value)}
            placeholder="Nhập họ tên"
          />
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Email</label>
          <br />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập email"
          />
        </div>

        <br />

        <button type="submit">
          Thêm sinh viên
        </button>

      </form>
    </div>
  );
}

export default App;