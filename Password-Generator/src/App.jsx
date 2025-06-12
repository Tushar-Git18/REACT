import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numSelected, setNumSelected] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  //UseRef Hook:
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback (() =>{
    let passwrd=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numSelected) str+= "0123456789"
    if(character) str+="!@#$%^&**()+=[]{}~-_"
    for(let i=1; i<= length; i++){
    let char =Math.floor(Math.random()*str.length+1)
passwrd +=str.charAt(char)
    }
    setPassword(passwrd)
  }, [length,numSelected, character,setPassword])

const copyPasswordToClipboard= useCallback(() =>{
  passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,999)
  window.navigator.clipboard.writeText(password)
},[password])

  useEffect(() =>{
    passwordGenerator()
  },[length,numSelected, character,passwordGenerator])
  return (
    <>
    <div style={{width:900, height: 250, borderRadius:15, backgroundColor:'black', color:'white'}}>
         <h1 style={{textAlign:'center'}}>Password Generator</h1>
         <div>
          <input  style={{width:750, height:50, marginLeft:10, fontSize:35, borderRadius:10, backgroundColor:'white', color:'black'}}type='text' value={password} placeholder='Password'readOnly ref={passwordRef}></input>
          <button style={{width:100, height:50, fontSize:30, borderRadius:10, backgroundColor:'blue', color:'white'}}
          onClick={copyPasswordToClipboard}>Copy</button>
         </div>
         <div style={{height:100, marginTop:35, display:"flex"}}>
          <div style={{paddingLeft: 10}}>
            <input onChange={(e)=>{setLength(e.target.value)}} type="range" min={6} max={100} value={length} style={{cursor: 'pointer'}}/>
            <label >Length: {length}</label>
          </div>
          <div style={{paddingLeft: 50}}>
            <input  type="checkbox" style={{cursor: 'pointer'}} defaultChecked={numSelected} onChange={()=>{
              setNumSelected((prev) => !prev)
            }}/>
                      <label htmlFor='numberInput'>Numbers</label>

          </div>
          <div style={{paddingLeft: 50}}>
            <input  type="checkbox" style={{cursor: 'pointer'}} defaultChecked={character} onChange={()=>{
              setCharacter((prev) => !prev)
            }}/>
                      <label htmlFor='characterInput'>Characters</label>

          </div>
         </div>
    </div>
    </>
  )
}

export default App
