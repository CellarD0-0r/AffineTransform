export class Vector {
    public dim: number;
    public elements: number[];

    constructor(d: number/*, el: number[]*/) {
        this.dim = d;
        this.elements = [];
        // if (d === el.length) {
        //     this.elements = el;
        // }
    }

    public static sumVectors(a: Vector, b: Vector): Vector | any {
        if (a.dim !== b.dim) return;
        let c = new Vector(a.dim);
        for (let i = 0; i < a.dim; i++) {
            c.elements[i] = a.elements[i] + b.elements[i];
        }
        return c;
    }

    public static diffVectors(a: Vector, b: Vector): Vector | any {
        if (a.dim !== b.dim) return;
        let c = new Vector(a.dim);
        for (let i = 0; i < a.dim; i++) {
            c.elements[i] = a.elements[i] - b.elements[i];
        }
        return c;
    }

    public static scaleVector(a: Vector, k: number): Vector {
        let b = new Vector(a.dim);
        for (let i = 0; i < a.dim; i++) {
            b.elements[i] = a.elements[i] * k;
        }
        return b;
    }

    public static multiplyVectors(a: Vector, b: Vector): Vector | any {
        if (a.dim !== b.dim) return;
        if (a.dim !== 3 || b.dim !== 3) return;
        let c = new Vector(3);
        c.elements[0] = a.elements[1] * b.elements[2] - a.elements[2] * b.elements[1];
        c.elements[1] = -  a.elements[0] * b.elements[2] + a.elements[2] * b.elements[0];
        c.elements[2] = a.elements[0] * b.elements[1] - a.elements[1] * b.elements[0];
        return c;
    }

    private static abs(a: Vector): number {
        let b = 0;
        for (let i = 0; i < a.dim; i++) {
            b += a.elements[i] * a.elements[i];
        }
        b = Math.sqrt(b);
        return b;
    }

    public static normalizeVector(a: Vector): Vector {
        let b = new Vector(a.dim);
        for (let i = 0; i < a.dim; i++) {
            b.elements[i] = a.elements[i] / Vector.abs(a);
        }
        return b;
    }
}
