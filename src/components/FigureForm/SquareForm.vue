<script lang="ts">
    import Component from 'vue-class-component';

    import AbstractFigureForm from './AbstractFigureForm.vue';
    import { Square }         from '@/types/Figures';

    @Component
    export default class SquareForm extends AbstractFigureForm<Square> {
    }
</script>

<template>
    <b-form-group label="Enter side length">
        <b-form-input type="text" v-model="figure.sideLength" placeholder="Side Length"/>
    </b-form-group>
</template>

<style scoped>

</style>
