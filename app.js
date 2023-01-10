// Acessando API
fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
.then(response => response.json())
.then(allPokemons => {
    pokemon = [];

    // Mapeando os dados do array
    allPokemons.results.map((value) => {
        fetch(value.url)
        .then(response => response.json())
        .then(pokemonSingle => {
            // Pegando os valores necessários
            pokemon.push({
                name: value.name,
                image: pokemonSingle.sprites.front_default
            })

            // Comparando a quantidade
            if(pokemon.length == 150){

                let pokemonClass = document.querySelector('.pokemons')

                pokemonClass.innerHTML = ""
                
                // Montando no HTML os dados recebidos
                pokemon.map((value) => {
                    pokemonClass.innerHTML += `
                        <div class="card">
                            <img src="${value.image}">
                            <h1>${value.name}</h1>
                        </div>
                    `
                })
            }
        })
    })
})
