const {enumerarCadaTercerElemento}=require('');
describe('Vectores y bucles: Imprimir cada tercer elemento de un array', () => {
    test('Imprimir cada tercer elemento de un array', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const vector = [
            "Viuda Negra", "Cobra Real", "Mamba Verde", 
            "Araña de tela de embudo", "Araña reclusa parda", 
            "Mamba negra", "Araña de arena de seis ojos", 
            "Serpiente tigre", "Pez globo", "Rana punta de flecha", 
            "Araña brasileña", "Serpiente marrón", "Pez piedra", 
            "Escorpión amarillo", "Gusano de la muerte", 
            "Pulpo de anillos azules", "Caracol cono", 
            "Taipán", "Rana dardo dorada", "Avispa de mar"
          ];;
        enumerarCadaTercerElemento(vector);
        expect(consoleSpy.mock.calls).toEqual([
            ['1: Mamba Verde'], ['2: Mamba negra'], ['3: Pez globo'], ['4: Serpiente marrón'],['5: Gusano de la muerte'],[ '6: Taipán']
        ]);
        consoleSpy.mockRestore();
    });
    test('Imprimir cada tercer elemento de un array', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        enumerarCadaTercerElemento(vector);
        expect(consoleSpy.mock.calls).toEqual([['1: 3'], ['2: 6'], ['3: 9']]);
        consoleSpy.mockRestore();
    });
    test('Imprimir cada tercer elemento de un array', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const vector = ["Rojo", "Verde", "Azul", "Amarillo", "Naranja", "Morado", "Rosa"]
        enumerarCadaTercerElemento(vector);
        expect(consoleSpy.mock.calls).toEqual([['1: Azul'], ['2: Morado']]);
    });

});