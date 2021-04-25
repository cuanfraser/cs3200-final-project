import coachService from "./coach-service" //import coach-service so we can fetch single coach
const {useState, useEffect} = React; //import React's hooks
const {useParams, useHistory} = window.ReactRouterDOM; //import coachParams to parse params from URL
const CoachFormEditor = () => {
  const {id} = useParams() //parse id from url
  const [coach, setCoach] = useState({})
  useEffect(() => { //on load
    if(id !== "new") { //only load coach by ID if ID is not new
      findCoachById(id) //find coach by id
    }
  }, []);

  const findCoachById = (id) => //fetch single coach using id
      coachService.findCoachById(id) //use coach service so we can fetch a single coach
      .then(coach => setCoach(coach)) //store coach from server to local coach state

  const deleteCoach = (id) => //delete coach event handler accepts coach ID
      coachService.deleteCoach(id)
      .then(() => history.goBack())

  const createCoach = (coach) => //create button clock to send coach to server
      coachService.createCoach(coach)
      .then(() => history.goBack())

  const updateCoach = (id, newCoach) =>
      coachService.updateCoach(id, newCoach) //update coach ID with new coach data, send to server
      .then(() => history.goBack())

  const history = useHistory()

  return (
      <div>
        <h2>Coach Editor</h2>
        <label>Id</label>
        <input
            onChange={(e) =>
                setCoach(coach => //update local coach objects first name
                    ({...coach, firstName: e.target.value}))}

            value={coach.id}/><br/>
        <input className="form-control"/>
        <label>First Name</label>
        <input value={coach.firstName}/><br/>
        <label>Last Name</label>
        <input
            onChange={(e) =>
                setCoach(coach => //update local coach objects last name as coach types
                    ({...coach, lastName: e.target.value}))}

            value={coach.lastName}/><br/>
        <label>Username</label>
        <input
            onChange={(e) =>
                setCoach(coach => //update local coach objects coachname as coach types input
                    ({...coach, username: e.target.value}))}

            value={coach.username}/><br/>
        <label>Password</label>
        <input
            onChange={(e) =>
                setCoach(coach =>
                    ({...coach, password: e.target.value}))}

            value={coach.password}/><br/>
        <button className="btn btn-warning"
                onClick={() => {
                  history.goBack()}}>
          Cancel
        </button>

        <button className="btn btn-danger"
                onClick={() => deleteCoach(coach.id)}>
          Delete
        </button>

        <button className="btn btn-success"
                onClick={() => createCoach(coach)}>
          Create
        </button>

        <button className="btn btn-primary"
                onClick={() => updateCoach(coach.id, coach)}>
          Save
        </button>
      </div>
  )
}

export default CoachFormEditor