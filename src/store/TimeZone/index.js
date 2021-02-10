import axios from 'axios'

export default {
    state: {

        timeZone: null

    },
    mutations: {

        UPDATE_TIME_ZONE(state, data) {
            state.timeZone = data
        }

    },
    actions: {

        async GET_TIME(ctx, zone) {

            try {
                
                const res = await axios.get(`http://api.timezonedb.com/v2.1/get-time-zone?key=1SAWNXHW8XT6&format=json&by=zone&zone=${zone}`);

                await ctx.commit('UPDATE_TIME_ZONE', res.data)

            } catch(e) {

                throw e

            }

        }

    },
    getters: {

        GETTERS_TIME_ZONE(state) {
            return state.timeZone
        }
        
    }
}