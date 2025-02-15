<script setup>
import { ref, computed } from 'vue'

const typeColors = { 
  normal: '#A8A77A', fire: '#EE8130', water: '#6390F0', 
  electric: '#F7D02C', grass: '#7AC74C', ice: '#96D9D6',
  fighting: '#C22E28', poison: '#A33EA1', ground: '#E2BF65',
  flying: '#A98FF3', psychic: '#F95587', bug: '#A6B91A',
  rock: '#B6A136', ghost: '#735797', dragon: '#6F35FC',
  dark: '#705746', steel: '#B7B7CE', fairy: '#D685AD'
};

const pokemonListDisplay = ref([]);
const searchQuery = ref('');
const offset = ref(0);
const limit = ref(10);


async function getPokemonDetails(id){
  try{
    const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
  }
  catch(error){
    console.error('Error fetching pokemon details:', error);
    return null;
  }
}


// async function renderAllPokemon(){
  
// }
async function fetchAllPokemon(){
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898`);
  const data = await response.json();
  return data.results;
}
async function renderAllPokemon(){
  const data = await fetchAllPokemon();
  const newPokemon = await Promise.all(
    data.map(async (pokemon, index) => {
      const id = index + 1;
      const details = await getPokemonDetails(id);
      return {
        id: id,
        name: pokemon.name,
        types: details?.types.map(t => t.type.name) || [],
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      };
    })
  );
  pokemonListDisplay.value = newPokemon;
}
const pokemonToShow=ref([]);
async function displayPokemon(){
  console.log(offset.value);
  console.log(limit.value); 
  const pokemonRender = pokemonListDisplay.value.slice(0, offset.value + limit.value);
  offset.value += limit.value;
  pokemonToShow.value = pokemonRender;
  return pokemonRender;
}

const filteredPokemon = computed( () =>{
  if(!searchQuery.value){
    return pokemonToShow.value;
  }
  return pokemonListDisplay.value.filter(pokemon => 
    pokemon.name.includes(searchQuery.value.toLowerCase())
  );
})
async function initializePokemon() {
  await renderAllPokemon();
  await displayPokemon();
}

initializePokemon();

// const detailsPokemonShow=ref([]);
// function showPokemonDetails(pokemon){
//   detailsPokemonShow.value=pokemon;
//   const popUp = document.querySelector('.pop-up');
//   popUp.style.display = 'block';
//   popUp.addEventListener('click', () => {
//     popUp.style.display = 'none';
//   });


import pokemonCard from './components/pokemonCard.vue';
</script>

<template>
  <div id="#app">
    <div class="search">
      <input type="text" v-model="searchQuery" id="search-input" placeholder="Search Pokemon">
    </div>
    <div class="container-pokemon">
      <pokemonCard 
        v-for="pokemon in filteredPokemon" 
        :key="pokemon.id" 
        :pokemon="pokemon" 
        :type-colors="typeColors"
      />
    </div>
    <div class="load-more">
      <button v-show="!searchQuery && offset < pokemonListDisplay.length" @click="displayPokemon" id="load-more">Load more</button>
    </div>
    <!-- <div class="pop-up" >
      <div class="pop-up-content" >
        <h2>{{pokemon.name}}</h2>
        <img :src="pokemon.image" :alt="pokemon.name">
        <p>{{pokemon.details}}</p>
      </div>
    </div> -->
  </div>
</template>


<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
.container-pokemon{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 1200px;
    margin: 0 auto;
    padding: 20px;
    gap:40px;
    
}
#load-more{
    display: flex;
    justify-self: center;
    align-items: center;
    background-color: aliceblue;
    padding: 10px;
    border-radius: 10px;
    
}

    
.type-container{
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;
    .type-pokemon{
        padding: 5px;
        border-radius: 5px;
        background-color: #f1f1f1;
        font-weight: bold;
    }
}
#search-input{
    display:flex;
    justify-self: center;
    border-radius: 15px;
    width: 600px;
    height: 50px;
    font-size: 15px;
    padding: 20px;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
