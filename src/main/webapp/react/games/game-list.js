import gameService from "./game-service"

const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;
const GameList = () => {
  const history = useHistory()
  const[games, setGame] = useState([])
  useEffect(()=> {
    findAllGames()
  }, [])
  const findAllGames = () => gameService.findAllGames().then(games => setGame(games))
  return(
      <div>
        <h2>Users</h2>
        <button className="btn btn-primary" onClick={() => history.push("/games/new")}>
          Add Game
        </button>

        <ul>
          {
            games.map(game => <li key={game.id}>
              <Link to={`/games/${game.id}`}>
                {game.homeTeam},
                {game.awayTeam},
                {game.location},
                {game.startTime},
              </Link>
            </li>)
          }
        </ul>
      </div>
  )
}

export default GameList;