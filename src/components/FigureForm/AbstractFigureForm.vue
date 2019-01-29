<script lang="ts">
    import Vue        from 'vue';
    import { Prop }   from 'vue-property-decorator';

    import { Figure } from '@/types/Figures';

    export default abstract class AbstractFigureForm<T extends Figure> extends Vue {
        @Prop() figure: T;
    }
</script>
