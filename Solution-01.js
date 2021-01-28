const all_users = fetch('/users', { method: 'get', headers: { 'Content-Type': 'application/json'}})
.then(user_response => user_response.json())

const corrected_users = fetch('/users', { method: 'get', headers: { 'Content-Type': 'application/json'}})
  .then(user_response => user_response.json())
  .then((users) => {

    const corrected_users = users.filter((individual_user) => {
      if (!individual_user.state) {
        individual_user.state = "PA"
        return individual_user;
      }
    })
    console.log('corrected_users', corrected_users);
    return corrected_users;
  })

const postCorrectedUsers = corrected_users
  .then((users) => {
    return fetch('/updateUsers', { method: 'post', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(users)} );
  })
  .then(res => res.json())
  .then(users => {
    console.log('posted users', users);
    return users;
  })

const all_hobbies = fetch('/hobbies', { method: 'get', headers: { 'Content-Type': 'application/json'}})
  .then(hobby_response => hobby_response.json())

const corrected_hobbies = fetch('/hobbies', { method: 'get', headers: { 'Content-Type': 'application/json'}})
  .then(hobby_response => hobby_response.json())
  .then((hobbies) => {
  
  const c_hobbies = hobbies.filter((hobby) => {

    if(!hobby.experience) {

      switch(hobby.years_played) {

        case 1:
          hobby.experience = 'beginner';
          break;
        case 2:
          hobby.experience = 'advanced';
          break;
        case 3:
          hobby.experience = 'expert';
          break;
      }
      return hobby;
    }

  })

  return c_hobbies;

})


const postCorrectedHobbies = corrected_hobbies
  .then((hobbies) => {
    return fetch('/updateHobbies', { method: 'post', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(hobbies)} );
  })
  .then(res => res.json())
  .then(hobbies => {
    return hobbies;
  })

  const all_favorites = fetch('/favorites', { method: 'get', headers: { 'Content-Type': 'application/json'}})
  .then(favorites_response => favorites_response.json())

  const corrected_favorites = fetch('/favorites', { method: 'get', headers: { 'Content-Type': 'application/json'}})
  .then(favorite_response=>favorite_response.json())
  .then((favorites) => {

    const c_favorites = favorites.filter((favoriteUnit) => {

      if(!favoriteUnit.type) {
        favoriteUnit.type = 'other';
        return favoriteUnit;
      }

    })

    return c_favorites;

  })
  
  const postCorrectedFavorites = corrected_favorites
  .then((favorites) => {
    return fetch('/updateFavorites', { method: 'post', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(favorites)} );
  })
  .then(res => res.json())
  .then(favorites => {
    return favorites;
  })

  const allData = Promise.all(
    [
      all_users,
      corrected_users, 
      postCorrectedUsers, 
      
      all_hobbies,
      corrected_hobbies,
      postCorrectedHobbies,

      all_favorites,
      corrected_favorites,
      postCorrectedFavorites
    ])
    .then((data) => {
      console.log('data', data);

      const all_users = data[0];
      const corrected_users = data[1];

      const all_hobbies = data[3]
      const corrected_hobbies = data[4];

      const all_favorites = data[6];
      const corrected_favorites = data[7];

      corrected_users.map((user) => {
        const matched_users = all_hobbies.filter((hobby) => {
          if (user.id === hobby.user_id) {
            return hobby;
          }
        })

        console.log('matched_users', matched_users);

      })



    })

console.log('All Data', allData);
