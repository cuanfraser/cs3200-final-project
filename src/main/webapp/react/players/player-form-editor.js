import playerService from "./player-service" //import player-service so we can fetch single player
const {useState, useEffect} = React; //import React's hooks
const {useParams, useHistory} = window.ReactRouterDOM; //import playerParams to parse params from URL
const PlayerFormEditor = () => {
  const {id} = useParams() //parse id from url
  const [player, setPlayer] = useState({})
  useEffect(() => { //on load
    if(id !== "new") { //oinly load player by ID if ID is not new
      findPlayerById(id) //find player by id
    }
  }, []);

  const findPlayerById = (id) => //fetch single player using id
      playerService.findPlayerById(id) //use player service so we can fetch a single player
      .then(player => setPlayer(player)) //store player from server to local player state

  const deletePlayer = (id) => //delete player event handler accepts player ID
      playerService.deletePlayer(id)
      .then(() => history.goBack())

  const createPlayer = (player) => //create button clock to send player to server
      playerService.createPlayer(player)
      .then(() => history.goBack())

  const updatePlayer = (id, newPlayer) =>
      playerService.updatePlayer(id, newPlayer) //update player ID with new player data, send to server
      .then(() => history.goBack())

  const history = useHistory()

  return (
      <div>
        <h2>Player Editor</h2>
        <label>Id</label>
        <input
            onChange={(e) =>
                setPlayer(player => //update local player objects first name
                    ({...player, firstName: e.target.value}))}

            value={player.id}/><br/>
        <input className="form-control"/>
        <label>First Name</label>
        <input value={player.firstName}/><br/>
        <label>Last Name</label>
        <input
            onChange={(e) =>
                setPlayer(player => //update local player objects last name as player types
                    ({...player, lastName: e.target.value}))}

            value={player.lastName}/><br/>
        <label>Username</label>
        <input
            onChange={(e) =>
                setPlayer(player => //update local player objects playername as player types input
                    ({...player, username: e.target.value}))}

            value={player.username}/><br/>
        <label>Password</label>
        <input
            onChange={(e) =>
                setPlayer(player =>
                    ({...player, password: e.target.value}))}

            value={player.password}/><br/>
        <button className="btn btn-warning"
                onClick={() => {
                  history.goBack()}}>
          Cancel
        </button>

        <button className="btn btn-danger"
                onClick={() => deletePlayer(player.id)}>
          Delete
        </button>

        <button className="btn btn-success"
                onClick={() => createPlayer(player)}>
          Create
        </button>

        <button className="btn btn-primary"
                onClick={() => updatePlayer(player.id, player)}>
          Save
        </button>
      </div>
  )
}

export default PlayerFormEditor