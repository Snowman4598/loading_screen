document.addEventListener("DOMContentLoaded", () => {
  const players = [
    "PlayerOne", "PlayerTwo", "PlayerThree"
  ];
  const staff = [
    "AdminMike", "ModSarah"
  ];

  const playerList = document.getElementById("player-list");
  const staffList = document.getElementById("staff-list");

  players.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p;
    playerList.appendChild(li);
  });

  staff.forEach(s => {
    const li = document.createElement("li");
    li.textContent = s;
    staffList.appendChild(li);
  });

  // Rotate loading messages for style
  const messages = [
    "Loading resources...",
    "Downloading content...",
    "Connecting to server...",
    "Preparing world..."
  ];
  let i = 0;
  setInterval(() => {
    document.querySelector(".status-text").textContent = messages[i % messages.length];
    i++;
  }, 3000);
});
