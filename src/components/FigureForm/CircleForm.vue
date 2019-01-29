<script lang="ts">
    import AbstractFigureForm from './AbstractFigureForm.vue';
    import Component          from 'vue-class-component';
    import { Circle }         from '@/types/Figures';

    @Component
    export default class CircleForm extends AbstractFigureForm<Circle> {
    }
</script>

<template>
    <div>
        <input type="text" v-model="figure.radius" placeholder="Radius"/>
    </div>
</template>

<style scoped>

</style>
