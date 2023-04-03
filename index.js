console.log("Patrick was here.")

fetch ("localhost:3000/posts")
.then(resp => resp.json()
.then(data => console.log(data));