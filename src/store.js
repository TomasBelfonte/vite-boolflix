import { reactive } from "vue";
import axios from "axios";

export const store = reactive({

        movieList: [],
        tvList:[],
        inputTitle: "",
        appliedFilters: null,
        appliedFiltersTv: null,
        filtersOn: null,
        filtersOnTv: null,
        moviePagination:{}
    });

export function recoveryMovie (movie) {

    axios.get("https://api.themoviedb.org/3/search/movie/?api_key=1e5c8bbd04cf0df6203a78af9152af23", {

        params: {
            query: store.inputTitle
        }
    }) 
    
    .then((resp) => {

    store.movieList = resp.data.results;


    

    console.log(resp);


    })

};

export function recoveryTv (tv) {

    axios.get("https://api.themoviedb.org/3/search/tv/?api_key=1e5c8bbd04cf0df6203a78af9152af23", {

        params: {
            query: store.inputTitle
        }
    }) 
    
    .then((resp) => {

    store.tvList = resp.data.results;


    

    console.log(resp);


    })

};