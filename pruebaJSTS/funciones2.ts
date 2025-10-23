function suma(a:number,b:number=3,c:number=4):number{
    return a+b;
}
function multiplicar2(a:number,b:number):number{
    return a*b;
}

let multiplicar=function(a:number,b:number):number{return a*b;}

let multiplicar3=(a:number,b:number):any=>a*b;

function imprimeValor(a:any):void{
    console.log(a);
}

function escribirNombre(nombre:string,apellidos:string):void{
    if(apellidos!=undefined)
        console.log("Hola "+nombre+" "+apellidos);
    else
        console.log("Hola "+nombre);
}

function recorrerArray(array:number[]):void{
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}
function sumaARRAY(a:number,b:number,c:number,...resto:number[]):number{
    console.log(resto);
    return a+b+c;
}