const state = {
    dodos: [],
    total: 0,
    finishedDodos: 0,
    inProgressDodos: 0,
    canceledDodos: 0
}

const mutations = {
    CREATE_NEW_DODO(state, dodo){
        state.dodos.push({
            id: state.total + 1,
            title: dodo.title,
            description: dodo.description
        });
        
        state.total++;
        state.inProgressDodos++;
    },
    COMPLETE_DODO(state, id){
        state.dodos = state.dodos.filter(dodo => dodo.id != id);
        state.inProgressDodos--;
        state.finishedDodos++;
    },
    REMOVE_DODO(state, id){
        state.dodos = state.dodos.filter(dodo => dodo.id != id);
        state.inProgressDodos--;
        state.canceledDodos++;
    }
}

const actions = {
    createNewDodo({commit}, dodo){
        commit('CREATE_NEW_DODO', dodo);
    },
    finishDodo({commit}, id){
        commit('COMPLETE_DODO', id);
    },
    deleteDodo({commit}, id){
        commit('REMOVE_DODO', id);
    }
}

const getters = {
    dodos: state => {
        return state.dodos;
    },
    totalDodos: state => {
        return state.total;
    },
    finishedDodos: state => {
        return state.finishedDodos;
    },
    inProgressDodos: state => {
        return state.inProgressDodos;
    },
    canceledDodos: state => {
        return state.canceledDodos;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}