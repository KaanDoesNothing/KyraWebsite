import axios from "axios";
import {
  Store
} from "vuex";
import { BASE_API_URL } from "~/config";
import { stateInterface } from "~/interfaces/state";

export const state = (): stateInterface => ({
    client_info: {
        user: {
            username: "Unknown"
        }
    }
});

export const getters = {
    get_client_info(state: stateInterface) {
        return state.client_info;
    } 
}

export const actions = {
    //@ts-ignore
    async fetch_client_info({commit}) {
        let res = await axios.get(`${BASE_API_URL}/client_info`);

        commit("set_client_info", res.data);
    }
}

export const mutations = {
    set_client_info(state: stateInterface, data: stateInterface["client_info"]) {
        state.client_info = data;
    }
}