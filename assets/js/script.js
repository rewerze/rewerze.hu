//Social:Discord
function copyToClipboard(text) {
  const name = document.createElement("textarea");
  name.value = text;
  document.body.appendChild(name);
  name.select();
  document.execCommand("copy");
  document.body.removeChild(name);

  const button = document.querySelector("button");
  button.classList.remove("discord");
  button.classList.add("btn-outline-success");
  document.getElementById("discord-img").src =
    "../assets/images/discord_green.svg";
  document.getElementById("discord").innerHTML = "Név kimásolva!";

  setTimeout(() => {
    button.classList.remove("btn-outline-success");
    button.classList.add("discord");
    document.getElementById("discord-img").src =
      "../assets/images/discord_purple.svg";
    document.getElementById("discord").innerHTML = "Discord";
  }, 1500);
}
//Nav: Search
function Search() {
  document
    .getElementById("endpointForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      var endpoint = document.getElementById("endpointInput").value.trim();
      if (endpoint !== "") {
        window.location.href = endpoint;
      } else {
        alert("Kérjük, írja be az oldal végpontját!");
      }
    });
}

//Nav:Import
function importNav(path) {
  fetch(path)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("target").innerHTML = html;
    });
}
