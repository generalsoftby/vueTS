import Vue  from 'vue';
import Vuex from 'vuex';

import { FiguresModule } from '@/store/figure';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        figures: FiguresModule,
    }
});
