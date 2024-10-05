const url = "https://jsonplaceholder.typicode.com/posts";

async function puxarDados(){
    let response = await fetch(url)
    console.log(response)
    let data = await response.json()
    console.log(data)
}
puxarDados()