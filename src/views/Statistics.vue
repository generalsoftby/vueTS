<script lang="ts">
    import { Component, Vue }   from 'vue-property-decorator';
    import { Getter, State }    from 'vuex-class';

    import { FiguresState } from '@/types';
    import StatisticsBlock  from '@/components/StatisticsBlock.vue';

    const namespace = 'figures';

    @Component({
        components: {
            StatisticsBlock
        },
    })
    export default class Statistics extends Vue {
    }
</script>

<template>
    <div>
        <StatisticsBlock/>
    </div>
</template>
