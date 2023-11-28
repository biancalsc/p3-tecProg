export default class Point {
    x: number;
    y: number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    toString(): string {
        return `(${this.x},${this.y})`;
    }

    distance(point: Point): number {
        const distanciaX = point.x - this.x;
        const distanciaY = point.y - this.y;
        return Math.sqrt(distanciaX ** 2 + distanciaY ** 2);
    }
}