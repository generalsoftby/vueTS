<script lang="ts">
    import { Component, Vue }   from 'vue-property-decorator';
    import { Getter, State }    from 'vuex-class';

    import { ListFiguresState } from '@/types';

    const namespace = 'figures';

    @Component({
        components: {
        },
    })
    export default class Statistics extends Vue {
        @State(namespace) figureState: ListFiguresState;
        @Getter('area', { namespace }) area: number;
    }
</script>

<template>
    <div>
        <div>{{ area }}</div>
        <router-link :to="{ name: 'home' }">Back</router-link>
    </div>
</template>
