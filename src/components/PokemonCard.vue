<template>
    <div class="pokemon-card">
        <img :src="pokemon.front_default" :style="imageStyle">
        <p :style="nameStyle">{{ pokemon.name }}</p>
        <input type="text" v-model="guess" :disabled="guessed" v-if="!guessed">
            <SendButton :disabled="guessed" :text="'Descubrir'" @click="checkAnswer" v-if="!guessed"></SendButton>      
    </div>
</template>


<script>
import SendButton from './SendButton.vue'

export default {
    props: {
        pokemon: {
            type: Object,
            required: true,
        },
    },
    components: {
        SendButton
    },
    data() {
        return {
            guessed: false,
            guess: ''
        };
    },
    computed: {
        imageStyle() {
            return {
                filter: this.guessed ? 'none' : 'blur(10px) grayscale(100%)'
            };
        },
        nameStyle() {
            return {
                filter: this.guessed ? 'none' : 'blur(3px) grayscale(100%)' 
             };
        }
    },
    methods: {
        checkAnswer() {
            if (this.guess.toLowerCase() === this.pokemon.name.toLowerCase()) {
                this.guessed = true;
                this.$emit('pokemonGuessed');
            } else {
                alert('Inténtalo de nuevo')
            }
        }
    }
}
</script>


<style scoped>

input {
    border-radius: 8px;
    border: none;
    box-shadow: 1px 1px 5px #e2e2e2;
    height: 1.2rem;
    margin-bottom: 8px;
}

img {
    width: 150px;
    height: 150px;
}

p {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.pokemon-card {
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 5px #e2e2e2;
    padding: 1%;
    border-radius: 16px;
    transition: 180ms;
}

.pokemon-card:hover {
    transform: scale(1.1);
}

</style>