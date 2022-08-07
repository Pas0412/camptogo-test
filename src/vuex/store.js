import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';


export default new Vuex.Store({
    state: {
        Provider: {},
        fid: 1,
    },
    getters,
    actions,
    mutations
});
