import gameService from "./game-service"

const { Link, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;
const GameList = () => {
    const history = useHistory()
    const [games, setGame] = useState([])
    useEffect(() => {
        findAllGames()
    }, [])
    const findAllGames = () => gameService.findAllGames().then(games => setGame(games))
    return (
        <div>
            <h2>Games</h2>
            <button className="btn btn-primary" onClick={() => history.push("/games/new")}>
                Add Game
        </button>

            <ul className="list-group">
                {
                    games.map(game =>
                        <Link to={`/games/${game.id}`}>
                            <li className="list-group-item" key={game.id}>
                                Home: {game.homeTeam.name} |
                                Away: {game.awayTeam.name} |
                                Location: {game.location} |
                                Date: {game.startTime}
                            </li>
                        </Link>)
                }
            </ul>
        </div>
    )
}

export default GameList;