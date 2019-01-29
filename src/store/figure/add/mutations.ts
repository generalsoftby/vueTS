import { MutationTree } from 'vuex';

import { AddFigureFormState }         from '@/types';
import { Circle, FigureType, Square } from '@/types/Figures';
import { SET_ERROR, SET_TYPE }        from '@/store/figure/add/mutations.types';

const classMap: { [key: string]: any } = {
    [FigureType.CIRCLE]: Circle,
    [FigureType.SQUARE]: Square,
};

export const mutations: MutationTree<AddFigureFormState> = {
    [SET_TYPE](state: AddFigureFormState, type: FigureType): void {
        state.type = type;
        state.figure = type ? new classMap[type]() : null;
    },

    [SET_ERROR](state: AddFigureFormState, error: string): void {
        state.error = error;
    },
};
