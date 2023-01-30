const SHAPES = {
	square: (a) => a * a,
	circle: (r) => Math.PI * r * r,
	triangle: (a, h) => (a * h) / 2,
	rectangle: (a, b) => a * b,
};

function getAreaFunctions(shapes) {
	return shapes.map((shape) => SHAPES[shape]);
}

export default getAreaFunctions;
/*function getAreaFunctions(shapes) {
    let functions = [];
    shapes.forEach(shape=>{
        let func;
        switch (shape.toLowerCase()) {
            case "square":
                func = (x) => x * x;
                break;
            case "circle":
                func = (r) => Math.PI * r * r;
                break;
            case "rectangle":
                func = (x, y) => x * y;
                break;
            case "triangle":
                func = (h, b) => b * h / 2
                break;
        }
        functions.push(func);
    });
    return functions;
}

export default getAreaFunctions;
*/
/*function getAreaFunctions(shapes) {
    const mapnew=new Map();
    const pi=Math.PI;
    let mylist=[];
    mapnew.set('square', (x) => x**2).set('circle',(x) =>(x**2)*pi).set('rectangle', (x,y) => x*y).set('triangle',(x,h) => (x*h)/2);
    for (let i=0;i<shapes.length;i++){
        mylist.push(mapnew.get(shapes[i]));;
    }
    return mylist;
}
export default getAreaFunctions;
*/