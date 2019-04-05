import { Module } from 'vuex';

import { FiguresState }    from '@/types';
import { mutations }           from '@/store/figure/mutations';
import { AddFigureFormModule } from '@/store/figure/add';
import { getters }             from '@/store/figure/getters';

export const state: FiguresState = {
    figures: [],
};

export const FiguresModule: Module<FiguresState, any> = {
    namespaced: true,
    state,
    mutations,
    getters,
    modules: {
        add: AddFigureFormModule
    }
};
