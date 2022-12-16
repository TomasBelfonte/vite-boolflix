<template lang="">
    <div class="d-flex">
        <div class="card my-5 text-center border-danger position-relative" style="width: 13rem;" >                        
            <img class="tb-card-image card-img-top bg-black" :src="getPosterImage(movieDetail.poster_path)" alt="Card image cap">
            <div class="tb-card-detail card-body position-absolute top-0 bottom-0 overflow-auto bg-light">
                <p class="card-text text-danger">Title: {{movieDetail.title}}</p>
                <p class="card-text text-danger">Original Title: {{movieDetail.original_title}}</p>
                <p class="card-text text-danger">Release date: {{movieDetail.release_date}}</p>
                <p class="card-text text-danger">Original Language: {{movieDetail.original_language}}</p>
                <p class="card-text text-danger">Vote: {{movieDetail.vote_average}}</p>
                <div class="card-text text-danger">
                    Vote:
                    <i v-for="star in 5" class="fa-star" :class="star <= Math.ceil(movieDetail.vote_average / 2) ? 'fa' : 'fa-regular'"></i>
                </div>
            </div>                    
        </div>
    </div>

    
</template>
<script>
    export default {
        props: {
            movieDetail: Object
        },


        methods: {
            getPosterImage (posterPath) {

                console.log('poster path vale', posterPath);

                // fi qua è ccorretto

                // 'https://image.tmdb.org/t/p/w342/' + movieDetail.poster_path
                /*
                if (!src === "") {
                    src="'https://image.tmdb.org/t/p/w342/' + movieDetail.poster_path"
                } else {
                    src = '/vite.svg'
                }

                return (imageApplied);
                */

                if (posterPath == null) {

                    return '/the-lich-king.png'; 

                } else {

                    return 'https://image.tmdb.org/t/p/w342/' + posterPath;
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