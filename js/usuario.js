const aplication = document.querySelector('.container')
const getUrl = new URLSearchParams(window.location.search)
id = getUrl.get('id')
//const url = 'http://jsonplaceholder.typicode.com/users'
console.log(`${url}/${id}`)
fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {
    const name = document.createElement('p')
    name.innerHTML = data.name
    const email = document.createElement('p')
    email.innerHTML = data.email
    aplication.appendChild(name)
    aplication.appendChild(email)
})
.catch (err => console.log(err))