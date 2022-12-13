<template>
    <div>
        <Header></Header>
        <Filter @filtered="filterResult"></Filter>
        <CardList></CardList>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import CardList from './components/CardList.vue';
    import SingleCard from './components/SingleCard.vue';
    import Filter from './components/Filter.vue';
    import {store} from './store';

    export default {
        components: {Header, CardList, SingleCard, Filter},
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

    }
    },

    computed: {

    }
    
    }
</script>


<style lang="scss">
@use "./styles/general.scss"

</style>
