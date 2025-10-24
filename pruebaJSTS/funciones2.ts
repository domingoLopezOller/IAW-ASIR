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

interface Persona{
    nombre:string,
    edad:number,
    trabajo?:string
}

function mediaPersonas():void{
    let personas:Persona[]=[{edad:40,nombre:"",trabajo:"informático"},{edad:30,nombre:"Angel",trabajo:"Ingeniero Agrónomo"}];
        console.log(personas.length);   
        console.log(personas[0].edad+" "+personas[0].nombre);
        console.log(personas[0]);
        let edades=personas.reduce((a,b)=>a+b.edad,0);
        let media=edades/personas.length;
        console.log(media);
}
