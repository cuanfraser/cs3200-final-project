import gameService from "./game-service" //import game-service so we can fetch single game
import teamService from "./teams-service"


const { useState, useEffect } = React; //import React's hooks
const { useParams, useHistory, Link } = window.ReactRouterDOM; //import gameParams to parse params from URL
const GameFormEditor = () => {
    const { id } = useParams() //parse id from url
    const [game, setGame] = useState({})
    const [teams, setTeams] = useState([])
    const [home, setHome] = useState(0)
    const [away, setAway] = useState(0)
    useEffect(() => { //on load
        if (id !== "new") { //only load game by ID if ID is not new
            findGameById(id) //find game by id
        }
        else {
            console.log("TEST")
            findAllTeams()
        }
    }, []);

    const findGameById = (id) => //fetch single game using id
        gameService.findGameById(id) //use game service so we can fetch a single game
            .then(game => setGame(game)) //store game from server to local game state

    const deleteGame = (id) => //delete game event handler accepts game ID
        gameService.deleteGame(id)
            .then(() => history.goBack())

    const createGame = (game, hid, aid) => //create button clock to send game to server
        gameService.createGame(game, hid, aid)
            .then(() => history.goBack())

    const updateGame = (id, newGame) =>
        gameService.updateGame(id, newGame) //update game ID with new game data, send to server
            .then(() => history.goBack())

    const findAllTeams = () => teamService.findAllTeams().then(teams => setTeams(teams))

    const history = useHistory()
    if (id !== "new") {
        return (
            <div>
                <h2>Game Editor</h2>
                <label>Id</label>
                <input className="form-control" disabled value={game.id} />
                <label>Home Team</label>
                {Object.keys(game).length > 0 ?
                    <Link to={`/teams/${game.homeTeam.id}`}>
                        <div disabled className="form-control">{game.homeTeam.name}</div>
                    </Link>
                    :
                    <input className="form-control" disabled />}
                <label>Away Team</label>
                {Object.keys(game).length > 0 ?
                    <Link to={`/teams/${game.awayTeam.id}`}>
                        <div disabled className="form-control">{game.awayTeam.name}</div>
                    </Link>
                    :
                    <input className="form-control" disabled />
                }
                <label>Location</label>
                <input className="form-control"
                    onChange={(e) =>
                        setGame(game => //update local game objects gamename as game types input
                            ({ ...game, location: e.target.value }))}

                    value={game.location} />
                <label>Start Time</label>
                <input className="form-control"
                    onChange={(e) =>
                        setGame(game => //update local game objects gamename as game types input
                            ({ ...game, startTime: e.target.value }))}

                    value={game.startTime} />





                <button className="btn btn-danger"
                    onClick={() => deleteGame(game.id)}>
                    Delete
                </button>
                <button className="btn btn-primary"
                    onClick={() => updateGame(game.id, game)}>
                    Save
                </button>
                <button className="btn btn-warning"
                    onClick={() => {
                        history.goBack()
                    }}>
                    Cancel
                </button>
            </div>
        )
    }
    else {
        return (
            <div>
                <h2>Game Editor</h2>
                <label>Id</label>
                <input className="form-control" disabled value={game.id} />
                <label>Home Team</label>
                {(typeof teams !== 'undefined'?
                        <select defaultValue={teams[0]} className="form-control"
                            onChange={(e) => setHome(e.target.value)}
                            value={home}>
                            {teams.map(team => <option key={team.id} value={team.id}>{team.name}</option>)}
                        </select>
                        :
                        <input className="form-control" disabled />
                )}
                <label>Away Team</label>
                {(typeof teams !== 'undefined'?
                        <select defaultValue={teams[teams.length - 1]} className="form-control"
                            onChange={(e) => setAway(e.target.value)}
                            value={away}>
                            {teams.map(team => <option key={team.id} value={team.id}>{team.name}</option>)}
                        </select>
                        :
                        <input className="form-control" disabled />
                )}
                <label>Location</label>
                <input className="form-control"
                    onChange={(e) =>
                        setGame(game => //update local game objects gamename as game types input
                            ({ ...game, location: e.target.value }))}
                    value={game.location} />
                <label>Start Time</label>
                <input className="form-control"
                    onChange={(e) =>
                        setGame(game => //update local game objects gamename as game types input
                            ({ ...game, startTime: e.target.value }))}

                    value={game.startTime} />




                <button className="btn btn-success"
                    onClick={() => createGame(game, home, away)}>
                    Create
                    </button>
                <button className="btn btn-warning"
                    onClick={() => {
                        history.goBack()
                    }}>
                    Cancel
                </button>
            </div>
        )
    }
}

export default GameFormEditor