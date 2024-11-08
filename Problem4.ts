type Circle = {
    shape: "circle";
    radius: number;
};

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};

function calculateShapeArea(shape: (Circle | Rectangle)): number {
    if (shape.shape === "circle") {
        return Math.PI * shape.radius * shape.radius;
    } else if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    } else {
        return shape 
    }
}
