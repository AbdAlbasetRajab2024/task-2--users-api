const apiURL = "https://jsonplaceholder.typicode.com/users";

const usersContainer = document.getElementById("users-container");

function fetchUsers() {
  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("An error occurred while fetching data");
      }
      return response.json();
    })
    .then(users => displayUsers(users))
    .catch(error => {
      console.error(error.message);
      usersContainer.innerHTML = `<p style="color: red; text-align: center;">${error.message}</p>`;
    });
}
function displayUsers(users) {
  usersContainer.innerHTML = ""; 
  users.forEach(user => {
    const userCard = document.createElement("div");
    userCard.className = "user-card";
    userCard.innerHTML = `
      <h2>${user.name}</h2>
      <p>Username:${user.username}</p>
      <p>Email: ${user.email}</p>
      <p>Phone: ${user.phone}</p>
      <p>Website:<a href="http://${user.website}" target="_blank">${user.website}</a></p>
      <p>Company: ${user.company.name}</p>
      <p>City: ${user.address.city}</p>
    `;
    usersContainer.appendChild(userCard);
  });
}
fetchUsers();
