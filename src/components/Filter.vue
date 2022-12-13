<template >
    <form class="row g-3 d-flex text-center justify-content-center" @submit.prevent="search">
        <div class="col-md-2 ms-3">
            <label for="inputTitle" class="form-label">Title</label>
            <input type="text" class="form-control" id="input-title" placeholder="Titolo" v-model="store.inputTitle">
        </div>
        <div class="col-md-2">
            <label for="inputOriginalTitle" class="form-label">Original Title</label>
            <input type="text" class="form-control" id="input-original-title" placeholder="Titolo Originale" v-model="results.original_title">
        </div>
        <div class="col-md-2">
            <label for="inputLanguage" class="form-label">Original Language</label>
            <input type="text" class="form-control" id="input-language" placeholder="Lingua Orginale" v-model="results.original_language">
        </div>
        <div class="col-md-2">
            <label for="inputReleaseDate" class="form-label">Release date</label>
            <input type="text" class="form-control" id="input-realese-date" placeholder="Data di rilascio" v-model="results.release_date">
        </div>
        <div class="col-md-2">
            <label for="inputVote" class="form-label">Gender</label>
            <input type="text" class="form-control" id="input-vote" placeholder="Genere" v-model="results.vote_average">
        </div>
        
        <div class="d-flex justify-content-center m-5 gap-3">
            <button type="reset" class="btn btn-danger">Resetta</button>
            <button type="submit" class="btn btn-primary">Cerca</button>
        </div>
    </form>

    

    <div class="d-flex justify-content-center">
        <div class="alert alert-primary " role="alert">
        Trovati {{total_results}} Titoli
        per un totale di {{total_pages}} pagina/e.
        </div>
    </div>
</template>

<script>
import {store, recoveryMovie } from "../store";

export default {
    data() {
        return {
            store,
            results: {
                poster_path:"",
                release_date:"",
                original_title:"",
                title:"",
                original_language:"",
                vote_average:""
            }
        };
    },
    emits: ["filtered"],
    methods: {
        search () {
            recoveryMovie();
            this.$emit("filtered", {...this.results});
        }
    }

}
</script>

<style scoped>
    
</style>