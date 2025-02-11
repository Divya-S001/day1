import React from 'react'

export default function Footer(props) {
    const ftr={  backgroundColor: "#595066",
        color: "white",
        textAlign: "center",
        padding: "10px",
        fontWeight: "bold",
        width: "100%",
        position: "fixed", // Stick to bottom
        bottom: "0",
        left: "0",}
  return (
    <div style={ftr}> <p>{props.title}</p></div>
  );
}
