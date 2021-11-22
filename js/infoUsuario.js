const url = new URL(window.location.href);
const username = url.searchParams.get("username");
const token = window.localStorage.getItem("token")

document.querySelector(
  "#btn-crear-datos"
).href = `/formNuevosDatos.html?username=${username}`;
document.querySelector(
  "#btn-modificar-datos"
).href = `/formModificarDatos.html?username=${username}`;

function displayUsersInfo(username, nombre, correo, telefono, rol){

  let html = 
  `<div class="mt-3 border-bottom">
  <div class="d-flex justify-content-around flex-wrap">
      <div class="mb-3 d-flex flex-column align-items-center">
          <p class="font-weight-bold">Usuario</p>
          <p id="username">${username}</p>
      </div>
      <div class="mb-3 d-flex flex-column align-items-center">
          <p class="font-weight-bold">Nombre</p>
          <p id="nombre">${nombre}</p>
      </div>
      <div class="mb-3 d-flex flex-column align-items-center flex-wrap">
          <p class="font-weight-bold">Correo</p>
          <p id="correo">${correo}</p>
      </div>
      <div class="mb-3 d-flex flex-column align-items-center">
          <p class="font-weight-bold">Teléfono</p>
          <p id="telefono">${telefono}</p>
      </div>
      <div class="mb-3 d-flex flex-column align-items-center">
          <p class="font-weight-bold">Rol</p>
          <p id="rol">${rol}</p>
      </div>
      
  </div>`
  document.querySelector("#lista").innerHTML += html 

}


async function requestUsersInfo(){

  let Response = await fetch ('https://wsrecursoshumanos.azurewebsites.net/api/usuariosinfo', {
  method: 'GET',
  headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`}
  })

  Response = await Response.json()
  
  if(Response.code != 207){
    Swal.fire({
        title: 'Datos erroneos',
        text: Response.message,
        icon: 'warning'
    })
  }
  else
  {
    //const usuarios = JSON.parse(Response.data) 
    const usuario = usuarios[userName]  

      displayUsersInfo(key, usuario[key])
  }



}

requestUsersInfo();
