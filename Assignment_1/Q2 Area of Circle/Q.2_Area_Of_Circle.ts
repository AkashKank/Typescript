var radius = 4;
var area = 0;
var PI = 3.14;
area = Area_Of_Circle(radius);
console.log("Area of Circle is " + area);

function Area_Of_Circle(value) {
    var Circle_Area = 0;
    Circle_Area = PI * radius * radius;
    return Circle_Area;
}