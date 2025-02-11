import { useState } from "react";
import React from "react";

function Counter(){
    const [count, setCount]= useState(0);
const btnstyle={ fontSize: "20px",
padding: "10px 20px",
margin: "10px",
cursor: "pointer",
backgroundColor:"595066",
    }
    return(
        <div style={{ 
            backgroundColor:"white",
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            height: "60vh" 
          }}> 
    <h2 style={
        {textAlign: "center",}}> Counter </h2>

    <h1 style={
        { display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            height: "20vh", 
        }}>{count}</h1>

    <div> 
    <button onClick={()=> setCount(count+1)} style={btnstyle}>Increment</button>
    <button onClick={() => setCount(count - 1)} style={btnstyle}>Decrement</button>
    </div>
        </div>
    )
}
export default Counter;