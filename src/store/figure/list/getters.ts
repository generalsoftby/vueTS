import { GetterTree }                  from 'vuex';
import { ListFiguresState, RootState } from '@/types';

import { Figure } from '@/types/Figures';

export const getters: GetterTree<ListFiguresState, RootState> = {
    area(state: ListFiguresState): number {
        return state.figures.reduce<number>((accumulator: number, figure: Figure): number => {
            accumulator += figure.area;

            return accumulator;
        }, 0);
    }
};
