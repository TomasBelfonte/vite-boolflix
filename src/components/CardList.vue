<template>
    
    <div class="bg-dark">
        <div class="container">
            <div class="row d-flex ">
                <div class="col d-flex" v-for="(single, i) in store.movieList" :key="i">
                    <SingleCard :movieDetail="single" ></SingleCard>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from "axios";

import SingleCard from "./SingleCard.vue";
import { store, recoveryMovie} from "../store.js"

export default {
    components: { SingleCard },
    

    data() {
        return {
            store,
        };

        
    },

    methods: {

        
    },

    mounted () {
    },

    created () {
        recoveryMovie()
    }
}
</script>

<style scoped>
    
</style>