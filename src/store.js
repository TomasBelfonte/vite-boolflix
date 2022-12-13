import { reactive } from "vue";
import axios from "axios";

export const store = reactive({

        movieList: [],
        inputTitle: "results.title",
        appliedFilters: null,
        filtersOn: null
    });

export function recoveryMovie (movie) {

    axios.get("https://api.themoviedb.org/3/movie/550?api_key=1e5c8bbd04cf0df6203a78af9152af23&query=", {

        params: {
            title: store.inputTitle
        }
    }) 
    
    .then((results) => {

    store.movieList = results;
    

    console.log(store);


    })

};