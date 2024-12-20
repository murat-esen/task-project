import React from "react";
import PurposeForm from "./components/PurposeSelector.jsx"; // Dosya adını "PurposeForm" olarak güncelledim

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#121212",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <PurposeForm />
    </div>
  );
}

export default App;
