// TODO: declare URL where server listens for HTTP requests
const PLAYERS_URL = "http://localhost:8080/api/coaches" //need to update this link

export const findAllCoaches = () => fetch(PLAYERS_URL).then(response => response.json())

// TODO: retrieve a single Coach by their ID
export const findCoachById = (id) => {
  return  fetch(`${PLAYERS_URL}/${id}`) //encode Coach ID at end of path
  .then(response => response.json())
}

// TODO: delete a Coach by their ID
export const deleteCoach = (id) =>
    fetch(`${PLAYERS_URL}/${id}`, {
      method: "DELETE"
    })

// TODO: create a new Coach
export const createCoach = (Coach) => //accepts uer object, sends to server, using HTTP post
//encode object as JSON string, tell server to interpret this as an object
    fetch(PLAYERS_URL, {
      method: 'POST',
      body: JSON.stringify(coach),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


// TODO: update a coach by their ID
export const updateCoach = (id, coach) =>
    fetch(`${PLAYERS_URL}/${id}`, { //update coach whos ID is id
      //sent http put request, embed coach data in body of json, tell server to interpret object as json
      method: 'PUT',
      body: JSON.stringify(coach),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json()) //parse response


// TODO: export all functions as the API to this service
export default{
  findAllCoaches,
  findCoachById,
  deleteCoach,
  createCoach,
  updateCoach
}
