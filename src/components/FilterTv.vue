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

    
</template>

<script>
import {store, recoveryTv } from "../store";

export default {
    data() {
        return {
            store,
        };
    },
    emits: ["filteredTv"],
    methods: {
        searchTv () {
            
            console.log('emit');
            this.$emit("filteredTv");
        }
    }

}
</script>

<style scoped>
    
</style>