<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { State }          from 'vuex-class';

    import { FiguresState }       from '@/types';
    import { Figure, FigureType } from '@/types/Figures';

    const namespace = 'figures';

    interface Stats {
        types: {
            [key: string]: number;
        },
        total: number,
    }

    @Component({
        components: {},
    })
    export default class StatisticsBlock extends Vue {
        @State(namespace) figureState: FiguresState;
        public readonly variants = {
            [FigureType.SQUARE]: 'primary',
            [FigureType.CIRCLE]: 'danger',
        };

        get stats(): Stats {
            return this.figureState.figures.reduce((accumulator: Stats, figure: Figure): Stats => {

                if (typeof accumulator.types[figure.getType()] === 'undefined') {
                    accumulator.types[figure.getType()] = 0;
                }

                accumulator.types[figure.getType()] += figure.area;
                accumulator.total += figure.area;

                return accumulator;
            }, {
                types: {},
                total: 0,
            });
        }
    }
</script>

<template>
    <div>
        <h2>Stats</h2>
        <b-progress v-if="stats.total" show-progress :max="stats.total">
            <b-progress-bar
                v-for="(item, key) in stats.types"
                :key="key"
                :value="item"
                :variant="variants[key]"
            />
        </b-progress>
        <b-alert :show="true" variant="info" v-else>
            Nothing to display
        </b-alert>
    </div>
</template>
