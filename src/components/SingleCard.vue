<template lang="">
    <div class="d-flex">
        <div class="card my-5 text-center" style="width: 13rem;" >                        
            <img class="card-img-top" :src="'https://image.tmdb.org/t/p/w342/' + movieDetail.poster_path" alt="Card image cap">
            <div class="card-body">
                <p class="card-text">Title: {{movieDetail.title}}</p>
                <p class="card-text">Original Title: {{movieDetail.original_title}}</p>
                <p class="card-text">Release date: {{movieDetail.release_date}}</p>
                <p class="card-text">Original Language: {{movieDetail.original_language}}</p>
                <p class="card-text">Vote: {{movieDetail.vote_average}}</p>
            </div>                    
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            movieDetail: Object
        }
}
</script>
<style scoped>
    
</style>