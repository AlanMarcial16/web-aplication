const url = new URL(window.location.href);
const userName = url.searchParams.get("username");

document.querySelector(
  "#btn-crear-datos"
).href = `/formNuevosDatos.html?username=${username}`;
document.querySelector(
  "#btn-modificar-datos"
).href = `/formModificarDatos.html?username=${username}`;
