<script lang="ts">
    import Component from 'vue-class-component';

    import { Circle }         from '@/types/Figures';
    import AbstractFigureForm from '@/components/FigureForm/AbstractFigureForm.vue';

    @Component
    export default class CircleForm extends AbstractFigureForm<Circle> {
    }
</script>

<template>
    <b-form-group label="Enter radius">
        <b-form-input type="text" v-model="figure.radius" placeholder="Radius"/>
    </b-form-group>
</template>

<style scoped>

</style>
