import playerService from "./player-service"

const { Link, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const PlayerList = () => {
  const history = useHistory()
  const [players, setPlayer] = useState([])
  useEffect(() => {
    findAllPlayers()
  }, [])
  const findAllPlayers = () => playerService.findAllPlayers().then(players => setPlayer(players))
  return (
    <div>
      <h2>Players</h2>
      <button className="btn btn-primary" onClick={() => history.push("/players/new")}>
        Add Player
        </button>

      <ul>
        {
          players.map(player => <li key={player.id}>
            <Link to={`/players/${player.id}`}>
              {player.firstName},
                {player.lastName},
                {player.username},
              </Link>
          </li>)
        }
      </ul>
    </div>
  )
}

export default PlayerList;