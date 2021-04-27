// TODO: declare URL where server listens for HTTP requests
const TEAMS_URL = "http://localhost:8080/api/teams"

export const findAllTeams = () => fetch(TEAMS_URL).then(response => response.json())

// TODO: retrieve a single team by their ID
export const findTeamById = (id) => {
  return  fetch(`${TEAMS_URL}/${id}`) //encode team ID at end of path
  .then(response => response.json())
}

// TODO: delete a team by their ID
export const deleteTeam = (id) =>
    fetch(`${TEAMS_URL}/${id}`, {
      method: "DELETE"
    })

// TODO: create a new team
export const createTeam = (team) => //accepts uer object, sends to server, using HTTP post
//encode object as JSON string, tell server to interpret this as an object
    fetch(TEAMS_URL, {
      method: 'POST',
      body: JSON.stringify(team),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


// TODO: update a team by their ID
export const updateTeam = (id, team) =>
    fetch(`${TEAMS_URL}/${id}`, { //update team whos ID is id
      //sent http put request, embed team data in body of json, tell server to interpret object as json
      method: 'PUT',
      body: JSON.stringify(team),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json()) //parse response


// TODO: export all functions as the API to this service
export default{
  findAllTeams,
  findTeamById,
  deleteTeam,
  createTeam,
  updateTeam
}
