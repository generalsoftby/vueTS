<script lang="ts">
    import Vue                  from 'vue';
    import { State }            from 'vuex-class';
    import { ListFiguresState } from '@/types';
    import Component            from 'vue-class-component';

    const namespace = 'figures';

    @Component({})
    export default class AddFigureForm extends Vue {
        @State(namespace) state: ListFiguresState;

        readonly columns = ['type', 'area'];
    }
</script>

<template>
        <b-table :items="state.figures"
                 :fields="columns"
                 :bordered="true"
                 :striped="true"
                 :hover="true"
        />
</template>

<style lang="scss" scoped>
    .b-table {
        margin-top: 50px;
    }
</style>
