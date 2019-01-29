import { MutationTree } from 'vuex';

import { ListFiguresState } from '@/types';
import { Figure }           from '@/types/Figures';
import { ADD_FIGURE }       from '@/store/figure/list/mutations.types';

export const mutations: MutationTree<ListFiguresState> = {
    [ADD_FIGURE](state: ListFiguresState, figure: Figure): void {
        state.figures.push(figure);
    }
};
