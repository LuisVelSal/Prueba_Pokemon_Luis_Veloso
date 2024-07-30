<template>

  <div class="container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="Imagen Pokemon" class="pokemon-image">
    <h1>¿Quien es ese Pokémon?</h1>
    <h3 v-if="count>0">Pokemones descubiertos: {{ count }}</h3>
    <div class="pokemon-container">
      <PokemonCard v-for="(pokemon, index) in pokemonList" :key="index" :pokemon="pokemon" @pokemonGuessed="incrementCount" />
    </div>
  </div>

</template>


<script>

import PokemonCard from "./components/PokemonCard.vue";
import { getPokemon, getPokemonInfo } from "./helpers/fetchPokemon.js";

export default {
  name: "App",
  components: {
    PokemonCard
  },
  data() {
    return {
      pokemonList: [], // Lista de pokemones provenientes de la API
      count: 0, // Contador de Pokemones adivinados
    };
  },
  methods: {
    async getPokemon() {
      const getInfo = await getPokemon();
      await getPokemonInfo(getInfo, this.pokemonList)
    },
    incrementCount() {
      this.count++;
    },
  },
  mounted() {
    this.getPokemon();
  },
};
</script>



<style>

#app {
  font-family: Avenir, Helvetica, sans-serif;
  text-align: center;
}

.container {
  margin: auto;
}

.pokemon-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: auto;
  padding: 1%;
}

h1 {
  margin-bottom: 2rem;
}

h3 {
  color: #3722a4;
}

.pokemon-image {
  width: 500px;
  height: 200px;
  margin-bottom: 10px;
}

</style>
