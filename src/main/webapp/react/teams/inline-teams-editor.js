const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineTeamEditor = ({team, deleteTeam, updateTeam}) => {
  const [teamCopy, setTeamCopy] = useState(player)
  const [editing, setEditing] = useState(false)
  return(
      <div>
        {
          editing &&
          <div className="row">
            <div className="col">
              <input
                  className="form-control"
                  value={teamCopy.name}
                  onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, name: e.target.value}))}/>
            </div>
            <div className="col">
              <input
                  className="form-control"
                  value={userCopy.city}
                  onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, city: e.target.value}))}/>
            </div>
            <div className="col">
              <input
                  className="form-control"
                  value={teamCopy.conference}
                  onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, conference: e.target.value}))}/>
            </div>
            {/*<div className="col-1">*/}
            {/*  <Link to={`/teams/${teamCopy.id}/teams`}>*/}

            {/*    ///need to update this to teams?*/}
            {/*    Teams*/}
            {/*  </Link>*/}
            {/*</div>*/}
            <div className="col-2">
              <i className="fas fa-2x fa-check float-right margin-left-10px"
                 onClick={() => {
                   setEditing(false)
                   updateTeam(teamCopy.id, teamCopy)
                 }}></i>
              <i className="fas fa-2x fa-undo float-right margin-left-10px"
                 onClick={() => setEditing(false)}></i>
              <i className="fas fa-2x fa-trash float-right margin-left-10px"
                 onClick={() => deleteTeam(team.id)}></i>
            </div>
          </div>
        }
        {
          !editing &&
          <div className="row">
            <div className="col">
              <Link to={`/teams/${teamCopy.id}`}>
                {teamCopy.name}
              </Link>
            </div>
            <div className="col">
              <Link to={`/teams/${teamCopy.id}`}>
                {teamCopy.city}
              </Link>
            </div>
            <div className="col">
              <Link to={`/teams/${teamCopy.id}`}>
                {teamCopy.conference}
              </Link>
            </div>
            {/*<div className="col-1">*/}
            {/*  <Link to={`/teams/${teamCopy.id}/blogs`}>*/}
            {/*    Blogs //change to what*/}
            {/*  </Link>*/}
            {/*</div>*/}
            <div className="col-2">
              <i className="fas fa-cog fa-2x float-right"
                 onClick={() => setEditing(true)}></i>
            </div>
          </div>
        }
      </div>
  )
}

export default InlineTeamEditor;