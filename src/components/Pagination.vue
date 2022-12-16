<template >
    <!-- qui utilizzo l'impostazione già pronta del pagination di bootstrap per creare i bottoni -->
    <div class="my-5">
        <nav aria-label="Page navigation example d-flex">
            <ul class="pagination justify-content-center">
                <li class="page-item"><a class="page-link" href="#" @click="previousClick">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#" @click="previousClick">{{currentPage}}</a></li>
                <li class="page-item"><a class="page-link" href="#" @click="nextClick">Next</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            default: 1
        }
    },
    
    data() {
        return {
            
        }
    },

    methods: {
        previousClick() {
            this.$emit("newPage", this.currentPage - 1)
        },

        nextClick() {
            this.$emit("newPage", this.currentPage + 1)
        }
    },
}
</script>

<style scoped>
    
</style>