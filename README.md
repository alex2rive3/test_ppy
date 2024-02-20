# Proyecto de Pruebas Automatizadas con Python

Este proyecto está diseñado para ejecutar pruebas en múltiples archivos utilizando Jest para pruebas en JavaScript y un script en Python para la automatización del proceso.

## Indicaciones para el uso
Para el correcto funcionamiento del los scripts los alumnos deben completar los enunciados dentro de las funciones que se encuntran en el _.template.js_ de modo a que los test se puedan ejecutar correctamente, es muy importante tambien que se tenga muy presente que todo lo que se encuentra escrito entre los simbolos __*" "__ son obligatorios

**Tambien es de suma importancia que los alumnos entreguen sus archivos con sus nombres para un correcto seguimiento, ya que de otro modo se va a dificultar muchisimo saber a quien corresponde el archivo que esta siendo testeado.**

## Requisitos

Asegúrate de tener instalados los siguientes elementos antes de comenzar:

- Node.js
- Python

## Configuración

1. Clona este repositorio:

```
git clone https://github.com/alex2rive3/test_ppy.git
cd test_ppy
```
2. Instala las dependencias

```
npm install
```

## Ejecutar Test
Para ejecutar el test se tiene que correr el comando 
```
python3 run_tests.py
```
esto desplegara una mensaje para seleccionar el test que se quiere correr, una vez seleccionado el test se ejecutara y se mostrara el resultado en la consola.
```
Selecciona las pruebas que deseas ejecutar:
1. Pruebas de vectores y bucles
2. Pruebas del ejercitario
3. Pruebas de decisiones
Ingresa el número correspondiente a tu elección (1, 2 o 3): 
```

## Estructura de Carpetas 
- desiciones,ejercitarios y vectores_bucles: Contiene los archivos de los alumnos que se probarán automáticamente.
- test: Contiene los archivos para los test.
- run_tests.py: Script de Python para la automatización de la ejecución de pruebas sobre todos los archivos de las carpetas.
