const url = new URL(window.location.href);
const userName = url.searchParams.get("username");
const token = window.localStorage.getItem("token")

function setUsersForm(newUser, newPass)
{
    let html = 
    `<div class="col-sm-12 col-md-10">
    <fieldset class="row border mb-4">
      <legend class="font-weight-bold w-auto">Datos generales</legend>
      <div class="form-group col-md-6 col-sm-12">
        <label for="nombreproyecto" class="font-weight-bold">Nombre usuario:</label>
        <input type="text" class="form-control" id="newUser" placeholder="Introducir nombre de usuario" name="newUser" required>
      </div>
      <div class="form-group col-md-6 col-sm-12">
        <label for="descripcion" class="font-weight-bold">Contraseña:</label>
        <input type="password" class="form-control" id="newPass" placeholder="Introducir contraseña" name="newUser" required>
      </div>
    </fieldset>
    <div class="row">
      <button type="submit" class="col btn btn-dark mr-2 my-4">Crear Usuario</button>
      <a href="/dashboard.html" class="col btn btn-outline-secondary ml-2 my-4">Cancelar</a>
    </div>
  </div>  `
  document.querySelector("#form").innerHTML += html 
}

async function setUsers(){


    let Response = await fetch('https://wsrecursoshumanos.azurewebsites.net/api/usuarios',{
        method: 'POST',
        headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`},
    }) 

    Response = await Response.json() 

    if(Response.code != 207){
        Swal.fire({
            title: 'ERROR',
            text: Response.message,
            icon: 'warning'
        })
    }
    else
    {
        const usuarios = JSON.parse(Response.data) 
        //const usuario = usuarios[userName]  

        for(let key in usuarios )
        {
            setUsersForm(key, usuarios[key])
        }
    }

}

setUsers();