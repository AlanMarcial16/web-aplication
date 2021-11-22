const url = new URL(window.location.href);
const username = url.searchParams.get("username");
const token = window.localStorage.getItem("token")

document.querySelector("#username").value = username;
document.querySelector(
  "#back-btn"
).href = `/infoUsuario.html?username=${username}`;

/*const body = JSON.stringify({
  username: `${e.target.querySelector('[name="username"]').value}`,
  nombre: `${e.target.querySelector('[name="nombre"]').value}`,
  correo: `${e.target.querySelector('[name="correo"]').value}`,
  telefono: `${e.target.querySelector('[name="telefono"]').value}`,
  rol: `${e.target.querySelector('[name="rol"]').value}`
})*/

function updateUsersInfoForm(username, nombre, correo, telefono, rol){
  let html = 
  `<div class="col-sm-12 col-md-10">
        <fieldset class="row border mb-4">
          <legend class="font-weight-bold w-auto">Datos generales</legend>
          <div class="form-group col-md-6 col-sm-12">
            <label for="nombreproyecto" class="font-weight-bold">Nombre usuario:</label>
            <input type="text" disabled class="form-control" id="username" placeholder="Introducir nombre de usuario" name="username" required>
          </div>
          <div class="form-group col-md-6 col-sm-12">
            <label for="descripcion" class="font-weight-bold">Nombre:</label>
            <input type="text" class="form-control" id="nombre" placeholder="Introducir contraseña" name="nombre" required>
          </div>
          <div class="form-group col-md-6 col-sm-12">
            <label for="descripcion" class="font-weight-bold">Correo:</label>
            <input type="text" class="form-control" id="correo" placeholder="Introducir contraseña" name="correo" required>
          </div>
          <div class="form-group col-md-6 col-sm-12">
            <label for="descripcion" class="font-weight-bold">Telefóno:</label>
            <input type="text" class="form-control" id="telefono" placeholder="Introducir contraseña" name="telefono" required>
          </div>
          <div class="form-group col-md-6 col-sm-12">
            <label for="descripcion" class="font-weight-bold">Rol:</label>
            <input type="text" class="form-control" id="rol" placeholder="Introducir contraseña" name="rol" required>
          </div>
        </fieldset>
        <div class="row">
          <button type="submit" class="col btn btn-dark mr-2 my-4">Modificar Datos</button>
          <a id="back-btn" href="#" class="col btn btn-outline-secondary ml-2 my-4">Cancelar</a>
        </div>
      </div>  `
    document.querySelector("#form").innerHTML += html
}

async function updateUsersInfo(){


  let Response = await fetch('https://wsrecursoshumanos.azurewebsites.net/api/usuariosinfo',{
      method: 'PUT',
      headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`},
  })

  Response = await Response.json() 
  console.log(Response)

}

updateUsersInfo();