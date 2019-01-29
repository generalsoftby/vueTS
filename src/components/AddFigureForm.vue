<script lang="ts">
    import Component                       from 'vue-class-component';
    import { Action, Mutation, namespace } from 'vuex-class';
    import Vue                             from 'vue';

    import { AddFigureFormState } from '@/types';
    import { Figure, FigureType } from '@/types/Figures';
    import CircleForm             from '@/components/FigureForm/CircleForm.vue';
    import SquareForm             from '@/components/FigureForm/SquareForm.vue';
    import { SET_TYPE }           from '@/store/figure/add/mutations.types';

    const path = 'figures/add';
    const module = namespace('figures');

    @Component({
        components: {
            CircleForm
        }
    })
    export default class AddFigureForm extends Vue {
        @module.State('add') formState: AddFigureFormState;
        @Mutation(SET_TYPE, { namespace: path }) setType: (type: string) => void;
        @Action('submit', { namespace: path }) submit: () => Figure;

        readonly formsMap = {
            [FigureType.CIRCLE]: CircleForm,
            [FigureType.SQUARE]: SquareForm,
        };

        public types: any = Object.values(FigureType);
    }
</script>

<template>
    <div>
        <div
             v-for="type in types"
             v-if="formsMap[type]"
        >
            <input type="radio"
                   :id="'figureType[' + type + ']'"
                   :value="type"
                   name="type"
                   @change="setType(type)"
            />
            <label :for="'figureType[' + type + ']'">{{ type }}</label>
        </div>
        <div>
            {{ formState.type }}
        </div>
        <div v-if="formState.type">
            <component :is="formsMap[formState.type]" :figure="formState.figure">

            </component>
        </div>
        <div v-if="formState.figure">
            <button @click="submit()">Add</button>
        </div>
        <div style="color: red">
            {{ formState.error }}
        </div>
    </div>
</template>


<style scoped>

</style>
