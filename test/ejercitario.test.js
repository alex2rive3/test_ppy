const {
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
    }= require('');
describe("Variables y tipos de datos ", () => {
    // Define una prueba utilizando Jest
    test('tipoDeDato imprime al menos un argumento de tipo string', () => {
        // Captura (espía) la función console.log para realizar verificaciones
        const consoleSpy = jest.spyOn(console, 'log');
        // Llama a la función que queremos probar
        typeOfString();
        // Verifica que console.log haya sido llamado con al menos un argumento de tipo 'string'
        expect(consoleSpy.mock.calls.some(args => typeof args[0] === 'string')).toBe(true);
    
        // Restaura la función original de console.log
        consoleSpy.mockRestore();
    });
    test('tipoDeDato imprime al menos un argumento de tipo number', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        typeOfNumber();
        expect(consoleSpy.mock.calls.some(args => typeof args[0] === 'number')).toBe(true);
        consoleSpy.mockRestore();
    });
    test('tipoDeDato imprime al menos un argumento de tipo boolean', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        typeOfBooleanTrue();
        expect(consoleSpy.mock.calls.some(args => typeof args[0] === 'boolean')).toBe(true);
        consoleSpy.mockRestore();
    });
    test('tipoDeDato imprime al menos un argumento de tipo boolean', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        typeOfBooleanFalse();
        expect(consoleSpy.mock.calls.some(args => typeof args[0] === 'boolean')).toBe(true);
        consoleSpy.mockRestore();
    });

    test('tipoDeDato imprime al menos un argumento de tipo null', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        typeOfNull();
        expect(consoleSpy.mock.calls.some(args => args[0] === null)).toBe(true);
        consoleSpy.mockRestore();
    });
    test('tipoDeDato imprime al menos un argumento de tipo undefined', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        typeOfUndefined();
        expect(consoleSpy.mock.calls.some(args => args[0] === undefined)).toBe(true);
        consoleSpy.mockRestore();
    });
    test('tipoDeDato imprime al menos un argumento de tipo array', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        typeOfArray();
        expect(consoleSpy.mock.calls.some(args => Array.isArray(args))).toBe(true);
        consoleSpy.mockRestore();
    });
});


