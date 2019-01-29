<script lang="ts">
    import Component from 'vue-class-component';

    import AbstractFigureForm from './AbstractFigureForm.vue';
    import { Square }         from '@/types/Figures';

    @Component
    export default class SquareForm extends AbstractFigureForm<Square> {
    }
</script>

<template>
    <div>
        <input type="text" v-model="figure.sideLength" placeholder="Side Length"/>
    </div>
</template>

<style scoped>

</style>
