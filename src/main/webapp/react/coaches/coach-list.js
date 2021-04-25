import coachService from "./coach-service"

const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;
const CoachList = () => {
  const history = useHistory()
  const[coaches, setCoach] = useState([])
  useEffect(()=> {
    findAllCoaches()
  }, [])
  const findAllCoaches = () => coachService.findAllCoaches().then(coaches => setCoach(coaches))
  return(
      <div>
        <h2>Users</h2>
        <button className="btn btn-primary" onClick={() => history.push("/coaches/new")}>
          Add Coach
        </button>

        <ul>
          {
            coaches.map(coach => <li key={coach.id}>
              <Link to={`/coaches/${coach.id}`}>
                {coach.firstName},
                {coach.lastName},
                {coach.username},
              </Link>
            </li>)
          }
        </ul>
      </div>
  )
}

export default CoachList();