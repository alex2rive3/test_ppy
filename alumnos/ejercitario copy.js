

/* Variables y tipo de datos
Lee las instrucciones de cada comentario y escribí el código para realizar la tarea */


//Crea una variable numero y asígnale un valor de tipo number y luego imprime en la consola el valor de la variable y el tipo de dato que almacena.
function typeOfNumber(){
    let numero = 'numero';
    console.log(numero, typeof numero);
}

//Crea una variable texto y asígnale un valor de tipo string y luego imprime en la consola el valor de la variable y el tipo de dato que almacena.
function typeOfString(){
    let texto = "Hola";
    console.log(texto, typeof texto);
}
//Crea una variable verdadero y asígnale un valor de tipo boolean que represente una afirmación verdadera y luego imprime en la consola el valor de la variable y el tipo de dato que almacena.
function typeOfBooleanTrue(){
    let verdadero = true;
    console.log(verdadero, typeof verdadero);
}

//Crea una variable falso y asígnale un valor de tipo boolean que represente una afirmación falsa y luego imprime en la consola el valor de la variable y el tipo de dato que almacena.

function typeOfBooleanFalse(){
    let verdadero = true;
    console.log(verdadero, typeof verdadero);
}
//Crea una variable nulo y asígnale un valor de tipo null y luego imprime en la consola el valor de la variable y el tipo de dato que almacena.
function typeOfNull(){
    let nulo = null;
    console.log(nulo, typeof nulo);
}
//Crea una variable indefinido y asígnale un valor de tipo undefined y luego imprime en la consola el valor de la variable y el tipo de dato que almacena.
function typeOfUndefined(){
    let indefinido = undefined;
    console.log(indefinido, typeof indefinido);
}
//Crea una variable arreglo y asígnale un arreglo con varios valores de diferentes tipos de datos y luego imprime en la consola el arreglo y el tipo de dato que almacena.
function typeOfArray(){
    let arreglo = [1, "hola", true, null, undefined];
    console.log(arreglo, typeof arreglo);
}


/*Decisiones en javascript (if,if else, switch)*/

//Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor, menor o igual a 10.
function mayorMenorIgual(num){
    if(num > 10){
        console.log("mayor");
    }else if(num < 10){
        console.log("menor");
    }else{
        console.log("igual");
    }
}

//Escribe un programa que solicite al usuario que ingrese un número y verifique si es par o impar.
function isPar(num){
    if(num % 2 === 0){
        console.log("par");
    }else{
        console.log("impar");
    }
}

//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.
function isVocal(letra){
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        console.log("vocal");
    }else{
        console.log("consonante");
    }
}

//Escribe un programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad.
function mayorMenorEdad(edad){
    if(edad >= 18){
        console.log("mayor de edad");
    }else{
        console.log("menor de edad");
    }
}

//Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y muestre un mensaje en la consola indicando el día de la semana correspondiente.
function diaDeLaSemana(num){
    const semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    console.log(semana[num - 1]);
}



//Funciones

//Escribe una función que tome dos números como argumentos y devuelva su suma.
function suma(num1, num2){
    return num1 + num2;
}
//Escribe una función que tome un número como argumento y devuelva true si es par o false si es impar.
function isParBolean(num){
    return num % 2 === 0;
}

//Escribe una función que tome un array de números como argumento y devuelva la suma de sus elementos.
function sumaArray(array){
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma;
}

//Escribe una función que tome un array de strings como argumento y devuelva la longitud del string más largo.
function longitudMasLargo(array){
    let masLargo = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i].length > masLargo){
            masLargo = array[i].length;
        }
    }
    return masLargo;
}

//Escribe una función que tome un objeto como argumento y devuelva un array con los valores de todas sus propiedades.
function objetToArray(objeto){
    return Object.values(objeto);
}




//Vectores

//Escribe una función que tome un array de números como argumento y devuelva el número más grande.
function numeroMasGrande(array){
    let masGrande = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > masGrande){
            masGrande = array[i];
        }
    }
    return masGrande;
}

//Escribe una función que tome un array de números como argumento y devuelva un array con los números ordenados de menor a mayor.
function ordenarArray(array){
    return array.sort((a, b) => a - b);
}
//Escribe una función que tome dos arrays como argumentos y devuelva un array que ccontenga los elementos comunes entre ambos.
function elementosComunes(array1, array2){
    return array1.filter(value => array2.includes(value));
}
//Escribe una función que tome un array de strings como argumento y devuelva un nuevo array que contenga los strings convertidos a mayúsculas.
function stringsMayusculas(array){
    return array.map(value => value.toUpperCase());
}
//Escribe una función que tome un array de números como argumento y devuelva un nuevo array que contenga la suma acumulativa de sus elementos.
function sumaAcumulativa(array){
    let suma = 0;
    return array.map(value => suma += value);
}



//Bucles

//Escribe un bucle for que imprima en la consola los números del 1 al 10.
function imprimirFor(){
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}

//Escribe un bucle while que imprima en la consola los números del 1 al 5.
function imprimirWhile(){
    let i = 1;
    while(i <= 5){
        console.log(i);
        i++;
    }
}
//Crea un vector con los números del 1 al 5. Escribe un bucle for que imprima en la consola cada uno de los elementos del vector.
function imprimirArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

//Crea una función que reciba un número n y devuelva la suma de todos los números del 1 al n. Utiliza un bucle for para calcular la suma y muestra el resultado en la consola.
function sumaAcumulada(n){
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma = suma + i;
        console.log(suma);
    }
}

//Crea una función que reciba un vector y devuelva la suma de todos sus elementos. Utiliza un bucle while para calcular la suma y muestra el resultado en la consola.
function sumaWhile(array){
    let suma = 0;
    let i = 0;
    while(i < array.length){
        suma += array[i];
        console.log(suma);
        i++;
    }
}

module.exports = {
    typeOfString, 
    typeOfNumber,
    typeOfBooleanTrue,
    typeOfBooleanFalse,
    typeOfNull,
    typeOfUndefined,
    typeOfArray,
    mayorMenorIgual,
    isPar,isVocal,
    mayorMenorEdad,
    diaDeLaSemana,
    suma,isParBolean,
    sumaArray,
    longitudMasLargo,
    objetToArray,
    elementosComunes,
    ordenarArray,
    numeroMasGrande,
    stringsMayusculas,
    sumaAcumulativa,
    imprimirFor,
    imprimirWhile,
    imprimirArray,
    sumaAcumulada,
    sumaWhile
};
