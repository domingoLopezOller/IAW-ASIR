var variable = 7;
const PI:number =3.14159;
const pi:number=3.14159;

function adivinaNumeroJS():void {
    var numero = Math.floor(Math.random() * 100) + 1;
    console.log(numero);
    var consulta, contador = 0;
    do {
        consulta = parseInt(prompt("Introduce un número o indica -1 para salir: ") || " ");
        if (consulta < numero && consulta != -1) {
            alert("El número es inferior al correcto");
            contador++;
        }
        else if (consulta > numero && consulta != -1) {
            alert("El número es superior al correcto");
            contador++;
        }
        else {
            consulta = -1;
        }
    } while (consulta != -1);
    alert("El número correcto es: " + numero + " y has realizado " + contador + " intentos.");
}
