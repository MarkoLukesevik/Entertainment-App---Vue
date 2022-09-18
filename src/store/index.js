import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
    state: {
        data: []
    },

    getters: {
    },

    mutations: {
    },

    actions: {
        async fetchData() {
            try {
                const response = await axios.get('/data.json');
                this.state.data = response.data;
                console.log(this.state.data)
            } catch (error) {
                console.log(error);
            }
        }
    },

    modules: {
    }
})
