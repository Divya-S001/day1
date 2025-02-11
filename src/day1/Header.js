import React from 'react'

export default function Header(props) {
    const hStyle = {
        backgroundColor: "#595066",
        color: "white",
        padding: "10px",
        fontWeight: "bold",
        width: "100%",
        position: "fixed",
        top: "0",
        left: "0",
      };
  return (
   <div style={hStyle}><p>{props.title}</p></div>
  );
}
