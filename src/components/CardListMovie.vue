<template>

    <div class="bg-dark">
        <div class="container">
            <div class="row d-flex ">
                <div class="col d-flex" v-for="(single, i) in store.movieList" :key="i">
                    <SingleCardMovie :movieDetail="single" ></SingleCardMovie>
                </div>


            </div>
        </div>
    </div>

</template>

<script>
import axios from "axios";

import SingleCardMovie from "./SingleCardMovie.vue";
import { store, recoveryMovie,} from "../store.js"


export default {
    components: { SingleCardMovie, },
    

    data() {
        return {
            store,
        };

        
    },

    methods: {

        // theNewPage (movieChanged) {
        //     console.log( "azione di modifica pagina ricevuto da emit di pagination" )
        //     this.store.currentPage = movieChanged;

        //     recoveryMovie (movieChanged);
        // },        
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