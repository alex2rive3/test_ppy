# Proyecto de Pruebas Automatizadas en Python

Este proyecto está diseñado para ejecutar pruebas automatizadas en múltiples archivos utilizando Jest para pruebas en JavaScript y un script en Python para la automatización del proceso.

## Requisitos

Asegúrate de tener instalados los siguientes elementos antes de comenzar:

- [Node.js](https://nodejs.org/) (para Jest)
- [Python](https://www.python.org/) (para el script de automatización)

## Configuración

1. Clona este repositorio:

```
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
cd nombre-del-repositorio
```
2. Instala las dependencias

```
npm install
```

## Ejecutar Test
Para ejecutar el test se tiene que correr el comando 
```
python3 runTest.py
```
esto hara que se ejecute el test que se encuentra en la carpeta test sobre todos los archivos que se encuentren en la carpeta alumnos

## Estructura de Carpetas 
- alumnos: Contiene los archivos de los alumnos que se probarán automáticamente.
- test: Contiene el archivo de prueba principal (ejercitario.test.js).
- run_tests.py: Script de Python para la automatización de la ejecución de pruebas.
