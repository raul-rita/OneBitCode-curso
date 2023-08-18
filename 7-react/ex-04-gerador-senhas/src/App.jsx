import { useState } from "react"
import Input from "./components/Input"

function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  const [customSize, setCustomSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  const passwordSize = showInput ? customSize : 8

  function generate() {
    const characters =  "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""

    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyPassword() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado")
  }
  
  return (
    <>
      <h1>Gerador de Senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input 
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}
        />
      </div>

      {showInput ? (
        <div>
          <label htmlFor="passwordSize">Tamanho:</label>
          <Input passwordSize={customSize} setPasswordSize={setCustomSize} />
        </div>
        ) : null      
      }    

      <button onClick={generate}>Gerar senha de {passwordSize} caracteres</button>
      <button onClick={copyPassword}>{copyText}</button>
      <p>{password}</p>
    </>
  )
}

export default App