describe("Decisiones en javascript (if,if else, switch)", () => {
    describe("Mayor menor o igual a 10", () => {
        test('Mayor a 10', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            mayorMenorIgual(15);
            expect(consoleSpy.mock.calls.some(args => args[0] === 'mayor')).toBe(true);
        });
        test('Menor a 10', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            mayorMenorIgual(9);
            expect(consoleSpy.mock.calls.some(args => args[0] === 'menor')).toBe(true);
        });
        test('Igual a 10', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            mayorMenorIgual(10);
            expect(consoleSpy.mock.calls.some(args => args[0] === 'igual')).toBe(true);
        });
    });
    describe("Par o impar", () => {
        test('Par 4', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            isPar(4);
            expect(consoleSpy.mock.calls.some(args => args[0] === 'par')).toBe(true);
        });
        test('Impar 3', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            isPar(3);
            expect(consoleSpy.mock.calls.some(args => args[0] === 'impar')).toBe(true);
        });
    });
    describe("Vocal o consonante", () => {
        test('Vocal a', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            isVocal('a');
            expect(consoleSpy.mock.calls.some(args => args[0] === 'vocal')).toBe(true);
        });
        test('Vocal e', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            isVocal('e');
            expect(consoleSpy.mock.calls.some(args => args[0] === 'vocal')).toBe(true);
        });
        test('Vocal i', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            isVocal('i');
            expect(consoleSpy.mock.calls.some(args => args[0] === 'vocal')).toBe(true);
        });
        test('Vocal o', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            isVocal('o');
            expect(consoleSpy.mock.calls.some(args => args[0] === 'vocal')).toBe(true);
        });
        test('Vocal u', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            isVocal('u');
            expect(consoleSpy.mock.calls.some(args => args[0] === 'vocal')).toBe(true);
        });
        test('Consonante b', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            isVocal('b');
            expect(consoleSpy.mock.calls.some(args => args[0] === 'consonante')).toBe(true);
        });
        test('Consonante c', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            isVocal('c');
            expect(consoleSpy.mock.calls.some(args => args[0] === 'consonante')).toBe(true);
        });
    });
    describe("Mayor o menor de edad", () => {
        test('Mayor de edad 18', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            mayorMenorEdad(18);
            expect(consoleSpy.mock.calls.some(args => args[0] === 'mayor de edad')).toBe(true);
        });
        test('Menor de edad 17', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            mayorMenorEdad(17);
            expect(consoleSpy.mock.calls.some(args => args[0] === 'menor de edad')).toBe(true);
        });
    });
    describe("Día de la semana", () => {
        test('Lunes', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            diaDeLaSemana(1);
            expect(consoleSpy.mock.calls.some(args => args[0] === 'Lunes')).toBe(true);
            consoleSpy.mockRestore();
        });
        test('Martes', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            diaDeLaSemana(2);
            expect(consoleSpy.mock.calls.some(args => args[0] === 'Martes')).toBe(true);
            consoleSpy.mockRestore();
        });
        test('Miercoles', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            diaDeLaSemana(3);
            expect(consoleSpy.mock.calls.some(args => args[0] === 'Miercoles')).toBe(true);
            consoleSpy.mockRestore();
        });
        test('Jueves', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            diaDeLaSemana(4);
            expect(consoleSpy.mock.calls.some(args => args[0] === 'Jueves')).toBe(true);
            consoleSpy.mockRestore();
        });
        test('Viernes', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            diaDeLaSemana(5);
            expect(consoleSpy.mock.calls.some(args => args[0] === 'Viernes')).toBe(true);
            consoleSpy.mockRestore();
        });
        test('Sabado', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            diaDeLaSemana(6);
            expect(consoleSpy.mock.calls.some(args => args[0] === 'Sabado')).toBe(true);
            consoleSpy.mockRestore();
        });
        test('Domingo', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            diaDeLaSemana(7);
            expect(consoleSpy.mock.calls.some(args => args[0] === 'Domingo')).toBe(true);
            consoleSpy.mockRestore();
        });
    });
});
describe('Fuciones', () => {
    describe('suma de dos numeros', () => {
        test('suma 2 + 3', () => {
            expect(suma(2,3)).toBe(5);
        });
    });
    describe('Par es par devolver true y en caso que no false', () => {
        test('Par 4', () => {
            expect(isParBolean(4)).toBe(true);
        });
        test('Impar 3', () => {
            expect(isParBolean(3)).toBe(false);
        });
    });
    describe('Suma de un array', () => {
        test('suma [1,2,3,4,5]', () => {
            expect(sumaArray([1,2,3,4,5])).toBe(15);
        });
        test('suma [1,2,3,4,5,6,7,8,9,10]', () => {
            expect(sumaArray([1,2,3,4,5,6,7,8,9,10])).toBe(55);
        });
    });
    describe('Longitud mas largo', () => {
        test('longitudMasLargo ["hola","mundo","cruel"]', () => {
            expect(longitudMasLargo(["hola","mundo","cruel"])).toBe(5);
        });
        test('longitudMasLargo ["hola","mundo","cruel","adios"]', () => {
            expect(longitudMasLargo(["hola","mundo","cruel","adios"])).toBe(5);
        });
    });
    describe('Covertir Objeto a Array de los valores de este', () => {
        test('objetToArray {nombre:"juan",edad:25}', () => {
            expect(objetToArray({nombre:"juan",edad:25})).toEqual(["juan",25]);
        });
        test('objetToArray {nombre:"juan",edad:25,apellido:"perez"}', () => {
            expect(objetToArray({nombre:"juan",edad:25,apellido:"perez"})).toEqual(["juan",25,"perez"]);
        });
    });
});

