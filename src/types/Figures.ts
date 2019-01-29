export enum FigureType {
    TRIANGLE = 'TRIANGLE',
    SQUARE = 'SQUARE',
    RECTANGLE = 'RECTANGLE',
    CIRCLE = 'CIRCLE',
}

export abstract class Figure {
    private readonly type: FigureType;

    protected constructor(type: FigureType) {
        this.type = type;
    }

    abstract get area(): number;

    public getType(): FigureType {
        return this.type;
    }

    abstract isValid(): boolean;
}

export class Circle extends Figure {
    public radius: number;

    constructor() {
        super(FigureType.CIRCLE);
    }

    get area(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    isValid(): boolean {
        return this.radius > 0;
    }
}

export class Square extends Figure {
    public sideLength: number;

    constructor() {
        super(FigureType.SQUARE);
    }

    get area(): number {
        return Math.pow(this.sideLength, 2);
    }

    isValid(): boolean {
        return this.sideLength > 0;
    }
}
