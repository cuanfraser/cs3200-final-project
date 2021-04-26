import gameService from "./game-service" //import game-service so we can fetch single game
const {useState, useEffect} = React; //import React's hooks
const {useParams, useHistory} = window.ReactRouterDOM; //import gameParams to parse params from URL
const GameFormEditor = () => {
  const {id} = useParams() //parse id from url
  const [game, setGame] = useState({})
  useEffect(() => { //on load
    if(id !== "new") { //only load game by ID if ID is not new
      findGameById(id) //find game by id
    }
  }, []);

  const findGameById = (id) => //fetch single game using id
      gameService.findGameById(id) //use game service so we can fetch a single game
      .then(game => setGame(game)) //store game from server to local game state

  const deleteGame = (id) => //delete game event handler accepts game ID
      gameService.deleteGame(id)
      .then(() => history.goBack())

  const createGame = (game) => //create button clock to send game to server
      gameService.createGame(game)
      .then(() => history.goBack())

  const updateGame = (id, newGame) =>
      gameService.updateGame(id, newGame) //update game ID with new game data, send to server
      .then(() => history.goBack())

  const history = useHistory()

  return (
      <div>
        <h2>Game Editor</h2>
        <label>Id</label>
        <input className="form-control" disabled
            onChange={(e) =>
                setGame(game => //update local game object
                    ({...game, homeTeam: e.target.value}))}

            value={game.id}/><br/>
        <label>Home Team</label>
        <input className="form-control" value={game.homeTeam()}/><br/>
        <label>Away Team</label>
        <input className="form-control"
            onChange={(e) =>
                setGame(game => //update local game objects last name as game types
                    ({...game, awayTeam: e.target.value}))}

            value={game.awayTeam()}/><br/>
        <label>Location</label>
        <input className="form-control"
            onChange={(e) =>
                setGame(game => //update local game objects gamename as game types input
                    ({...game, location: e.target.value}))}

            value={game.location}/><br/>
        <label>Start Time</label>
        <input className="form-control"
            onChange={(e) =>
                setGame(game => //update local game objects gamename as game types input
                    ({...game, startTime: e.target.value}))}

            value={game.startTime}/><br/>
        <button className="btn btn-warning"
                onClick={() => {
                  history.goBack()}}>
          Cancel
        </button>

        <button className="btn btn-danger"
                onClick={() => deleteGame(game.id)}>
          Delete
        </button>

        <button className="btn btn-success"
                onClick={() => createGame(game)}>
          Create
        </button>

        <button className="btn btn-primary"
                onClick={() => updateGame(game.id, game)}>
          Save
        </button>
      </div>
  )
}

export default GameFormEditor