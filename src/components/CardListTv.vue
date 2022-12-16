<template>

    <div class="bg-dark">
        <div class="container">
            <div class="row d-flex ">
                <div class="col d-flex" v-for="(single, i) in store.tvList" :key="i">
                    <SingleCardTv :tvDetail="single" ></SingleCardTv>
                </div>


            </div>
        </div>
    </div>

</template>

<script>
import axios from "axios";

import SingleCardTv from "./SingleCardMovie.vue";
import { store, recoveryTv,} from "../store.js"


export default {
    components: { SingleCardTv },
    

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
        recoveryTv()
        
    }
}
</script>

<style scoped>
    
</style>