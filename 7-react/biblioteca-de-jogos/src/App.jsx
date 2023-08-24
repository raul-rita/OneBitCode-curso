import Game from "./components/Game/Game"
import NewGameForm from "./components/NewGameForm/NewGameForm"
import useGameCollection from "./hooks/useGameCollection"

function App() {

  const { games, addGame, removeGame } = useGameCollection()

  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>

      <NewGameForm addGame={addGame} />

      <div className="games">
        {games.length > 0
          ? games.map((game) => (
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removeGame(game.id)}
            />))
          : (
            <h2>Ainda não tem jogos cadastrados.</h2>
          )
        }
      </div>
    </div>
  )
}

export default App
