import vue from 'vue';
import Vuex from 'vuex'

import dodos from './modules/dodo.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        dodos
    }
});