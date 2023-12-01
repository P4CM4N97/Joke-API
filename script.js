const chiste = document.getElementById("chiste");
const boton = document.getElementById("boton");
const punchline = document.getElementById("punchline");
const url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist`

const getJoke = () => {
    fetch(url)
    .then(response => response.json())
    .then((item) => {
        if (item.joke === undefined) {
            chiste.innerText = `${item.setup}`
            punchline.innerText = `${item.delivery}`

            
        } else {
            chiste.innerText = `${item.joke}`
            punchline.innerText = ""
        }
    })
}

boton.addEventListener("click", getJoke)



