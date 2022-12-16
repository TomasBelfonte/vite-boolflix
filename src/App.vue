<template>
    <div>
        <Header></Header>
    </div >
    <div class="d-flex justify-content-center bg-black" >
        <FilterFilm @filtered="filterResult"></FilterFilm>
        <FilterTv @filteredTv="filterResultTv"></FilterTv>        
    </div>

    <div class="d-flex justify-content-center bg-black mt-0 pt-0">        
        <div class="flex-grow-1">
            <CardListMovie></CardListMovie>
            <CardListTv></CardListTv>
        </div>
    </div>
    
</template>

<script>
    import Header from './components/Header.vue';
    import CardListMovie from './components/CardListMovie.vue';
    import CardListTv from './components/CardListTv.vue';
    import SingleCardMovie from './components/SingleCardMovie.vue';
    import SingleCardTv from './components/SingleCardTv.vue'
    import FilterFilm from './components/FilterFilm.vue';
    import FilterTv from './components/FilterTv.vue'
    import {recoveryTv, store} from './store';

    export default {
        components: {Header, CardListMovie, SingleCardMovie, FilterFilm, FilterTv, SingleCardTv, CardListTv},
        data() {
            return {
                store
            };
        },

    methods: {
    filterResult (filtersOn) {
        this.store.appliedFilters = filtersOn

        recoveryMovie ();

        console.log (filtersOn);

    },

    filterResultTv () {        

        console.log('emit arrivato');

        recoveryTv();

        //console.log (filtersOnTv);

    }    
    },

    computed: {

    }
    
    }
</script>


<style lang="scss">
@use "./styles/general.scss"

</style>
