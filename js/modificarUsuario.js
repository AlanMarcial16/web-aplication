const url = new URL(window.location.href);
const oldUserName = url.searchParams.get("oldUsername");

document.querySelector("#oldUser").value = oldUserName;
