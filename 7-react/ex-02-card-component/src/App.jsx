import Card from "./components/Card"
import poster from "/poster.jpg"
import posterharry from "/posterharry.jpg"

function App() {
 
  return (
    <>
      <Card title="Pôster: Star Wars (1977)" posterImg={poster} />
      <Card title="Harry Potter e a Câmara Secreta" posterImg={posterharry} />
    </>
  )
}

export default App
