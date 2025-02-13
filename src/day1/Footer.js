import React from 'react'

export default function Footer(props) {

  return (
    <div style={{  backgroundColor: "#595066",
      color: "red",
      textAlign: "center",
      padding: "10px",
      fontWeight: "bold",
      width: "100%",
      position: "fixed",
      bottom: "0",
      left: "0",}}>
      <p style={{ color: "white", fontSize: "16px" }}>{props.title}</p>
      </div>
  );
}