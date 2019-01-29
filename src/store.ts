import Vue                   from 'vue';
import Vuex                  from 'vuex';
import { ListFiguresModule } from '@/store/figure/list';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        figures: ListFiguresModule,
    }
});
