<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import AddFigureForm      from '@/components/AddFigureForm.vue';
    import ListFigures        from '@/components/ListFigures.vue';

    // const module1=namespace('t1/t2');
    // const module2=namespace('t1');
    //
    @Component({
        components: {
            ListFigures,
            AddFigureForm,
        },
    })
    export default class Home extends Vue {
        // @module1.State('/') state1: any;
        // @module2. state2: any;
        //
        // mounted() {
        //     console.log(this.state1, this.state2);
        // }
    }
</script>

<template>
    <div>
        <AddFigureForm></AddFigureForm>
        <list-figures></list-figures>
    </div>
</template>
