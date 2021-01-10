let filmList = document.createElement("ul")
document.getElementsByTagName("body")[0].appendChild(filmList)

fetch('https://swapi.dev/api/films/')
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        let array = data.results
        const filmInfo = array.map(({title, episode_id, opening_crawl, characters}) => ({episode_id, title, opening_crawl, characters}))

        for (let i =0; i < filmInfo.length; i++) {
            let filmName = document.createElement("li")
            filmList.appendChild(filmName)
            filmName.className = "filmName"
            filmName.innerHTML += `Episode: ${filmInfo[i].episode_id}, ${filmInfo[i].title},<br>${filmInfo[i].opening_crawl}`

            let arrayCharacters = filmInfo[i].characters
            let filmCharactersList = document.createElement("ul")
            filmName.appendChild(filmCharactersList)
            filmCharactersList.innerText = "Characters:"

            for (let i = 0; i < arrayCharacters.length; i++) {
                let filmCharactersItem = document.createElement('li')
                filmCharactersList.appendChild(filmCharactersItem)
                fetch(arrayCharacters[i])
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        filmCharactersItem.innerHTML += data.name
                    });
            }
        }
    });