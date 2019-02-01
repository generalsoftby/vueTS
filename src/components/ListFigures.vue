<script lang="ts">
    import Vue       from 'vue';
    import { State } from 'vuex-class';
    import Component from 'vue-class-component';

    import { ListFiguresState } from '@/types';

    const namespace = 'figures';

    @Component({})
    export default class AddFigureForm extends Vue {
        @State(namespace) state: ListFiguresState;

        readonly columns = ['type', 'area'];
    }
</script>

<template>
    <div>
        <b-table :items="state.figures"
                 :fields="columns"
                 :bordered="true"
                 :striped="true"
                 :hover="true"
        />
        <router-link :to="{ name: 'statistics' }">
            Stats
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
    .b-table {
        margin-top: 50px;
    }
</style>
