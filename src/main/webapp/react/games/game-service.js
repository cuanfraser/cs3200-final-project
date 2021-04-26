// TODO: declare URL where server listens for HTTP requests
const PLAYERS_URL = "http://localhost:8080/api/games" //need to update this link

export const findAllGames = () => fetch(PLAYERS_URL).then(response => response.json())

// TODO: retrieve a single Game by their ID
export const findGameById = (id) => {
  return  fetch(`${PLAYERS_URL}/${id}`) //encode Game ID at end of path
  .then(response => response.json())
}

// TODO: delete a Game by their ID
export const deleteGame = (id) =>
    fetch(`${PLAYERS_URL}/${id}`, {
      method: "DELETE"
    })

// TODO: create a new Game
export const createGame = (Game) => //accepts uer object, sends to server, using HTTP post
//encode object as JSON string, tell server to interpret this as an object
    fetch(PLAYERS_URL, {
      method: 'POST',
      body: JSON.stringify(Game),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


// TODO: update a game by their ID
export const updateGame = (id, game) =>
    fetch(`${PLAYERS_URL}/${id}`, { //update game whos ID is id
      //sent http put request, embed game data in body of json, tell server to interpret object as json
      method: 'PUT',
      body: JSON.stringify(game),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json()) //parse response


// TODO: export all functions as the API to this service
export default{
  findAllGames,
  findGameById,
  deleteGame,
  createGame,
  updateGame
}
