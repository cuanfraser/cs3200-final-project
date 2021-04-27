//  declare URL where server listens for HTTP requests
const PLAYERS_URL = "http://localhost:8080/api/players"
const TEAMS_URL = "http://localhost:8080/api/teams"

export const findAllPlayers = () => fetch(PLAYERS_URL).then(response => response.json())

// retrieve a single Player by their ID
export const findPlayerById = (id) => {
  return fetch(`${PLAYERS_URL}/${id}`) //encode Player ID at end of path
    .then(response => response.json())
}

export const findPlayersForTeam = (tid) => {
  return fetch(`${TEAMS_URL}/${tid}/players`)
    .then(response => response.json())
}

// delete a Player by their ID
export const deletePlayer = (id) =>
  fetch(`${PLAYERS_URL}/${id}`, {
    method: "DELETE"
  })

// create a new Player
export const createPlayer = (player, tid) => //accepts uer object, sends to server, using HTTP post
  //encode object as JSON string, tell server to interpret this as an object
  fetch(`${TEAMS_URL}/${tid}/players`, {
    method: 'POST',
    body: JSON.stringify(player),
    headers: { 'content-type': 'application/json' }
  })
    .then(response => response.json())


// update a player by their ID
export const updatePlayer = (id, player) =>
  fetch(`${PLAYERS_URL}/${id}`, { //update player whos ID is id
    //sent http put request, embed player data in body of json, tell server to interpret object as json
    method: 'PUT',
    body: JSON.stringify(player),
    headers: { 'content-type': 'application/json' }
  })
    .then(response => response.json()) //parse response


// export all functions as the API to this service
export default {
  findAllPlayers,
  findPlayerById,
  findPlayersForTeam,
  deletePlayer,
  createPlayer,
  updatePlayer
}
