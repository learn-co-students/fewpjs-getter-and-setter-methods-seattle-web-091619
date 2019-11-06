// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  set diameter(newDiameter) {
    this._diameter =  newDiameter;
    this.radius = newDiameter / 2
  }

  set circumference(newCircumference) {
    this._circumference = newCircumference;
    this.radius = newCircumference / 2 / Math.PI;
  }

  set area(radius) {
    this._area = radius ** 2 * Math.PI;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return this.radius * 2 * Math.PI;
  }

  get area() {
    return this.radius ** 2 * Math.PI;
  }
}