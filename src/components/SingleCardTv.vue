<template lang="">
    <div class="d-flex">
        <div class="card my-5 text-center border-danger position-relative" style="width: 13rem;" >                        
            <img class="tb-card-image card-img-top bg-black" :src="getBackdropImage(tvDetail.poster_path)" alt="Card image cap">
            <div class="tb-card-detail card-body position-absolute top-0 bottom-0 overflow-auto bg-light">
                <p class="card-text text-danger">Title: {{tvDetail.name}}</p>
                <p class="card-text text-danger">Original Title: {{tvDetail.original_name}}</p>
                <p class="card-text text-danger">Release date: {{tvDetail.first_air_date}}</p>
                <p class="card-text text-danger">Original Language: {{tvDetail.original_language}}</p>
                <p class="card-text text-danger">Vote: {{tvDetail.vote_average}}</p>
                <div class="card-text text-danger">
                    Vote:
                    <i v-for="star in 5" class="fa-star" :class="star <= Math.ceil(tvDetail.vote_average / 2) ? 'fa' : 'fa-regular'"></i>
                </div>
            </div>                    
        </div>
    </div>

    
</template>
<script>
    export default {
        props: {
            tvDetail: Object
        },


        methods: {
            getBackdropImage (backdropPath) {

                console.log('backdrop path vale', backdropPath);

                if (backdropPath == null) {

                    return '/the-lich-king.png'; 

                } else {

                    return 'https://image.tmdb.org/t/p/w342/' + backdropPath;
                }
            }
    }

}
</script>
<style scoped>

    .tb-card-image {
        display: flex;
        flex-grow: 1;
    }

    .tb-card-detail {
        opacity: 0;
    }
    .card:hover .tb-card-detail {
        opacity: 1 !important;
        
    }

    

</style>