<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import AddFigureForm   from '@/components/AddFigureForm.vue';
    import ListFigures     from '@/components/ListFigures.vue';
    import StatisticsBlock from '@/components/StatisticsBlock.vue';

    @Component({
        components: {
            StatisticsBlock,
            ListFigures,
            AddFigureForm,
        },
    })
    export default class Home extends Vue {
    }
</script>

<template>
    <div>
        <AddFigureForm/>
        <ListFigures/>
        <StatisticsBlock/>
    </div>
</template>
