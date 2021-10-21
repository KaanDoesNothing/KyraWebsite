import Vuex from "vuex";

const store = new Vuex.Store({
    state: {
        session: {},
        clientInfo: undefined
    },
    mutations: {
        setSession: (state, session) => {
            console.log(session);
            state.session = session.user;
        },
        setClientInfo: (state, clientInfo) => {
            state.clientInfo = clientInfo;
        }
    },
    getters: {
        session: (state) => {
            return state.session;
        },
        clientInfo: (state) => {
            return state.clientInfo;
        }
    }
});

export default store;