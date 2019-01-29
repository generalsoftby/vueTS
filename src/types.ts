import { Figure, FigureType } from '@/types/Figures';

export interface RootState {
    title: 'VueTS'
}

export interface AddFigureFormState {
    type: FigureType | null,
    figure: Figure | null,
    error: string | null,
}

export interface ListFiguresState {
    figures: Figure[],
}
