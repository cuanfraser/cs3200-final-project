const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineGameEditor = ({game, deleteGame, updateGame}) => {
  const [gameCopy, setGameCopy] = useState(game)
  const [editing, setEditing] = useState(false)
  return(
      <div>
        {
          editing &&
          <div className="row">
            <div className="col">
              <input
                  className="form-control"
                  value={gameCopy.homeTeam}
                  onChange={(e)=>setGameCopy(gameCopy => ({...gameCopy, firstName: e.target.value}))}/>
            </div>
            <div className="col">
              <input
                  className="form-control"
                  value={gameCopy.awayTeam}
                  onChange={(e)=>setGameCopy(gameCopy => ({...gameCopy, lastName: e.target.value}))}/>
            </div>
            <div className="col">
              <input
                  className="form-control"
                  value={gameCopy.location}
                  onChange={(e)=>setGameCopy(gameCopy => ({...gameCopy, username: e.target.value}))}/>
            </div>
            <div className="col">
              <input
                  className="form-control"
                  value={gameCopy.startTime}
                  onChange={(e)=>setGameCopy(gameCopy => ({...gameCopy, username: e.target.value}))}/>
            </div>
            <div className="col-2">
              <i className="fas fa-2x fa-check float-right margin-left-10px"
                 onClick={() => {
                   setEditing(false)
                   updateGame(gameCopy.id, gameCopy)
                 }}></i>
              <i className="fas fa-2x fa-undo float-right margin-left-10px"
                 onClick={() => setEditing(false)}></i>
              <i className="fas fa-2x fa-trash float-right margin-left-10px"
                 onClick={() => deleteGame(game.id)}></i>
            </div>
          </div>
        }
        {
          !editing &&
          <div className="row">
            <div className="col">
              <Link to={`/games/${gameCopy.id}`}>
                {gameCopy.homeTeam}
              </Link>
            </div>
            <div className="col">
              <Link to={`/games/${gameCopy.id}`}>
                {gameCopy.awayTeam}
              </Link>
            </div>
            <div className="col">
              <Link to={`/games/${gameCopy.id}`}>
                {gameCopy.location}
              </Link>
            </div>
            <div className="col">
              <Link to={`/games/${gameCopy.id}`}>
                {gameCopy.startTime}
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

export default InlineGameEditor;