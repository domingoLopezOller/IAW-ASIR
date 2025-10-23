function suma(a,b=3,c=4){
    return a+b;
}
function multiplicar2(a,b){
    return a*b;
}

let multiplicar=function(a,b){return a*b;}

let multiplicar3=(a,b)=>a*b;

function imprimeValor(a){
    console.log(a);
}

function escribirNombre(nombre,apellidos){
    if(apellidos!=undefined)
        console.log("Hola "+nombre+" "+apellidos);
    else
        console.log("Hola "+nombre);
}

function recorrerArray(array){
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}
