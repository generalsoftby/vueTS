<script lang="ts">
    import Component                       from 'vue-class-component';
    import { Action, Mutation, namespace } from 'vuex-class';
    import Vue                             from 'vue';

    import { AddFigureFormState } from '@/types';
    import { Figure, FigureType } from '@/types/Figures';
    import CircleForm             from '@/components/FigureForm/CircleForm.vue';
    import SquareForm             from '@/components/FigureForm/SquareForm.vue';
    import { SET_TYPE }           from '@/store/figure/add/mutations.types';
    import AbstractFigureForm     from '@/components/FigureForm/AbstractFigureForm.vue';

    const path = 'figures/add',
          module = namespace('figures');

    @Component({
        components: {
            CircleForm
        }
    })
    export default class AddFigureForm extends Vue {
        @module.State('add') formState: AddFigureFormState;
        @Mutation(SET_TYPE, { namespace: path }) setType: (type: string) => void;
        @Action('submit', { namespace: path }) submit: () => Figure;

        readonly formsMap: {[key: string]: typeof AbstractFigureForm} = {
            [FigureType.CIRCLE]: CircleForm,
            [FigureType.SQUARE]: SquareForm,
        };

        public types: string[] = Object.values(FigureType);

        get displayedTypes() {
            return this.types.filter(item => !!this.formsMap[item]);
        }
    }
</script>

<template>
    <b-form @submit.prevent="submit()">
        <b-form-group label="Choose type">
            <b-form-radio-group :options="displayedTypes" name="type" @change="setType($event)">
            </b-form-radio-group>
        </b-form-group>
        <div v-if="formState.type">
            <component :is="formsMap[formState.type]" :figure="formState.figure"/>
        </div>
        <b-alert :show="!!formState.error" variant="danger">
            {{ formState.error }}
        </b-alert>
        <b-button type="submit" variant="primary" :disabled="!formState.type">
            Add figure
            <span v-if="formState.figure && formState.figure.isValid()">
                {{ formState.figure.area }}
            </span>
        </b-button>
    </b-form>
</template>


<style scoped>

</style>
