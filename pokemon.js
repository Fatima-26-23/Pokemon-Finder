const searchBtn = document.getElementById("searchBtn");
const pokemonInput = document.getElementById("pokemonInput");
const message = document.getElementById("message");
const card = document.getElementById("card");

searchBtn.addEventListener("click", getPokemon);

pokemonInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    getPokemon();
  }
});

async function getPokemon() {
  const name = pokemonInput.value.trim().toLowerCase();

  if (!name) {
    message.textContent = "Please enter a pokemon name or ID.";
    card.classList.add("hidden");
    return;
  }

  message.textContent = "Loading...";
  card.classList.add("hidden");

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!response.ok) {
      throw new Error("Pokemon not found");
    }

    const data = await response.json();
    showPokemon(data);
    message.textContent = "";

  } catch (error) {
    message.textContent = "Pokemon not found. Try another name or ID.";
  }
}

function showPokemon(data) {
  document.getElementById("name").textContent = data.name.toUpperCase();
  document.getElementById("image").src = data.sprites.front_default;
  document.getElementById("id").textContent = data.id;
  document.getElementById("height").textContent = data.height;
  document.getElementById("weight").textContent = data.weight;

  const types = data.types.map(t => t.type.name).join(", ");
  document.getElementById("types").textContent = types;

  const abilities = data.abilities.map(a => a.ability.name).join(", ");
  document.getElementById("abilities").textContent = abilities;

  card.classList.remove("hidden");
}