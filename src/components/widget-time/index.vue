<template>
    <div class="widget-time">
        <div class="widget-time__panel buttons">
            <b-button
             @click="getTime('Europe/Moscow')"
             type="is-info is-light">Moscow</b-button>
             <b-button
             @click="getTime('America/New_York')"
             type="is-info is-light">New-York</b-button>
        </div>
        <div class="widget-time__content">
            <p>{{ GETTERS_TIME_ZONE !== null ? GETTERS_TIME_ZONE.formatted.split(' ')[1] : 'Нет данных' }}</p>
        </div>
    </div>    
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "WidgetTime",
    data() {
        return {
            timeZone: 'Europe/Moscow'
        }
    },
    computed: {
        ...mapGetters(['GETTERS_TIME_ZONE']),
    },
    mounted() {

        this.GET_TIME(this.timeZone)
        .then(() => this.$emit('loading', false))
        .catch(() => this.$emit('loading', false))
        
    },
    methods: {
        ...mapActions(['GET_TIME']),
        getTime(zone) {

            this.$emit('loading', true)

            this.GET_TIME(zone)
            .then(() => this.$emit('loading', false))
            .catch(() => this.$emit('loading', false))

        }
    },
}
</script>
<style scoped>
.widget-time {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>