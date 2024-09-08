//Social:Discord
function copyToClipboard(text) {
  const name = document.createElement("textarea");
  name.value = text;
  document.body.appendChild(name);
  name.select();
  document.execCommand("copy");
  document.body.removeChild(name);

  const button = document.querySelector("button.discord");
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