import gameService from "./game-service"

const { Link, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;
const TeamsGameList = (props) => {
    const history = useHistory()
    const [games, setGame] = useState([])
    useEffect(() => {
        if (props.id !== "new") {
            findGamesForTeam(props.id)
        }
    }, [])
    const findGamesForTeam = (tid) => gameService.findGamesForTeam(tid).then(games => setGame(games))
    if (props.id !== "new") {
        return (
            <div>
                <h4>Games</h4>
                <button className="btn btn-outline-primary btn-sm" onClick={() => history.push("/games/new")}>
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
    else {
        return null
    }

}

export default TeamsGameList;