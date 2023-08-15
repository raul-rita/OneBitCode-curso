import logoReact from "/react.png"

function App() {
  return (
    <>
      <img src={logoReact} alt="logo do react" width="150px"/>
      <h1>React</h1>
      <p>A biblioteca para interfaces de usuário web e nativas</p>
      <div>
        <button>Aprenda React</button>
        <button>Referência da API</button>
      </div>

      <hr />

      <h2>Crie interface de usuário de componentes</h2>
      <p>React permite que você construa interfaces de usuário a partir de pedaços individuais chamados componentes.</p>

      <hr />

      <h2>Escreva componentes com código e marcação</h2>
      <p>Componentes do React são funções Javascript. A sintaxe de marcação é chamada JSX. É uma extensão da sintaxe Javascript popularizada pelo React.</p>

      <hr />

      <h2>Próximos passos</h2>
      <ul>
        <li>Uso de dados dinâmicos no JSX</li>
        <li>Criação de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização dos componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do Javascript</li>
      </ul>

    </>
  )
}

export default App
