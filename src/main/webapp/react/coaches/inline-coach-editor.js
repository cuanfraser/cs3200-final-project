const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineCoachEditor = ({coach, deleteCoach, updateCoach}) => {
  const [coachCopy, setCoachCopy] = useState(coach)
  const [editing, setEditing] = useState(false)
  return(
      <div>
        {
          editing &&
          <div className="row">
            <div className="col">
              <input
                  className="form-control"
                  value={coachCopy.firstName}
                  onChange={(e)=>setCoachCopy(coachCopy => ({...coachCopy, firstName: e.target.value}))}/>
            </div>
            <div className="col">
              <input
                  className="form-control"
                  value={userCopy.lastName}
                  onChange={(e)=>setcoachCopy(coachCopy => ({...coachCopy, lastName: e.target.value}))}/>
            </div>
            <div className="col">
              <input
                  className="form-control"
                  value={coachCopy.username}
                  onChange={(e)=>setcoachCopy(coachCopy => ({...coachCopy, username: e.target.value}))}/>
            </div>
            <div className="col-1">
              <Link to={`/users/${coachCopy.id}/blogs`}>

                ///need to update this to teams?
                Blogs
              </Link>
            </div>
            <div className="col-2">
              <i className="fas fa-2x fa-check float-right margin-left-10px"
                 onClick={() => {
                   setEditing(false)
                   updateCoach(coachCopy.id, coachCopy)
                 }}></i>
              <i className="fas fa-2x fa-undo float-right margin-left-10px"
                 onClick={() => setEditing(false)}></i>
              <i className="fas fa-2x fa-trash float-right margin-left-10px"
                 onClick={() => deleteCoach(coach.id)}></i>
            </div>
          </div>
        }
        {
          !editing &&
          <div className="row">
            <div className="col">
              <Link to={`/coaches/${coachCopy.id}`}>
                {coachCopy.firstName}
              </Link>
            </div>
            <div className="col">
              <Link to={`/coaches/${coachCopy.id}`}>
                {coachCopy.lastName}
              </Link>
            </div>
            <div className="col">
              <Link to={`/coaches/${coachCopy.id}`}>
                {coachCopy.username}
              </Link>
            </div>
            <div className="col-1">
              <Link to={`/coaches/${coachCopy.id}/blogs`}>
                Blogs //change to what
              </Link>
            </div>
            <div className="col-2">
              <i className="fas fa-cog fa-2x float-right"
                 onClick={() => setEditing(true)}></i>
            </div>
          </div>
        }
      </div>
  )
}

export default InlineCoachEditor;