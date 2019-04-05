import { MutationTree } from 'vuex';

import { FiguresState } from '@/types';
import { Figure }           from '@/types/Figures';
import { ADD_FIGURE }       from '@/store/figure/mutations.types';

export const mutations: MutationTree<FiguresState> = {
    [ADD_FIGURE](state: FiguresState, figure: Figure): void {
        state.figures.push(figure);
    }
};
