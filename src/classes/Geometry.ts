import Point from "./Point";

export default class Geometry {
  static points: Point[] = [];

  constructor(point: Point) {
    Geometry.points.push(point);
  }

  getPoints(): Point[] {
    return Geometry.points;
  }

  perimeter(): number | never {
    if (Geometry.points.length < 2) {
        throw new Error("Pontos insuficientes para calcular o perímetro.");
    }

    let perimeter = 0;
    for (let i = 0; i < Geometry.points.length - 1; i++) {
        perimeter += Geometry.points[i].distance(Geometry.points[i + 1]);
    }

    perimeter += Geometry.points[Geometry.points.length - 1].distance(Geometry.points[0]);

    return perimeter;
}
}
