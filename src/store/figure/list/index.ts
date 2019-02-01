import { Module } from 'vuex';

import { ListFiguresState }    from '@/types';
import { mutations }           from '@/store/figure/list/mutations';
import { AddFigureFormModule } from '@/store/figure/add';
import { getters }             from '@/store/figure/list/getters';

export const state: ListFiguresState = {
    figures: [],
};

export const ListFiguresModule: Module<ListFiguresState, any> = {
    namespaced: true,
    state,
    mutations,
    getters,
    modules: {
        add: AddFigureFormModule
    }
};
