let users = [
  {"id":2,"name":"Rob","age":40,"city":"Harrisburg","state":"Test","last_modified":""}
];

let hobbies = [
  {"id":20,"user_id":2,"name":"golf","years_played":1,"experience":"expert","last_modified":""},
  {"id":41,"user_id":4,"name":"knitting","years_played":2,"experience":"beginner","last_modified":""}
  
];

let favorites = [
  {"id":11,"user_id":1,"name":"Corlaline","type":"new","last_modified":""},
  {"id":22,"user_id":2,"name":"Pizza","type":"newer","last_modified":""},
  {"id":62,"user_id":6,"name":"Ice cream","type":"newest","last_modified":""},
];

fetch('/updateUsers', { method: "post", headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(users) })
  .then(res => res.json())
  .then(users => {
    let hey = document.createElement('div');
    hey.innerHTML = JSON.stringify(users);
    document.getElementById('main').appendChild(hey);

    return fetch('/updateHobbies', { method: "post", headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(hobbies) })
  })
  .then(res => res.json())
  .then(hobbies => {
    let hey = document.createElement('div');
    hey.innerHTML = JSON.stringify(hobbies);
    document.getElementById('main').appendChild(hey);
    
    return fetch('/updateFavorites', { method: "post", headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(favorites) })
  })
  .then(res => res.json())
  .then(faves => {
    let hey = document.createElement('div');
    hey.innerHTML = JSON.stringify(faves);
    document.getElementById('main').appendChild(hey);
  })

// DO NOT DELETE THIS!  
function reset() {
  fetch('/reset');
}
