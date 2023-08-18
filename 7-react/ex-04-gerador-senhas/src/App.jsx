import { useState } from "react"

function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")

  function generate() {
    const characters =  "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const lenght = 12
    let newPassword = ""

    for (let i = 0; i < lenght; i++) {
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
      <button onClick={generate}>Gerar</button>
      <button onClick={copyPassword}>{copyText}</button>
      <p>{password}</p>
    </>
  )
}

export default App
