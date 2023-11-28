import Point from "./Point";

export default class Geometry {
  private static points: Point[] = [];

  constructor(point: Point) {
    Geometry.points.push(point);
  }

  getPoints(): Point[] {
    return Geometry.points;
  }

  perimeter():number {
    let perimeter = 0;
    for (let i = 0; i < Geometry.points.length - 1; i++){
        perimeter += Geometry.points[i].distance(Geometry.points[i + 1]);
    }
    return perimeter;
  }
}
