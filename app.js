// Acessando API
fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
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
            if(pokemon.length == 151){

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

document.querySelector('#search-input').addEventListener('input', filterList);

function filterList(){

	const searchInput = document.querySelector('#search-input');
	const filter = searchInput.value.toLowerCase();
	const listItems = document.querySelectorAll('.card');

	listItems.forEach((item) => {
		let text = item.textContent;

		if(text.toLowerCase().includes(filter.toLowerCase())){
			item.style.display = '';
		}else{
			item.style.display = 'none';
		}	
	});
}
