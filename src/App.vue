<script lang="ts">
    import Vue       from 'vue';
    import Component from 'vue-class-component';
    import Navbar    from '@/components/Navbar.vue';


    @Component({
        components: {
            Navbar,
        }
    })
    export default class App extends Vue {
    }
</script>

<template>
    <div id="app">
        <Navbar/>
        <b-container>
            <router-view/>
        </b-container>
    </div>
</template>

<style lang="scss" scoped>
    #app {
        margin-bottom: 50px;
    }

    .container {
        margin-top: 50px;
    }
</style>

