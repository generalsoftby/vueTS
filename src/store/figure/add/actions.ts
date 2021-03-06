import { ActionTree } from 'vuex';

import { AddFigureFormState }  from '@/types';
import { SET_ERROR, SET_TYPE } from '@/store/figure/add/mutations.types';
import { ADD_FIGURE }          from '@/store/figure/mutations.types';

export const actions: ActionTree<AddFigureFormState, any> = {
    submit({ commit, state }): any {
        const figure = state.figure;

        if (!figure || !figure.isValid()) {
            commit(SET_ERROR, 'Figure is not valid');

            return false;
        }

        commit(SET_TYPE, figure.getType());
        commit(SET_ERROR, null);

        commit(`figures/${ADD_FIGURE}`, figure, { root: true });

        return figure;
    }
};
