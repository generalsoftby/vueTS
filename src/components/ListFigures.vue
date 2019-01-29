<script lang="ts">
    import Vue                  from 'vue';
    import { State }            from 'vuex-class';
    import { ListFiguresState } from '@/types';
    import Component            from 'vue-class-component';

    const namespace = 'figures';

    @Component({})
    export default class AddFigureForm extends Vue {
        @State(namespace) state: ListFiguresState;
    }
</script>

<template>
    <div>
        <table>
            <thead>
            <tr>
                <th>
                    Type
                </th>
                <th>
                    Area
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="figure in state.figures">
                <td>
                    {{ figure.getType() }}
                </td>
                <td>
                    {{ figure.area }}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>
