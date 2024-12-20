import React, { useState } from "react";

function PurposeForm() {
  const [formData, setFormData] = useState({
    purpose: "agent",
    label: "",
    key: "",
    status: "active",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    
  };

  return (
    <form
      style={{
        border: "1px solid #333",
        backgroundColor: "#1e1e1e",
        borderRadius: "10px",
        padding: "20px",
        width: "350px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
      }}
      onSubmit={handleSubmit}
    >
      {/* Purpose */}
      <div style={{ marginBottom: "20px" }}>
        <label
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#fff",
            display: "block",
            marginBottom: "8px",
          }}
        >
          Purpose
        </label>
        <div style={{ display: "flex",fontSize: "17px",fontWeight: "bold", gap: "10px", color: "#fff" }}>
          <label>
            <input
              type="radio"
              name="purpose"
              value="client"
              checked={formData.purpose === "client"}
              onChange={handleChange}
            />
            Client
          </label>
          <label>
            <input
              type="radio"
              name="purpose"
              value="group"
              checked={formData.purpose === "group"}
              onChange={handleChange}
            />
            Group
          </label>
          <label>
            <input
              type="radio"
              name="purpose"
              value="agent"
              checked={formData.purpose === "agent"}
              onChange={handleChange}
            />
            Agent
          </label>
        </div>
      </div>

      {/* Label */}
      <div style={{ marginBottom: "20px" }}>
        <label
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#fff",
            display: "block",
            marginBottom: "8px",
          }}
        >
          Label
        </label>
        <input
          type="text"
          name="label"
          value={formData.label}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #444",
            borderRadius: "5px",
            backgroundColor: "#2a2a2a",
            color: "#fff",
          }}
        />
        <small style={{ color: "#aaa", display: "block", marginTop: "5px" }}>
          Please write label to here
        </small>
      </div>

      {/* Key */}
      <div style={{ marginBottom: "20px" }}>
        <label
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#fff",
            display: "block",
            marginBottom: "8px",
          }}
        >
          Key
        </label>
        <input
          type="text"
          name="key"
          value={formData.key}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #444",
            borderRadius: "5px",
            backgroundColor: "#2a2a2a",
            color: "#fff",
          }}
        />
        <small style={{ color: "#aaa", display: "block", marginTop: "5px" }}>
          Please write key to here
        </small>
      </div>

      {/* Status */}
      <div style={{ marginBottom: "20px" }}>
        <label
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#fff",
            display: "block",
            marginBottom: "8px",
          }}
        >
          Status
        </label>
        <div style={{ display: "flex",fontSize: "18px", gap: "10px", color: "#fff" }}>
          <label>
            <input
              type="radio"
              name="status"
              value="active"
              checked={formData.status === "active"}
              onChange={handleChange}
            />
            Active
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="passive"
              checked={formData.status === "passive"}
              onChange={handleChange}
            />
            Passive
          </label>
        </div>
      </div>

      {/* Save Button */}
      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#28a745",
          color: "#fff",
          fontWeight: "bold",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        Save
        <span style={{ fontSize: "16px" }}>✅</span>
      </button>
    </form>
  );
}

export default PurposeForm;
