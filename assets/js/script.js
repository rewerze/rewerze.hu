//Home:search
document
  .getElementById("search-button")
  .addEventListener("click", function (event) {
    var searchTerm = document.getElementById("search-input").value.trim(); // Keresési kifejezés lekérése és whitespace eltávolítása

    if (searchTerm !== "") {
      // Ha van beírt kifejezés
      var searchUrl = "/kereses/" + encodeURIComponent(searchTerm); // Összeállítjuk a keresési URL-t

      // Átirányítás a keresési URL-re
      window.location.href = searchUrl;
    } else {
      alert("Kérlek írj be valamit a kereséshez!"); // Ha nincs beírt kifejezés, jelenítse meg az üzenetet
    }
  });

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
