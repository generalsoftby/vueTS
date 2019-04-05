import { GetterTree }                  from 'vuex';
import { FiguresState, RootState } from '@/types';

import { Figure } from '@/types/Figures';

export const getters: GetterTree<FiguresState, RootState> = {
    area(state: FiguresState): number {
        return state.figures.reduce<number>((accumulator: number, figure: Figure): number => {
            accumulator += figure.area;

            return accumulator;
        }, 0);
    }
};
