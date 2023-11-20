const list$$ = document.querySelector(".container");

for (let i = 1; i <= 151; i++) {
  //console.log(i);
  fetch("https://pokeapi.co/api/v2/pokemon/" + i)
    .then((response) => response.json())
    .then((data) => mostrarPokemon(data));
}

function mostrarPokemon(pokemon) {
  const div = document.createElement("div");
  div.classList.add("card");
  list$$.appendChild(div);
  div.innerHTML = `
        <div class="pokemon">
            <div class="header">
                <h2 class="text-name">${pokemon.name}</h2>
                <p class="id">${pokemon.id}</p>
            </div>
            <img src="${pokemon.sprites.other["official-artwork"].front_default}"  alt="${pokemon.name}" class="image"> 
        </div>
        <div class="type">
            <p class="type1">${pokemon.types[0].type.name}</p>
            <p class="type2">${pokemon.types[1].type.name}</p>
        </div>
        <div class="moves">
            <h2 class="text-name">Moves</h2>
            <ol class="list">
                <div>
                    <ul>Ataque1</ul>
                    <ul>Ataque1</ul>
                </div>
                <div>
                    <ul>Ataque1</ul>
                    <ul>Ataque1</ul>
                </div>
            </ol>
        </div>
            `;
 
}

// ${pokemon.sprites.other.['official-artwork'].front_default}
