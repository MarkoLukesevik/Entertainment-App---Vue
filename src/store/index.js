import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
    state: {
        data: [],
        searchValue: ''
    },

    getters: {
        trending(state) {
            return state.data.filter(item => item.isTrending);
        },

        movies(state) {
            return state.data.filter(item => item.category === 'Movie');
        },

        series(state) {
            return state.data.filter(item => item.category === 'TV Series');
        },
    },

    mutations: {
        toggleBookmark(state, title) {
            const index = state.data.findIndex(item => item.title === title);
            state.data[index].isBookmarked = !state.data[index].isBookmarked;
        },
    },

    actions: {
        async fetchData() {
            try {
                const response = await axios.get('/data.json');
                this.state.data = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
})
