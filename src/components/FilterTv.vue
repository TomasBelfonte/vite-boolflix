<template >
    <form class="row g-3 d-flex text-center justify-content-center bg-black mt-0" @submit.prevent="searchTv">
        <div>
            <h1 class="text-danger fw-bold" >Serie Tv</h1>
        </div>
        <div class="col-md-2 ms-3">
            <label for="inputTitle" class="form-label">Title</label>
            <input type="text" class="form-control" id="input-title" placeholder="Titolo" v-model="store.inputTitle">
        </div>

        <div class="d-flex justify-content-center m-5 gap-3">
            <button type="reset" class="btn btn-danger">Resetta</button>
            <button type="submit" class="btn btn-primary">Cerca</button>
        </div>
    </form>

    

    <!-- <div class="d-flex justify-content-center bg-black pb-5">
        <div class="alert alert-primary " role="alert">
        Trovati {{store.moviePagination.total_results}} Titoli
        per un totale di {{store.moviePagination.total_pages}} pagina/e.
        </div>
    </div> -->
</template>

<script>
import {store, recoveryTv } from "../store";

export default {
    data() {
        return {
            store,
            results: {
                backdrop_path:"",
                first_air_date:"",
                original_name:"",
                name:"",
                original_language:"",
                vote_average:""
            }
        };
    },
    emits: ["filteredTv"],
    methods: {
        searchTv () {
            recoveryTv();
            this.$emit("filteredTv", {...this.results});
        }
    }

}
</script>

<style scoped>
    
</style>