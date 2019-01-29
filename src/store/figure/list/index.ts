import { Module } from 'vuex';

import { ListFiguresState }    from '@/types';
import { mutations }           from '@/store/figure/list/mutations';
import { AddFigureFormModule } from '@/store/figure/add';

export const state: ListFiguresState = {
    figures: [],
};

const namespaced: boolean = true;

export const ListFiguresModule: Module<ListFiguresState, any> = {
    namespaced,
    state,
    mutations,
    modules: {
        add: AddFigureFormModule
    }
};
