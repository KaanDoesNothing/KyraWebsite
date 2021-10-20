import Vuex from "vuex";

const store = new Vuex.Store({
    state: {
        session: {}
    },
    mutations: {
        setSession: (state, session) => {
            console.log(session);
            state.session = session.user;
        }
    },
    getters: {
        session: (state) => {
            return state.session;
        }
    }
});

export default store;