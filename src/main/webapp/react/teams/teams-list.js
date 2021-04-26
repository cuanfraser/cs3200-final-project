import teamService from "./teams-service-service"

const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;
const TeamList = () => {
  const history = useHistory()
  const[teams, setTeam] = useState([])
  useEffect(()=> {
    findAllTeams()
  }, [])
  const findAllTeams = () => teamService.findAllTeams().then(teams => setTeam(teams))
  return(
      <div>
        <h2>Users</h2>
        <button className="btn btn-primary" onClick={() => history.push("/Teams/new")}>
          Add Team
        </button>

        <ul>
          {
            teams.map(team => <li key={team.id}>
              <Link to={`/teams/${team.id}`}>
                {team.name},
                {team.city},
                {team.conference}, //no confrence?
              </Link>
            </li>)
          }
        </ul>
      </div>
  )
}

export default TeamList();