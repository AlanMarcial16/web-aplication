const url = new URL(window.location.href);
const oldUserName = url.searchParams.get("oldUsername");
const token = window.localStorage.getItem("token")

document.querySelector("#oldUser").value = oldUserName;


function updateUsersForm()
{
    let html = `<div class="col-sm-12 col-md-10">
    <fieldset class="row border mb-4">
      <legend class="font-weight-bold w-auto">Datos generales</legend>
      <div class="form-group col-md-6 col-sm-12">
        <label for="nombreproyecto" class="font-weight-bold">Nombre usuario actual:</label>
        <input type="text" disabled class="form-control" id="oldUser" placeholder="Introducir nombre de usuario actual" name="oldUser" required>
      </div>
      <div class="form-group col-md-6 col-sm-12">
        <label for="nombreproyecto" class="font-weight-bold">Nuevo nombre usuario:</label>
        <input type="text" class="form-control" id="newUser" placeholder="Introducir nuevo nombre de usuario" name="newUser" required>
      </div>
      <div class="form-group col-md-6 col-sm-12">
        <label for="descripcion" class="font-weight-bold">Nueva contraseña:</label>
        <input type="password" class="form-control" id="newUser" placeholder="Introducir nueva contraseña" name="newUser" required>
      </div>`
    document.querySelector("#form").innerHTML += html
}

async function updateUsers(){


    let Response = await fetch('https://wsrecursoshumanos.azurewebsites.net/api/usuarios',{
        method: 'PUT',
        headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`},
    })
  
    Response = await Response.json() 
    console.log(Response)
  
  }
  
  updateUsers();