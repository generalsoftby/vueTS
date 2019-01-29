<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import AddFigureForm      from '@/components/AddFigureForm.vue';
    import ListFigures        from '@/components/ListFigures.vue';

    @Component({
        components: {
            ListFigures,
            AddFigureForm,
        },
    })
    export default class Home extends Vue {
    }
</script>

<template>
    <div>
        <add-figure-form/>
        <list-figures/>
    </div>
</template>
