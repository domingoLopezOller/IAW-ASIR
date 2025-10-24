function suma(a, b, c) {
    if (b === void 0) { b = 3; }
    if (c === void 0) { c = 4; }
    return a + b;
}
function multiplicar2(a, b) {
    return a * b;
}
var multiplicar = function (a, b) { return a * b; };
var multiplicar3 = function (a, b) { return a * b; };
function imprimeValor(a) {
    console.log(a);
}
function escribirNombre(nombre, apellidos) {
    if (apellidos != undefined)
        console.log("Hola " + nombre + " " + apellidos);
    else
        console.log("Hola " + nombre);
}
function recorrerArray(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
function sumaARRAY(a, b, c) {
    var resto = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        resto[_i - 3] = arguments[_i];
    }
    console.log(resto);
    return a + b + c;
}
function mediaPersonas() {
    var personas = [{ edad: 40, nombre: "", trabajo: "informático" }, { edad: 30, nombre: "Angel", trabajo: "Ingeniero Agrónomo" }];
    console.log(personas.length);
    console.log(personas[0].edad + " " + personas[0].nombre);
    console.log(personas[0]);
    var edades = personas.reduce(function (a, b) { return a + b.edad; }, 0);
    var media = edades / personas.length;
    console.log(media);
}
