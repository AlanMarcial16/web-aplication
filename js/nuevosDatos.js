const url = new URL(window.location.href);
const username = url.searchParams.get("username");

document.querySelector("#username").value = username;
document.querySelector(
  "#back-btn"
).href = `/infoUsuario.html?username=${username}`;
