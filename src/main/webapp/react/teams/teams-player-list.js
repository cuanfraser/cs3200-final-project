import playerService from "./player-service"

const { Link, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const TeamsPlayerList = (props) => {
    const history = useHistory()
    const [players, setPlayers] = useState([])
    useEffect(() => {
        if (props.id !== "new") {
            findPlayersForTeam(props.id)
        }
    }, [])
    const findPlayersForTeam = (tid) => playerService.findPlayersForTeam(tid).then(players => setPlayers(players))
    if (props.id !== "new") {
        return (
            <div>
                <h4>Players</h4>

                <ul className="list-group">
                    {
                        players.map(player => <li className="list-group-item" key={player.id}>
                            <Link to={`/players/${player.id}`}>
                                Firstname: {player.firstName} |
                                Lastname: {player.lastName} |
                                Username: {player.username}
                            </Link>
                        </li>)
                    }
                </ul>
            </div>
        )
    }
    else {
        return null
    }

}

export default TeamsPlayerList;