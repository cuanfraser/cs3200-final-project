import teamService from "./teams-service" //import team-service so we can fetch single team
import TeamsPlayerList from "./teams-player-list"
import TeamsGameList from "./teams-game-list"

const { useState, useEffect } = React; //import React's hooks
const { useParams, useHistory } = window.ReactRouterDOM; //import teamParams to parse params from URL
const TeamFormEditor = () => {
    const { id } = useParams() //parse id from url
    const [team, setTeam] = useState({})
    const [players, setPlayers] = useState([])
    const [games, setGames] = useState([])
    useEffect(() => { //on load
        if (id !== "new") { //oinly load team by ID if ID is not new
            findTeamById(id)
        }
    }, []);

    const findTeamById = (id) => //fetch single Team using id
        teamService.findTeamById(id) //use Team service so we can fetch a single Team
            .then(team => setTeam(team)) //store team from server to local team state

    const deleteTeam = (id) => //delete team event handler accepts team ID
        teamService.deleteTeam(id)
            .then(() => history.goBack())

    const createTeam = (team) => //create button clock to send team to server
        teamService.createTeam(team)
            .then(() => history.goBack())

    const updateTeam = (id, newTeam) =>
        teamService.updateTeam(id, newTeam) //update team ID with new team data, send to server
            .then(() => history.goBack())

    const history = useHistory()

    return (
        <div>
            <h2>Team Editor</h2>
            <label>Id</label>
            <input className="form-control" disabled value={team.id} />
            <label>Name</label>
            <input className="form-control"
                onChange={(e) =>
                    setTeam(team => 
                        ({ ...team, name: e.target.value }))}
                value={team.name} />
            <label>City</label>
            <input className="form-control"
                onChange={(e) =>
                    setTeam(team =>
                        ({ ...team, city: e.target.value }))}

                value={team.city} />
            <label>Conference</label>
            <select className="form-control" defaultValue="EAST"
                onChange={(e) =>
                    setTeam(team =>
                        ({ ...team, conference: e.target.value }))}
                value={team.conference}>

                <option name="EAST">EAST</option>
                <option name="WEST">WEST</option>
            </select>
            <br />


            <TeamsGameList id={id}/>
            <TeamsPlayerList id={id}/>

            <br />


            { (id !== "new") ?
                (<div>
                    <button className="btn btn-danger"
                        onClick={() => deleteTeam(team.id)}>
                        Delete
            </button>
                    <button className="btn btn-primary"
                        onClick={() => updateTeam(team.id, team)}>
                        Save
            </button>
                </div>
                ) :

                <button className="btn btn-success"
                    onClick={() => createTeam(team)}>
                    Create
            </button>

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

export default TeamFormEditor