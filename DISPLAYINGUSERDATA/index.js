let rootElement = document.getElementById("root");

fetch("https://reqres.in/api/users")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    userdata(data.data);
  })
  .catch(function (err) {
    console.error("Fetch error:", err);
  });
function btn() {
  rootElement.style.display = "grid";
}

function userdata(data) {
  data.forEach(function (userInfo) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card";

    let userId = document.createElement("p");
    userId.id = "userId";
    userId.textContent = `User-Id = ${userInfo.id}`;
    let userEmail = document.createElement("p");
    userEmail.id = "userEmail";
    userEmail.textContent = `User-Email-Id = ${userInfo.email}`;
    let userAvatar = document.createElement("img");

    userAvatar.src = userInfo.avatar;
    let userFirstName = document.createElement("p");
    userFirstName.id = "userFirstName";
    userFirstName.textContent = `User-First-Name = ${userInfo.first_name}`;
    let userLastName = document.createElement("p");
    userLastName.id = "userLastName";
    userLastName.textContent = `User-Last-Name = ${userInfo.last_name}`;

    cardDiv.append(userAvatar, userId, userFirstName, userLastName, userEmail);
    rootElement.append(cardDiv);
  });
}
