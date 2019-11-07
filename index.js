class Circle
{
    constructor(radius)
    {
        this.radius = radius;
        //this.diameter = this.radius * 2;
        this.circumference = this.diameter * Math.PI;
        this.area = this.radius * this.radius * Math.PI;
    }

    set diameter(rad) 
    {
        this.diameter = this.radius * 2;
    }
    get diameter()
    {
        return this.diameter;
    }
}