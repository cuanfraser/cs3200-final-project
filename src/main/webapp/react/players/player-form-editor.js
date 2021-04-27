import playerService from "./player-service" //import player-service so we can fetch single player
import teamService from "./teams-service"

const { useState, useEffect } = React; //import React's hooks
const { useParams, useHistory, Link } = window.ReactRouterDOM; //import playerParams to parse params from URL
const PlayerFormEditor = () => {
    const { id } = useParams() //parse id from url
    const [player, setPlayer] = useState({})
    const [teams, setTeams] = useState([])
    const [newTeam, setNewTeam] = useState(0)

    useEffect(() => { //on load
        if (id !== "new") { //oinly load player by ID if ID is not new
            findPlayerById(id) //find player by id
        }
        else {
            findAllTeams()
        }
    }, []);

    const findPlayerById = (id) => //fetch single player using id
        playerService.findPlayerById(id) //use player service so we can fetch a single player
            .then(player => setPlayer(player)) //store player from server to local player state

    const deletePlayer = (id) => //delete player event handler accepts player ID
        playerService.deletePlayer(id)
            .then(() => history.goBack())

    const createPlayer = (player, newTeam) => //create button clock to send player to server
        playerService.createPlayer(player, newTeam)
            .then(() => history.goBack())

    const updatePlayer = (id, newPlayer) =>
        playerService.updatePlayer(id, newPlayer) //update player ID with new player data, send to server
            .then(() => history.goBack())

    const findAllTeams = () => teamService.findAllTeams().then(teams => setTeams(teams))

    const history = useHistory()

    return (
        <div>
            <h2>Player Editor</h2>
            <label>Id</label>
            <input className="form-control" disabled value={player.id} />
            <label>First Name</label>
            <input className="form-control"
                onChange={(e) =>
                    setPlayer(player => //update local player objects first name
                        ({ ...player, firstName: e.target.value }))}
                value={player.firstName} />
            <label>Last Name</label>
            <input className="form-control"
                onChange={(e) =>
                    setPlayer(player => //update local player objects last name as player types
                        ({ ...player, lastName: e.target.value }))}

                value={player.lastName} />
            <label>Username</label>
            <input className="form-control"
                onChange={(e) =>
                    setPlayer(player => //update local player objects playername as player types input
                        ({ ...player, username: e.target.value }))}

                value={player.username} />
            <label>Password</label>
            <input className="form-control"
                onChange={(e) =>
                    setPlayer(player =>
                        ({ ...player, password: e.target.value }))}

                value={player.password} />
            <label>Email</label>
            <input className="form-control"
                onChange={(e) =>
                    setPlayer(player => //update local player objects playername as player types input
                        ({ ...player, email: e.target.value }))}

                value={player.email} />
            <label>Date of Birth</label>
            <input className="form-control"
                onChange={(e) =>
                    setPlayer(player => //update local player objects playername as player types input
                        ({ ...player, dob: e.target.value }))}

                value={player.dob} />
            <label>Team: </label>
            {(id === "new" ?
                <select defaultValue={teams[0]} className="form-control"
                    onChange={(e) => setNewTeam(e.target.value)}
                    value={newTeam}>
                    {teams.map(team => <option key={team.id} value={team.id}>{team.name}</option>)}
                </select>
                :
                Object.keys(player).length > 0 ? 
                    <Link to={`/teams/${player.team.id}`} className="btn btn-primary">{player.team.name}</Link>
                    :
                    <input className="form-control" value="No Team" disabled />
            )}
            
            <br />

            <label>Position</label>
            <select className="form-control" defaultValue="ONE"
                onChange={(e) =>
                    setPlayer(player => //update local player objects playername as player types input
                        ({ ...player, idposition: e.target.value }))}
                value={player.idposition}>

                <option value="ONE">ONE</option>
                <option value="TWO">TWO</option>
                <option value="THREE">THREE</option>
                <option value="FOUR">FOUR</option>
                <option value="FIVE">FIVE</option>
            </select>

        {(id === "new") ?
            <button className="btn btn-success"
                    onClick={() => createPlayer(player, newTeam)}>
                    Create
            </button>
        :
            <div>
                <button className="btn btn-danger"
                        onClick={() => deletePlayer(player.id)}>
                        Delete
                </button>

                <button className="btn btn-primary"
                        onClick={() => updatePlayer(player.id, player)}>
                        Save
                </button>
            </div>


        }

        <button className="btn btn-warning"
                onClick={() => {
                    history.goBack()
                }}>
                Cancel
        </button>


        
        </div>
    )
}

export default PlayerFormEditor