describe('Vectores', () => {
    describe('Numero mas grande', () => {
        test('numeroMasGrande [1,2,3,4,5]', () => {
            expect(numeroMasGrande([1,2,3,4,5])).toBe(5);
        });
    
        test('numeroMasGrande [10,20,30,40,50]', () => {
            expect(numeroMasGrande([10,20,30,40,50])).toBe(50);
        });
    
        test('numeroMasGrande [] (array vacío)', () => {
            expect(numeroMasGrande([])).toBe(0); 
        });
    
        test('numeroMasGrande [-5,-10,-2,-8]', () => {
            expect(numeroMasGrande([-5,-10,-2,-8])).toBe(0); 
        });
    });
    describe('Ordenar array de menor a mayor', () => {
        test('ordenarArray [5,3,2,4,1]', () => {
            expect(ordenarArray([5,3,2,4,1])).toEqual([1,2,3,4,5]);
        });
        test('ordenarArray [10,20,30,40,50]', () => {
            expect(ordenarArray([10,20,30,40,50])).toEqual([10,20,30,40,50]);
        });
        test('ordenarArray [20,15,1,10,8,7,9]', () => {
            expect(ordenarArray([20,15,1,10,8,7,9])).toEqual([1,7,8,9,10,15,20]);
        });
        test('ordernarArray []', () => {
            expect(ordenarArray([])).toEqual([]);
        });
    });
    describe('Array con elementos comunes', () => {
        test('elementosComunes [1,2,3,4,5],[4,5,6,7,8]', () => {
            expect(elementosComunes([1,2,3,4,5],[4,5,6,7,8])).toEqual([4,5]);
        });

        test(`elementosComunes [1,'hola',true,false,'algo'],[1,true,'hola',null,12]`, () => {
            expect(elementosComunes([1,'hola',true,false,'algo'],[1,true,'hola',null,12])).toEqual([1,'hola',true]);
        });
        test(`elementosComunes ['hola','mundo','cruel'],['hola','adios','mundo']`, () => {
            expect(elementosComunes(['hola','mundo','cruel'],['hola','adios','mundo'])).toEqual(['hola','mundo']);
        });
    });
    describe('Strings en mayusculas', () => {
        test('stringsMayusculas ["hola","mundo","cruel"]', () => {
            expect(stringsMayusculas(["hola","mundo","cruel"])).toEqual(["HOLA","MUNDO","CRUEL"]);
        });
        test('stringsMayusculas ["hola","mundo","cruel","adios"]', () => {
            expect(stringsMayusculas(["hola","mundo","cruel","adios"])).toEqual(["HOLA","MUNDO","CRUEL","ADIOS"]);
        });
    });
    describe('Suma acumulativa', () => {
        test('sumaAcumulativa [1,2,3,4,5]', () => {
            expect(sumaAcumulativa([1,2,3,4,5])).toEqual([1,3,6,10,15]);
        });
        test('sumaAcumulativa [10,20,30,40,50]', () => {
            expect(sumaAcumulativa([10,20,30,40,50])).toEqual([10,30,60,100,150]);
        });
    });
});
describe('Bucles', () => {
    test('imprimirFor del 1 al 10 ', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        imprimirFor();
        expect(consoleSpy.mock.calls).toEqual([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]);
        consoleSpy.mockRestore();
    });
    test('imprimirWhile del 1 al 5', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        imprimirWhile();
        expect(consoleSpy.mock.calls).toEqual([[1],[2],[3],[4],[5]]);
        consoleSpy.mockRestore();
    });
    test('Imprimir Array [1,2,3,4,5]', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        imprimirArray([1,2,3,4,5]);
        expect(consoleSpy.mock.calls).toEqual([[1],[2],[3],[4],[5]]);
        consoleSpy.mockRestore();
    });
    test('Sumar numeros hasta n', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        sumaAcumulada(5);
        expect(consoleSpy.mock.calls).toEqual([[1], [3], [6], [10], [15]]);
        consoleSpy.mockRestore();
      });
    test('Sumar los elementos de un array con while', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        sumaWhile([1,2,3,4,5]);
        expect(consoleSpy.mock.calls).toEqual([[1],[3],[6],[10],[15]]);
        consoleSpy.mockRestore();
    });
});