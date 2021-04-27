// declare URL where server listens for HTTP requests
const GAME_URL = "http://localhost:8080/api/games"
const TEAMS_URL = "http://localhost:8080/api/teams"

export const findAllGames = () => fetch(GAME_URL).then(response => response.json())

// retrieve a single Game by their ID
export const findGameById = (id) => {
  return  fetch(`${GAME_URL}/${id}`) //encode Game ID at end of path
  .then(response => response.json())
}

export const findGamesForTeam = (tid) => {
  return fetch(`${TEAMS_URL}/${tid}/games`)
    .then(response => response.json())
}

// delete a Game by their ID
export const deleteGame = (id) =>
    fetch(`${GAME_URL}/${id}`, {
      method: "DELETE"
    })

// create a new Game
export const createGame = (Game, hid, aid) => //accepts uer object, sends to server, using HTTP post
//encode object as JSON string, tell server to interpret this as an object
///api/games/home/{hid}/away/{aid}
    fetch(`${GAME_URL}/home/${hid}/away/${aid}`, {
      method: 'POST',
      body: JSON.stringify(Game),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


// update a game by their ID
export const updateGame = (id, game) =>
    fetch(`${GAME_URL}/${id}`, { //update game whos ID is id
      //sent http put request, embed game data in body of json, tell server to interpret object as json
      method: 'PUT',
      body: JSON.stringify(game),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json()) //parse response


// TODO: export all functions as the API to this service
export default{
  findGamesForTeam,
  findAllGames,
  findGameById,
  deleteGame,
  createGame,
  updateGame
}
