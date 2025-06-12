import { useState } from "react"

function App() {
let [color, setColor] = useState("#242424")
  return (
    < >
    <body style={{backgroundColor: color}}>
    <h1>Background Color Changer </h1>
    <h2> Pick any color given below</h2>
<div id="container">
<button  onClick={() =>setColor("red")} style={{backgroundColor:"red"}}>Red</button>
<button  onClick={() =>setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
<button  onClick={() =>setColor("green")} style={{backgroundColor:"green"}}>Green</button>
<button  onClick={() =>setColor("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
<button  onClick={() =>setColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>
<button  onClick={() =>setColor("brown")} style={{backgroundColor:"brown"}}>Brown</button>
<button  onClick={() =>setColor("orange")} style={{backgroundColor:"orange"}}>Orange</button>
<button  onClick={() =>setColor("olive")} style={{backgroundColor:"olive"}}>Olive</button>
<button  onClick={() =>setColor("purple")} style={{backgroundColor:"purple"}}>Purple</button>
</div>
</body>
    </>
  )
}

export default App
