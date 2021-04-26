import teamService from "./teams-service"

const { Link, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const TeamList = () => {
    const history = useHistory()
    const [teams, setTeam] = useState([])
    useEffect(() => {
        findAllTeams()
    }, [])
    const findAllTeams = () => teamService.findAllTeams().then(teams => setTeam(teams))
    return (
        <div>
            <h2>Teams</h2>
            <button className="btn btn-primary" onClick={() => history.push("/teams/new")}>
                Add Team
        </button>

            <ul>
                {
                    teams.map(team => <li key={team.id}>
                        <Link to={`/teams/${team.id}`}>
                            {team.name},
                {team.city},
                {team.conference},
              </Link>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default TeamList;