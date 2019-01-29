import { Module } from 'vuex';

import { AddFigureFormState } from '@/types';
import { mutations }          from '@/store/figure/add/mutations';
import { actions }            from '@/store/figure/add/actions';

export const state: AddFigureFormState = {
    figure: null,
    type: null,
    error: null,
};

export const AddFigureFormModule: Module<AddFigureFormState, any> = {
    namespaced: true,
    state,
    mutations,
    actions,
};
