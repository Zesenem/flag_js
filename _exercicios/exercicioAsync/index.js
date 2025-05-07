let output = document.querySelector("#output");

fetch("https://randomuser.me/api/?results=30")
  .then((resp) => resp.json())
  .then((data) => showUsers(data.results))
  .catch(() => {
    output.textContent = "Failed to load data!";
  })
  .finally(() => console.log("Request finished!"));

function showUsers(users) {
  output.innerHTML = "";

  users
    .filter((user) => user.gender === "female")
    .forEach((user) => {
      let {
        name: { title, first, last },
        email,
        phone,
        location: { city, timezone },
        picture: { medium },
      } = user;

      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img class="avatar" src="${medium}" alt="${first} ${last}">
        <div class="name">${title} ${first} ${last}</div>
        <div class="info">
          <span><strong>Email:</strong> ${email}</span>
          <span><strong>Phone:</strong> ${phone}</span>
          <span><strong>City:</strong> ${city}</span>
          <span><strong>Timezone:</strong> ${timezone.description || timezone.offset}</span>
        </div>
      `;

      output.appendChild(card);
    });
}
